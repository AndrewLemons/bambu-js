import fs from "node:fs";
import path from "node:path";
import EventEmitter from "node:events";
import * as ftp from "basic-ftp";
import {
	FileConnectionError,
	FileTimeoutError,
	FileValidationError,
	FileOperationError,
	FileNotFoundError,
	FileUploadError,
	FileDownloadError,
	FileDeleteError,
	FileDirectoryError,
	FileDisconnectionError,
} from "./utilities/file-errors.js";

export declare interface FileController {
	/**
	 * Emitted when the file controller is connected.
	 */
	on(event: "connect", listener: () => void): this;

	/**
	 * Emitted when an error occurs.
	 */
	on(event: "error", listener: (error: Error) => void): this;

	/**
	 * Emitted when a file operation progresses.
	 */
	on(
		event: "progress",
		listener: (info: {
			bytesOverall: number;
			bytesTransferred: number;
		}) => void,
	): this;
}

/**
 * Represents the connection state of the file controller.
 */
enum ConnectionState {
	DISCONNECTED = "disconnected",
	CONNECTING = "connecting",
	CONNECTED = "connected",
	DISCONNECTING = "disconnecting",
}

export interface FileControllerOptions {
	/** Connection timeout in milliseconds (default: 15000) */
	timeout?: number;
}

/**
 * Controller for managing file operations on a Bambu Lab printer's FTP server.
 */
export class FileController extends EventEmitter {
	private host: string;
	private accessCode: string;
	private client: ftp.Client | null = null;
	private connectionState: ConnectionState = ConnectionState.DISCONNECTED;
	private options: Required<FileControllerOptions>;
	private connectionTimeout: NodeJS.Timeout | null = null;

	private constructor(
		host: string,
		accessCode: string,
		options: FileControllerOptions = {},
	) {
		super();

		// Validate input parameters
		if (!host || typeof host !== "string") {
			throw new FileValidationError("Host must be a non-empty string");
		}
		if (!accessCode || typeof accessCode !== "string") {
			throw new FileValidationError("Access code must be a non-empty string");
		}

		this.host = host;
		this.accessCode = accessCode;
		this.options = {
			timeout: options.timeout ?? 15000,
		};
	}

	/**
	 * Creates a new file controller with the specified configuration.
	 * @param config - Configuration object containing printer information.
	 * @returns A new FileController instance
	 */
	static create(config: {
		host: string;
		accessCode: string;
		options?: FileControllerOptions;
	}): FileController {
		return new FileController(config.host, config.accessCode, config.options);
	}

	/**
	 * Gets the current connection state.
	 */
	get isConnected(): boolean {
		return this.connectionState === ConnectionState.CONNECTED;
	}

	/**
	 * Gets the printer host.
	 */
	getHost(): string {
		return this.host;
	}

	/**
	 * Gets the printer access code.
	 */
	getAccessCode(): string {
		return this.accessCode;
	}

	/**
	 * Gets the current connection state.
	 */
	get state(): ConnectionState {
		return this.connectionState;
	}

	/**
	 * Connects to the printer's FTP server.
	 * @returns A promise that resolves when the connection is established.
	 */
	async connect(): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			if (this.connectionState === ConnectionState.CONNECTED) {
				resolve();
				return;
			}

			if (this.connectionState === ConnectionState.CONNECTING) {
				reject(new FileConnectionError("Connection already in progress"));
				return;
			}

			this.connectionState = ConnectionState.CONNECTING;
			this.clearTimeouts();

			// Set connection timeout
			this.connectionTimeout = setTimeout(() => {
				this.cleanupConnection();
				this.connectionState = ConnectionState.DISCONNECTED;
				reject(new FileTimeoutError("Connection timeout"));
			}, this.options.timeout);

