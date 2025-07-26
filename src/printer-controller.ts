import mqtt from "mqtt";
import EventEmitter from "node:events";
import { type PrinterStateSchema } from "./types/printer-state-schema";
import {
	type SupportedModel,
	type ModelStateSchema,
	isSupportedModel,
	getSupportedModels,
} from "./models";
import {
	PrinterError,
	PrinterConnectionError,
	PrinterTimeoutError,
	PrinterValidationError,
	PrinterCommunicationError,
	PrinterSubscriptionError,
	PrinterReconnectionError,
	PrinterDisconnectionError,
} from "./utilities/printer-errors";

export declare interface PrinterController<T extends PrinterStateSchema> {
	/**
	 * Emitted when the printer is connected.
	 */
	on(event: "connect", listener: () => void): this;

	/**
	 * Emitted when the printer reports a new state.
	 */
	on(
		event: "report",
		listener: (state: { print: T["ReportState"] }) => void,
	): this;

	/**
	 * Emitted when the printer is disconnected.
	 */
	on(event: "disconnect", listener: () => void): this;

	/**
	 * Emitted when the connection to the printer is completely closed.
	 */
	on(event: "end", listener: () => void): this;

	/**
	 * Emitted when an error occurs.
	 */
	on(event: "error", listener: (error: Error) => void): this;
}

/**
 * Represents the connection state of the printer controller.
 */
enum ConnectionState {
	DISCONNECTED = "disconnected",
	CONNECTING = "connecting",
	CONNECTED = "connected",
	DISCONNECTING = "disconnecting",
}

/**
 * Configuration options for the printer controller.
 */
interface PrinterControllerOptions {
	/** Connection timeout in milliseconds (default: 10000) */
	connectionTimeout?: number;
	/** Whether to automatically reconnect on connection loss (default: false) */
	autoReconnect?: boolean;
	/** Reconnection delay in milliseconds (default: 5000) */
	reconnectDelay?: number;
}

/**
 * Controller for monitoring and managing Bambu Lab printers.
 */
export class PrinterController<
	T extends PrinterStateSchema,
