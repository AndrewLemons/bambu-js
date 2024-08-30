import EventEmitter from "node:events";
import mqtt from "mqtt";

const MQTT_USERNAME = "bblp";

/**
 * A class for interfacing with a Bambu Lab printers over MQTT.
 * @emits update - Emitted when the printer's state is updated.
 * @emits connect - Emitted when the printer is connected.
 * @emits disconnect - Emitted when the printer is disconnected.
 */
export default class BambuMQTT extends EventEmitter {
	host: string;
	accessCode: string;
	serial: string;

	private client: mqtt.MqttClient;

	/**
	 * Create a new BambuMQTT instance.
	 * @param host - The host of the printer.
	 * @param accessCode - The access code for the printer.
	 * @param serial - The serial number of the printer.
	 */
	constructor(host: string, accessCode: string, serial: string) {
		super();

		this.host = host;
		this.accessCode = accessCode;
		this.serial = serial;
	}

	/**
	 * Connect to the printer.
	 */
	async connect() {
		this.client = mqtt.connect(`mqtt://${this.host}:8883`, {
			username: MQTT_USERNAME,
			password: this.accessCode,
			clientId: MQTT_USERNAME,
			protocol: "mqtts",
			rejectUnauthorized: false,
			reconnectPeriod: 5000,
		});

		this.client.on("connect", this.onConnect.bind(this));
		this.client.on("close", this.onClose.bind(this));
		this.client.on("message", this.onMessage.bind(this));
		this.client.on("error", (error) => {
			this.disconnect();
		});
	}

	/**
	 * Disconnect from the printer.
	 */
	async disconnect() {
		this.client.removeAllListeners();
		this.client.end();
		this.onDisconnect();
	}

	/**
	 * Send a request to the device.
	 * @param payload - The payload to send to the device.
	 */
	sendRequest(payload: any) {
		this.client.publish(
			`device/${this.serial}/request`,
			JSON.stringify(payload),
		);
	}

	/**
	 * Handle the connection event.
	 */
	private async onConnect() {
		// Subscribe to the printer
		this.client.subscribe(`device/${this.serial}/report`);

		// Request the printer's complete state
		this.sendRequest({ pushing: { sequence_id: "0", command: "pushall" } });

		this.emit("connect");
	}

	/**
	 * Handle the close event.
	 */
	private onClose() {
		this.emit("disconnect");
	}

	/**
	 * Handle an incoming message.
	 * @param topic - The topic the message was sent to.
	 * @param message - The message payload.
	 */
	private onMessage(topic: string, message: Buffer) {
		const payload = JSON.parse(message.toString());

		if (topic === `device/${this.serial}/report`) {
			if (payload.print) {
				if (payload.print.command === "push_status") {
					// Remove message metadata
					let state = {
						...payload.print,
						command: undefined,
						msg: undefined,
						sequence_id: undefined,
					};
					// Emit the update event
					this.emit("update", state);
				}
			}
		}
	}

	/**
	 * Get the current connection status.
	 */
	get isConnected() {
		return this.client.connected;
	}
}
