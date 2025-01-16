import EventEmitter from "node:events";
import path from "node:path";
import BambuFTP from "./BambuFTP";
import BambuMQTT from "./BambuMQTT";
import convertState from "../utilities/stateConverter";
import type { RawPrinterState } from "../types/RawPrinterState";
import type { PrinterState } from "../types/PrinterState";

/**
 * A class for interfacing with a Bambu Lab printer.
 * @emits update - Emitted when the printer's state is updated.
 * @emits result - Emitted when the printer responds to a command.
 * @emits connect - Emitted when the printer is connected.
 * @emits disconnect - Emitted when the printer is disconnected.
 */
class BambuPrinter extends EventEmitter {
	host: string;
	serial: string;
	accessCode: string;
	state: RawPrinterState;
	hasInitialUpdate: boolean;

	mqtt: BambuMQTT;

	constructor(host: string, serial: string, accessCode: string) {
		super();

		this.host = host;
		this.serial = serial;
		this.accessCode = accessCode;
		this.state = {
			timestamp: Date.now(),
		};
		this.hasInitialUpdate = false;

		this.mqtt = new BambuMQTT(host, accessCode, serial);
	}

	/**
	 * Connect to the printer.
	 */
	async connect() {
		await this.mqtt.connect();
		this.mqtt.on("update", this.onStateUpdate.bind(this));
		this.mqtt.on("result", (result) => this.emit("result", result));
		this.mqtt.on("disconnect", () => this.emit("disconnect"));
		this.mqtt.on("connect", () => this.emit("connect"));
		this.mqtt.on("error", (error) => this.emit("error", error));
	}

	/**
	 * Disconnect from the printer.
	 */
	async disconnect() {
		await this.mqtt.disconnect();
	}

	/**
	 * Create a context for manipulating files on the printer's SD card.
	 * @param callback - Callback to manipulate files within the context.
	 */
	async manipulateFiles(callback: (context: BambuFTP) => Promise<void>) {
		await BambuFTP.createContext(this.host, this.accessCode, callback);
	}

	/**
	 * Get the raw state of the printer.
	 * @returns The raw state of the printer.
	 */
	getRawState(): RawPrinterState {
		return this.state;
	}

	/**
	 * Get the state of the printer.
	 */
	getState(): PrinterState {
		return convertState(this.state);
	}

	/**
	 * Await the printer to send its initial state.
	 * @param timeout - The maximum time to wait for the initial state.
	 * @returns The initial state of the printer.
	 */
	async awaitInitialState(timeout: number = 30000): Promise<PrinterState> {
		return new Promise((resolve, reject) => {
			// Timeout if the initial state is not received
			let timeoutId = setTimeout(() => {
				reject(new Error("Timed out waiting for initial state"));
			}, timeout);

			// Resolve when the initial state is received
			this.once("update", (state) => {
				clearTimeout(timeoutId);
				resolve(state);
			});

			// If the initial state has already been received, resolve immediately
			if (this.hasInitialUpdate) {
				clearTimeout(timeoutId);
				resolve(this.getState());
			}
		});
	}

	/**
	 * Pause the current print job.
	 */
	pause() {
		let data = {
			print: {
				sequence_id: "0",
				command: "pause",
				param: "",
			},
		};

		this.mqtt.sendRequest(data);
	}

	/**
	 * Resume the current print job.
	 */
	resume() {
		let data = {
			print: {
				sequence_id: "0",
				command: "resume",
				param: "",
			},
		};

		this.mqtt.sendRequest(data);
	}

	/**
	 * Stop the current print job.
	 */
	stop() {
		let data = {
			print: {
				sequence_id: "0",
				command: "stop",
				param: "",
			},
		};

		this.mqtt.sendRequest(data);
	}

	/**
	 * Send gcode
	 */
	sendGcode(gcode: string) {
		let data = {
			print: {
				sequence_id: "0",
				command: "gcode_line",
				param: gcode + "\n",
			},
		};

		this.mqtt.sendRequest(data);
	}

	/**
	 * Set the state of the printer's LED.
	 * @param options - Options for setting the LED state.
	 */
	setLed(options: SetLedOptions) {
		let data: any = {
			system: {
				sequence_id: "0",
				command: "ledctrl",
				led_node: "chamber_light",
				led_mode: options.mode,
			},
		};

		if (options.mode === "flashing") {
			data.system.led_on_time = options.onTime;
			data.system.led_off_time = options.offTime;
			data.system.loop_times = options.loopTimes;
			data.system.interval_time = options.intervalTime;
		}

		this.mqtt.sendRequest(data);
	}

	/**
	 * Print a 3MF project file from the printer's SD card.
	 * @param projectPath - The absolute path to the 3MF file on the printer's SD card.
	 * @param file - The absolute path of the gcode file in the 3MF project to be printed (e.g. "Metadata/plate_1.gcode")
	 * @param name - The name to use for the print job. Serves no functional purpose.
	 * @param hash - The MD5 hash of the gcode file.
	 * @param options - Options for the print job.
	 */
	printProjectFile(
		projectPath: string,
		file: string,
		name: string,
		hash: string,
		options: PrintProjectFileOptions = {},
	) {
		// Create the payload
		let data = {
			print: {
				command: "project_file",
				// File info
				param: path.join("Metadata/", file),
				url: "file://" + path.join("/sdcard/", projectPath),
				subtask_name: name,
				md5: hash,
				// Options
				flow_cali: options.flowCalibration ?? true,
				layer_inspect: options.layerInspect ?? true,
				timelapse: options.timelaspe ?? false,
				vibration_cali: options.vibrationCalibration ?? true,
				bed_leveling: options.bedLeveling ?? true,
				bed_type: options.bedType ?? "textured_plate",
				use_ams: true,
				// Required misc
				profile_id: "0",
				project_id: "0",
				sequence_id: "0",
				subtask_id: "0",
				task_id: "0",
			},
		};

		// Send the request
		this.mqtt.sendRequest(data);
	}

	/**
	 * Get the current connection status.
	 */
	get isConnected() {
		return this.mqtt.isConnected;
	}

	/**
	 * Handle the state update event.
	 * @param state - The new state of the printer.
	 */
	private async onStateUpdate(state: RawPrinterState) {
		// Merge the new state with the old state
		this.state = { ...this.state, ...state, timestamp: Date.now() };
		this.hasInitialUpdate = true;
		this.emit("update", this.getState());
	}
}

declare interface BambuPrinter {
	on(event: "connect", listener: () => void): this;
	on(event: "disconnect", listener: () => void): this;
	on(event: "update", listener: (state: PrinterState) => void): this;
	on(event: "result", listener: (result: String) => void): this;
	on(event: "error", listener: (error: Error) => void): this;
}

interface SetLedOptions {
	mode: "on" | "off" | "flashing";
	onTime?: number;
	offTime?: number;
	loopTimes?: number;
	intervalTime?: number;
}

interface PrintProjectFileOptions {
	flowCalibration?: boolean;
	layerInspect?: boolean;
	timelaspe?: boolean;
	vibrationCalibration?: boolean;
	bedLeveling?: boolean;
	bedType?: string;
}

export default BambuPrinter;