> extends EventEmitter {
	private host: string;
	private accessCode: string;
	private serial: string;
	private model: SupportedModel;
	private mqttClient: mqtt.MqttClient | null = null;
	private connectionState: ConnectionState = ConnectionState.DISCONNECTED;
	private options: Required<PrinterControllerOptions>;
	private connectionTimeout: NodeJS.Timeout | null = null;
	private reconnectTimeout: NodeJS.Timeout | null = null;

	private constructor(
		host: string,
		accessCode: string,
		serial: string,
		model: SupportedModel,
		options: PrinterControllerOptions = {},
	) {
		super();

		// Validate input parameters
		if (!host || typeof host !== "string") {
			throw new PrinterValidationError("Host must be a non-empty string");
		}
		if (!accessCode || typeof accessCode !== "string") {
			throw new PrinterValidationError(
				"Access code must be a non-empty string",
			);
		}
		if (!serial || typeof serial !== "string") {
			throw new PrinterValidationError("Serial must be a non-empty string");
		}
		if (!isSupportedModel(model)) {
			throw new PrinterValidationError(
				`Unsupported printer model: ${model}. Supported models: ${getSupportedModels().join(", ")}`,
			);
		}

		this.host = host;
		this.accessCode = accessCode;
		this.serial = serial;
		this.model = model;
		this.options = {
			connectionTimeout: options.connectionTimeout ?? 10000,
			autoReconnect: options.autoReconnect ?? false,
			reconnectDelay: options.reconnectDelay ?? 5000,
		};
	}

	/**
	 * Creates a new printer controller with the specified configuration.
	 * @param config - Configuration object containing printer information.
	 * @returns A new PrinterController instance
	 */
	static create<T extends SupportedModel>(config: {
		model: T;
		host: string;
		accessCode: string;
		serial: string;
		options?: PrinterControllerOptions;
	}): PrinterController<ModelStateSchema<T>> {
		return new PrinterController<ModelStateSchema<T>>(
			config.host,
			config.accessCode,
			config.serial,
			config.model,
			config.options,
		);
	}

	/**
	 * Checks if the controller is currently connected to the printer.
	 */
	get isConnected(): boolean {
		return this.connectionState === ConnectionState.CONNECTED;
	}

	/**
	 * Gets the current connection state.
	 */
	getConnectionState(): ConnectionState {
		return this.connectionState;
	}

	/**
	 * Gets the printer model.
	 */
	getModel(): SupportedModel {
		return this.model;
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
	 * Gets the printer serial number.
	 */
	getSerial(): string {
		return this.serial;
	}

	/**
	 * Connects to the Bambu Lab printer's MQTT broker.
	 * @returns A promise that resolves when the connection is established.
	 */
	connect() {
		return new Promise<void>((resolve, reject) => {
			if (this.connectionState === ConnectionState.CONNECTED) {
				resolve();
				return;
			}

			if (this.connectionState === ConnectionState.CONNECTING) {
				reject(new PrinterConnectionError("Connection already in progress"));
				return;
			}

			this.connectionState = ConnectionState.CONNECTING;
			this.clearTimeouts();

			// Set connection timeout
			this.connectionTimeout = setTimeout(() => {
				this.cleanupConnection();
				this.connectionState = ConnectionState.DISCONNECTED;
				reject(new PrinterTimeoutError("Connection timeout"));
			}, this.options.connectionTimeout);

			const mqttUrl = `mqtts://${this.host}:8883`;

			try {
				this.mqttClient = mqtt.connect(mqttUrl, {
					username: "bblp",
					password: this.accessCode,
					clientId: `bblp_${Date.now()}`, // Use unique client ID
					protocol: "mqtts",
					rejectUnauthorized: false,
					manualConnect: true,
					connectTimeout: this.options.connectionTimeout,
				});

				// On successful connection
				const connectionResolve = () => {
					this.clearTimeouts();
					this.mqttClient?.off("connect", connectionResolve);
					this.mqttClient?.off("error", connectionReject);

					this.connectionState = ConnectionState.CONNECTED;

					// Subscribe to printer reports
					this.mqttClient?.subscribe(`device/${this.serial}/report`, (err) => {
						if (err) {
							this.emit(
								"error",
								new PrinterSubscriptionError(
									`Failed to subscribe to printer reports: ${err.message}`,
									err,
								),
							);
						}
					});

					// Emit connect event
					this.emit("connect");
					resolve();
				};

				// On error during connection
				const connectionReject = (error: Error) => {
					this.clearTimeouts();
					this.mqttClient?.off("connect", connectionResolve);
					this.mqttClient?.off("error", connectionReject);

					this.cleanupConnection();
					this.connectionState = ConnectionState.DISCONNECTED;

					if (this.options.autoReconnect) {
						this.scheduleReconnect();
					}

					reject(
						new PrinterConnectionError(
							`Connection failed: ${error.message}`,
							error,
						),
					);
				};

				// Add event listeners for connection phase only
				this.mqttClient.on("connect", connectionResolve);
				this.mqttClient.on("error", connectionReject);

				// Add primary event listeners for ongoing operation
				this.mqttClient.on("message", this.onMessage.bind(this));
				this.mqttClient.on("error", this.onError.bind(this));
				this.mqttClient.on("disconnect", this.onDisconnect.bind(this));
				this.mqttClient.on("end", this.onEnd.bind(this));

				// Start the connection
				this.mqttClient.connect();
			} catch (error) {
				this.clearTimeouts();
				this.connectionState = ConnectionState.DISCONNECTED;
				reject(
					error instanceof PrinterError
						? error
						: new PrinterConnectionError(
								`Unknown connection error: ${error instanceof Error ? error.message : "Unknown error"}`,
								error instanceof Error ? error : undefined,
							),
				);
			}
		});
	}

	/**
	 * Disconnects from the printer's MQTT broker and ends the connection.
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

		if (!this.mqttClient) {
			this.connectionState = ConnectionState.DISCONNECTED;
			return;
		}

		try {
			await this.mqttClient.endAsync(false, {});
		} catch (error) {
			// Emit error but continue cleanup
			this.emit(
				"error",
				new PrinterDisconnectionError(
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
	 * Send a command to the printer.
	 * @param payload - The payload to send to the device.
	 */
	async sendCommand(payload: Record<string, any>): Promise<void> {
		if (!this.isConnected || !this.mqttClient) {
			throw new PrinterConnectionError("Not connected to printer");
		}

		if (!payload || typeof payload !== "object") {
			throw new PrinterValidationError("Payload must be a valid object");
		}

		try {
			await this.mqttClient.publishAsync(
				`device/${this.serial}/request`,
				JSON.stringify(payload),
			);
		} catch (error) {
			throw new PrinterCommunicationError(
				`Failed to send command: ${error instanceof Error ? error.message : "Unknown error"}`,
				error instanceof Error ? error : undefined,
			);
		}
	}

	/**
	 * Handle an incoming message.
	 * @param topic - The topic the message was sent to.
	 * @param message - The message payload.
	 */
	private onMessage(topic: string, message: Buffer): void {
		try {
			const payload = JSON.parse(message.toString());

			if (topic === `device/${this.serial}/report`) {
				this.emit("report", payload);
			}
		} catch (error) {
			this.emit(
				"error",
				new PrinterCommunicationError(
					`Failed to parse message: ${error instanceof Error ? error.message : "Unknown error"}`,
					error instanceof Error ? error : undefined,
				),
			);
		}
	}

	/**
	 * Handles errors that occur after connection is established.
	 * @param error - The error that occurred.
	 */
	private onError(error: Error): void {
		// Only handle errors if we're connected (avoid handling connection errors twice)
		if (this.connectionState === ConnectionState.CONNECTED) {
			// Wrap MQTT errors in our custom error types
			const wrappedError =
				error instanceof PrinterError
					? error
					: new PrinterError(`MQTT error: ${error.message}`, error);
			this.emit("error", wrappedError);
		}
	}

	/**
	 * Handles printer disconnection.
	 */
	private onDisconnect(): void {
		const wasConnected = this.connectionState === ConnectionState.CONNECTED;
		this.connectionState = ConnectionState.DISCONNECTED;

		// Only emit disconnect if we were actually connected
		if (wasConnected) {
			this.emit("disconnect");

			if (this.options.autoReconnect) {
				this.scheduleReconnect();
			}
		}
	}

	/**
	 * Handles printer end event.
	 */
	private onEnd(): void {
		this.cleanupConnection();
		this.connectionState = ConnectionState.DISCONNECTED;
		this.emit("end");
	}

	/**
	 * Clears all active timeouts.
	 */
	private clearTimeouts(): void {
		if (this.connectionTimeout) {
			clearTimeout(this.connectionTimeout);
			this.connectionTimeout = null;
		}
		if (this.reconnectTimeout) {
			clearTimeout(this.reconnectTimeout);
			this.reconnectTimeout = null;
		}
	}

	/**
	 * Cleans up the MQTT connection and removes all event listeners.
	 */
	private cleanupConnection(): void {
		if (this.mqttClient) {
			this.mqttClient.removeAllListeners();
			this.mqttClient = null;
		}
		this.clearTimeouts();
	}

	/**
	 * Schedules an automatic reconnection attempt.
	 */
	private scheduleReconnect(): void {
		if (this.reconnectTimeout) {
			return; // Reconnect already scheduled
		}

		this.reconnectTimeout = setTimeout(async () => {
			this.reconnectTimeout = null;

			if (this.connectionState === ConnectionState.DISCONNECTED) {
				try {
					await this.connect();
				} catch (error) {
					const wrappedError =
						error instanceof PrinterError
							? error
							: new PrinterReconnectionError(
									`Reconnection failed: ${error instanceof Error ? error.message : "Unknown error"}`,
									error instanceof Error ? error : undefined,
								);
					this.emit("error", wrappedError);
				}
			}
		}, this.options.reconnectDelay);
	}
}
