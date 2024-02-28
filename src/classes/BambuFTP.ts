import fs from "node:fs";
import path from "node:path";
import * as ftp from "basic-ftp";
import { PrinterDirectoryUnavailable } from "../utilities/errors";

const TIMEOUT = 15000;
const USERNAME = "bblp";

export default class BambuFTP {
	host: string;
	accessCode: string;
	private client: ftp.Client;

	constructor(host: string, accessCode: string) {
		this.host = host;
		this.accessCode = accessCode;
		this.client = new ftp.Client();
	}

	/**
	 * Read files in a given directory on the printer's SD card.
	 * @param path - The absolute path to the directory on the printer's SD card.
	 * @throws {errors.PrinterNotConnected} - If the printer is not connected.
	 */
	async readDir(path: string): Promise<string[]> {
		// Create directory if it doesn't exist
		await this.client.ensureDir(path);

		// Get print jobs
		const printJobs = await this.client.list(path).catch((error) => {
			switch (error.code) {
				case 550:
					throw new PrinterDirectoryUnavailable(path);
				default:
					throw error;
			}
		});
		return printJobs.map((printJob) => printJob.name);
	}

	/**
	 * Send a file to the printer's SD card.
	 * @param sourcePath - The absolute path to the file on the local machine.
	 * @param destinationPath - The absolute path to the file on the printer's SD card.
	 * @param progressCallback - A callback function that is called with the progress of the file transfer.
	 */
	async sendFile(
		sourcePath: string,
		destinationPath: string,
		progressCallback?: (progress: number) => void,
	) {
		const destinationDir = path.dirname(destinationPath);

		// Create directory if it doesn't exist
		await this.client.ensureDir(destinationDir).catch((error) => {
			switch (error.code) {
				case 550:
					throw new PrinterDirectoryUnavailable(destinationDir);
				default:
					throw error;
			}
		});

		// Find the size of the file
		const stats = fs.statSync(sourcePath);
		const fileSize = stats.size;

		// Add progress callback
		if (progressCallback) {
			this.client.trackProgress((info) => {
				progressCallback(info.bytes / fileSize);
			});
		}

		// Send print job
		await this.client.uploadFrom(sourcePath, destinationPath).catch((error) => {
			switch (error.code) {
				case 550:
					throw new PrinterDirectoryUnavailable(destinationPath);
				default:
					throw error;
			}
		});

		// Disconnect progress tracking
		this.client.trackProgress();
	}

	/**
	 * Remove a file from the printer's SD card.
	 * @param path - The absolute path to the file on the printer's SD card.
	 */
	async removeFile(path: string) {
		await this.client.remove(path);
	}

	/**
	 * Connect to the printer.
	 */
	private async connect() {
		if (!this.client) this.client = new ftp.Client(TIMEOUT);

		await this.client.access({
			host: this.host,
			port: 990,
			user: USERNAME,
			password: this.accessCode,
			secureOptions: {
				rejectUnauthorized: false,
			},
			secure: "implicit",
		});
	}

	/**
	 * Disconnect from the printer.
	 */
	private async disconnect() {
		this.client.close();
	}

	/**
	 * Create a context for manipulating files on the printer's SD card.
	 * This function will connect to the printer, execute the callback, and then disconnect from the printer.
	 * The goal is to prevent multiple connections to the printer at the same time.
	 * @param host - The IP address of the printer.
	 * @param accessCode - The access code for the printer.
	 * @param callback - Callback to manipulate files within the context.
	 */
	static async createContext(
		host: string,
		accessCode: string,
		callback: (context: BambuFTP) => Promise<void>,
	) {
		const context = new BambuFTP(host, accessCode);
		await context.connect();
		await callback(context).finally(() => context.disconnect());
	}
}