			try {
				this.client = new ftp.Client(this.options.timeout);

				// Set up event handlers
				this.setupEventHandlers();

				// Attempt connection
				this.client
					.access({
						host: this.host,
						port: 990,
						user: "bblp",
						password: this.accessCode,
						secureOptions: {
							rejectUnauthorized: false,
						},
						secure: "implicit",
					})
					.then(() => {
						this.clearTimeouts();
						this.connectionState = ConnectionState.CONNECTED;
						this.emit("connect");
						resolve();
					})
					.catch((error) => {
						this.clearTimeouts();
						this.cleanupConnection();
						this.connectionState = ConnectionState.DISCONNECTED;

						reject(
							new FileConnectionError(
								`Connection failed: ${error.message}`,
								error,
							),
						);
					});
			} catch (error) {
				this.clearTimeouts();
				this.connectionState = ConnectionState.DISCONNECTED;
				reject(
					error instanceof Error
						? new FileConnectionError(error.message, error)
						: new FileConnectionError("Unknown connection error"),
				);
			}
		});
	}

	/**
	 * Disconnect from the printer's FTP server.
	 * @returns A promise that resolves when the disconnection is complete.
	 */
	async disconnect(): Promise<void> {
		if (this.connectionState === ConnectionState.DISCONNECTED) {
			return;
		}

		if (this.connectionState === ConnectionState.DISCONNECTING) {
			return;
		}

		this.connectionState = ConnectionState.DISCONNECTING;
		this.clearTimeouts();

		if (!this.client) {
			this.connectionState = ConnectionState.DISCONNECTED;
			return;
		}

		try {
			await this.client.close();
		} catch (error) {
			// Emit error but continue cleanup
			this.emit(
				"error",
				new FileDisconnectionError(
					`Error during disconnect: ${error instanceof Error ? error.message : "Unknown error"}`,
					error instanceof Error ? error : undefined,
				),
			);
		} finally {
			this.cleanupConnection();
			this.connectionState = ConnectionState.DISCONNECTED;
		}
	}

	/**
	 * List all files within a specified directory on the printer's file system.
	 * @param dirPath - The absolute path to the directory on the printer's file system.
	 * @returns A promise that resolves to an array of files in the directory.
	 */
	async listDir(dirPath: string): Promise<ftp.FileInfo[]> {
		if (!this.isConnected || !this.client) {
			throw new FileConnectionError("Not connected to the printer");
		}

		if (!dirPath || typeof dirPath !== "string") {
			throw new FileValidationError(
				"Directory path must be a non-empty string",
			);
		}

		try {
			return await this.client.list(dirPath);
		} catch (error) {
			throw new FileDirectoryError(
				`Failed to read directory: ${error instanceof Error ? error.message : "Unknown error"}`,
				error instanceof Error ? error : undefined,
			);
		}
	}

	/**
	 * Upload a file to the printer's FTP server.
	 * @param localPath - The local file path to upload.
	 * @param remotePath - The remote path where the file should be uploaded.
	 */
	async uploadFile(localPath: string, remotePath: string): Promise<void> {
		if (!this.isConnected || !this.client) {
			throw new FileConnectionError("Not connected to the printer");
		}

		if (!localPath || typeof localPath !== "string") {
			throw new FileValidationError("Local path must be a non-empty string");
		}

		if (!remotePath || typeof remotePath !== "string") {
			throw new FileValidationError("Remote path must be a non-empty string");
		}

		// Check if local file exists
		if (!fs.existsSync(localPath)) {
			throw new FileNotFoundError(`Local file does not exist: ${localPath}`);
		}

		try {
			await this.client.uploadFrom(localPath, remotePath);
		} catch (error) {
			throw new FileUploadError(
				`Failed to upload file: ${error instanceof Error ? error.message : "Unknown error"}`,
				error instanceof Error ? error : undefined,
			);
		}
	}

	/**
	 * Download a file from the printer's FTP server.
	 * @param remotePath - The remote file path to download.
	 * @param localPath - The local path where the file should be saved.
	 */
	async downloadFile(remotePath: string, localPath: string): Promise<void> {
		if (!this.isConnected || !this.client) {
			throw new FileConnectionError("Not connected to the printer");
		}

		if (!remotePath || typeof remotePath !== "string") {
			throw new FileValidationError("Remote path must be a non-empty string");
		}

		if (!localPath || typeof localPath !== "string") {
			throw new FileValidationError("Local path must be a non-empty string");
		}

		// Ensure local directory exists
		const localDir = path.dirname(localPath);
		if (!fs.existsSync(localDir)) {
			fs.mkdirSync(localDir, { recursive: true });
		}

		try {
			await this.client.downloadTo(localPath, remotePath);
		} catch (error) {
			throw new FileDownloadError(
				`Failed to download file: ${error instanceof Error ? error.message : "Unknown error"}`,
				error instanceof Error ? error : undefined,
			);
		}
	}

	/**
	 * Delete a file from the printer's FTP server.
	 * @param remotePath - The remote file path to delete.
	 */
	async deleteFile(remotePath: string): Promise<void> {
		if (!this.isConnected || !this.client) {
			throw new FileConnectionError("Not connected to the printer");
		}

		if (!remotePath || typeof remotePath !== "string") {
			throw new FileValidationError("Remote path must be a non-empty string");
		}

		try {
			await this.client.remove(remotePath);
		} catch (error) {
			throw new FileDeleteError(
				`Failed to delete file: ${error instanceof Error ? error.message : "Unknown error"}`,
				error instanceof Error ? error : undefined,
			);
		}
	}

	/**
	 * Ensure a given directory exists on the printer's file system.
	 * @param dirPath - The absolute path to the directory on the printer's file system.
	 * @returns A promise that resolves when the directory exists.
	 */
	async ensureDir(dirPath: string): Promise<void> {
		if (!this.isConnected || !this.client) {
			throw new FileConnectionError("Not connected to the printer");
		}

		if (!dirPath || typeof dirPath !== "string") {
			throw new FileValidationError(
				"Directory path must be a non-empty string",
			);
		}

		try {
			await this.client.ensureDir(dirPath);
		} catch (error) {
			throw new FileDirectoryError(
				`Failed to ensure directory exists: ${error instanceof Error ? error.message : "Unknown error"}`,
				error instanceof Error ? error : undefined,
			);
		}
	}

	/**
	 * Sets up event handlers for the FTP client.
	 */
	private setupEventHandlers(): void {
		if (!this.client) return;

		// Handle progress events
		this.client.trackProgress((info) => {
			this.emit("progress", {
				bytesOverall: info.bytesOverall,
				bytesTransferred: info.bytes,
			});
		});
	}

	/**
	 * Clears all active timeouts.
	 */
	private clearTimeouts(): void {
		if (this.connectionTimeout) {
			clearTimeout(this.connectionTimeout);
			this.connectionTimeout = null;
		}
	}

	/**
	 * Cleans up the FTP connection and removes all event listeners.
	 */
	private cleanupConnection(): void {
		if (this.client) {
			this.client.close();
			this.client = null;
		}
		this.clearTimeouts();
	}
}
