import * as tls from "node:tls";
import {
	type SupportedModel,
	isSupportedModel,
	ModelCameraRegistry,
} from "./models";
import {
	CameraProtocol,
	type CameraFrame,
	type CameraControllerOptions,
	type ModelCameraConfig,
} from "./types/camera-schema";
import {
	CameraError,
	CameraConnectionError,
	CameraAuthenticationError,
	CameraTimeoutError,
	CameraFrameError,
	CameraValidationError,
} from "./utilities/camera-errors";
import { JPEGValidator, ResourceManager } from "./utilities/camera-utils";

/**
 * Abstract base class for camera frame capture implementations.
 */
abstract class CameraFrameCaptureBase {
	protected host: string;
	protected accessCode: string;
	protected config: ModelCameraConfig;
	protected options: Required<CameraControllerOptions>;
	protected frameNumber: number = 0;

	constructor(
		host: string,
		accessCode: string,
		config: ModelCameraConfig,
		options: Required<CameraControllerOptions>,
	) {
		this.host = host;
		this.accessCode = accessCode;
		this.config = config;
		this.options = options;
	}

	/**
	 * Abstract method to capture a single frame from the camera.
	 */
	abstract captureFrame(): Promise<CameraFrame>;
}

/**
 * TCP-based camera frame capture implementation (for P1S and similar models).
 */
class TCPFrameCapture extends CameraFrameCaptureBase {
	async captureFrame(): Promise<CameraFrame> {
		return new Promise((resolve, reject) => {
			let socket: tls.TLSSocket | null = null;
			let frameBuffer = Buffer.alloc(0);
			let isAuthenticated = false;
			const resourceManager = new ResourceManager();

			// Set connection timeout
			const connectionTimeout = setTimeout(() => {
				resourceManager.cleanup();
				reject(new CameraTimeoutError("Frame capture timeout"));
			}, this.options.connectionTimeout);

			resourceManager.addCleanup(() => {
				clearTimeout(connectionTimeout);
			});

			resourceManager.addCleanup(() => {
				if (socket) {
					socket.removeAllListeners();
					if (!socket.destroyed) {
						socket.destroy();
					}
					socket = null;
				}
			});

			try {
				// Create TLS socket
				socket = tls.connect({
					host: this.host,
					port: this.config.port,
					rejectUnauthorized: false,
				});

				// Handle connection
				const onConnect = () => {
					if (!socket) return;
					this.sendAuthenticationPacket(socket);
				};

				socket.once("connect", onConnect);
				socket.once("secureConnect", onConnect);

				// Handle incoming data
				socket.on("data", (data: Buffer) => {
					frameBuffer = Buffer.concat([frameBuffer, data]);

					if (!isAuthenticated) {
						// Check if authentication was successful
						if (frameBuffer.length >= 16) {
							const payloadSize = frameBuffer.readUInt32LE(0);
							const frameType = frameBuffer.readUInt32LE(4);

							// Check if this looks like a valid frame header
							if (
								payloadSize > 0 &&
								payloadSize <= this.options.maxFrameSize &&
								frameType !== 0xffffffff
							) {
								// 0xFFFFFFFF might indicate an error response
								isAuthenticated = true;
							} else if (frameBuffer.length > 100) {
								// If we have a lot of data but no valid frame header,
								// assume authentication failed and reject
								resourceManager.cleanup();
								reject(
									new CameraAuthenticationError(
										"Authentication failed - invalid response from server",
									),
								);
								return;
							}
						}

						// Add a reasonable timeout for authentication
						if (frameBuffer.length === 0) {
							setTimeout(
								() => {
									if (!isAuthenticated && frameBuffer.length === 0) {
										resourceManager.cleanup();
										reject(
											new CameraAuthenticationError(
												"Authentication timeout - no response from server",
											),
										);
									}
								},
								Math.min(this.options.connectionTimeout / 2, 3000),
							);
						}

						if (!isAuthenticated) return;
					}

					// Process frame data to capture a single frame
					try {
						const frame = this.extractSingleFrame(frameBuffer);
						if (frame) {
							resourceManager.cleanup();
							resolve(frame);
						}
					} catch (error) {
						resourceManager.cleanup();
						reject(
							error instanceof CameraError
								? error
								: new CameraFrameError(
										`Frame extraction failed: ${error instanceof Error ? error.message : String(error)}`,
										error instanceof Error ? error : undefined,
									),
						);
					}
				});

				socket.on("error", (error: Error) => {
					resourceManager.cleanup();

					// Check for specific error types and categorize appropriately
					const errorMessage = error.message.toLowerCase();

					if (
						errorMessage.includes("enotfound") ||
						errorMessage.includes("host not found") ||
						errorMessage.includes("getaddrinfo") ||
						errorMessage.includes("dns")
					) {
						reject(
							new CameraConnectionError(
								`Failed to resolve host: ${error.message}`,
								error,
							),
						);
					} else if (
						errorMessage.includes("econnrefused") ||
						errorMessage.includes("connection refused")
					) {
						reject(
							new CameraConnectionError(
								`Connection refused: ${error.message}`,
								error,
							),
						);
					} else if (
						errorMessage.includes("timeout") ||
						errorMessage.includes("etimedout")
					) {
						reject(
							new CameraTimeoutError(
								`Connection timeout: ${error.message}`,
								error,
							),
						);
					} else if (
						errorMessage.includes("econnreset") ||
						errorMessage.includes("connection reset")
					) {
						reject(
							new CameraConnectionError(
								`Connection reset: ${error.message}`,
								error,
							),
						);
					} else {
						reject(
							new CameraConnectionError(
								`TCP connection error: ${error.message}`,
								error,
							),
						);
					}
				});

				socket.on("close", () => {
					resourceManager.cleanup();
					if (!isAuthenticated) {
						reject(
							new CameraAuthenticationError(
								"Connection closed before authentication",
							),
						);
					} else {
						reject(
							new CameraConnectionError(
								"Connection closed before frame capture",
							),
						);
					}
				});
			} catch (error) {
				resourceManager.cleanup();
				reject(
					new CameraConnectionError(
						`Failed to create socket: ${error instanceof Error ? error.message : String(error)}`,
						error instanceof Error ? error : undefined,
					),
				);
			}
		});
	}

	private sendAuthenticationPacket(socket: tls.TLSSocket): void {
		const authPacket = Buffer.alloc(80);

		// Header (16 bytes)
		authPacket.writeUInt32LE(0x40, 0); // Payload size (64 bytes)
		authPacket.writeUInt32LE(0x3000, 4); // Type
		authPacket.writeUInt32LE(0, 8); // Flags
		authPacket.writeUInt32LE(0, 12); // Reserved

		// Username (32 bytes, ASCII, null-padded)
		const username = Buffer.from(this.config.username, "ascii");
		username.copy(authPacket, 16);

		// Password (32 bytes, ASCII, null-padded)
		const password = Buffer.from(this.accessCode, "ascii");
		password.copy(authPacket, 48);

		socket.write(authPacket);
	}

	private extractSingleFrame(buffer: Buffer): CameraFrame | null {
		if (buffer.length < 16) return null;

		// Read frame header (16 bytes)
		const payloadSize = buffer.readUInt32LE(0);

		// Validate payload size
		if (payloadSize <= 0 || payloadSize > this.options.maxFrameSize) {
			throw new CameraValidationError(`Invalid payload size: ${payloadSize}`);
		}

		// Check if we have the complete frame
		const totalFrameSize = 16 + payloadSize;
		if (buffer.length < totalFrameSize) {
			return null; // Wait for more data
		}

		// Extract image data
		const imageData = buffer.subarray(16, totalFrameSize);

		// Validate JPEG format
		if (!JPEGValidator.isValidJPEG(imageData)) {
			throw new CameraValidationError("Received invalid JPEG data");
		}

		return {
			imageData: Buffer.from(imageData),
			frameNumber: ++this.frameNumber,
			timestamp: new Date(),
			size: payloadSize,
		};
	}
}

/**
 * RTSP-based camera frame capture implementation (for H2D and similar models).
 */
class RTSPFrameCapture extends CameraFrameCaptureBase {
	private path: string;
	private port: number;

	constructor(
		host: string,
		accessCode: string,
		config: ModelCameraConfig,
		options: Required<CameraControllerOptions>,
	) {
		super(host, accessCode, config, options);

		this.port = config.port;
		this.path = config.rtsp?.path || "/streaming/live/1";
	}

	async captureFrame(): Promise<CameraFrame> {
		const { spawn } = await import("node:child_process");

		return new Promise((resolve, reject) => {
			let frameBuffer = Buffer.alloc(0);
			const resourceManager = new ResourceManager();

			// Set connection timeout
			const connectionTimeout = setTimeout(() => {
				resourceManager.cleanup();
				reject(new CameraTimeoutError("RTSP frame capture timeout"));
			}, this.options.connectionTimeout);

			resourceManager.addCleanup(() => {
				clearTimeout(connectionTimeout);
			});

			try {
				// Build RTSP URL: rtsps://username:accesscode@host:port/path
				const rtspUrl = `rtsps://${this.config.username}:${this.accessCode}@${this.host}:${this.port}${this.path}`;

				// Spawn ffmpeg process
				const ffmpeg = spawn(
					"ffmpeg",
					[
						"-rtsp_transport",
						"tcp",
						"-i",
						rtspUrl,
						"-vframes",
						"1",
						"-f",
						"image2",
						"-c:v",
						"mjpeg",
						"-q:v",
						"2",
						"-",
					],
					{
						stdio: ["ignore", "pipe", "pipe"],
					},
				);

				resourceManager.addCleanup(() => {
					if (!ffmpeg.killed) {
						ffmpeg.kill();
					}
				});

				// Collect stdout data (image bytes)
				ffmpeg.stdout.on("data", (chunk: Buffer) => {
					frameBuffer = Buffer.concat([frameBuffer, chunk]);
				});

				// Handle stderr for error reporting
				let stderrOutput = "";
				ffmpeg.stderr.on("data", (chunk: Buffer) => {
					stderrOutput += chunk.toString();
				});

				// Handle process completion
				ffmpeg.on("close", (code: number | null) => {
					resourceManager.cleanup();

					if (code === 0 && frameBuffer.length > 0) {
						// Validate JPEG format
						if (JPEGValidator.isValidJPEG(frameBuffer)) {
							resolve({
								imageData: Buffer.from(frameBuffer),
								frameNumber: ++this.frameNumber,
								timestamp: new Date(),
								size: frameBuffer.length,
							});
						} else {
							reject(
								new CameraValidationError(
									"Received invalid JPEG data from ffmpeg",
								),
							);
						}
					} else {
						// Analyze stderr to determine appropriate error type
						const stderr = stderrOutput.toLowerCase();

						// Check for authentication errors
						if (
							stderr.includes("401 unauthorized") ||
							stderr.includes("authorization failed") ||
							stderr.includes("access denied") ||
							stderr.includes("authentication")
						) {
							reject(
								new CameraAuthenticationError(
									`RTSP authentication failed: ${stderrOutput.slice(-200)}`,
								),
							);
							return;
						}

						// Check for connection errors
						if (
							stderr.includes("failed to resolve hostname") ||
							stderr.includes("connection refused") ||
							stderr.includes("network unreachable") ||
							stderr.includes("host unreachable") ||
							stderr.includes("no route to host") ||
							stderr.includes("input/output error") ||
							stderr.includes("connection timeout") ||
							stderr.includes("connection timed out")
						) {
							reject(
								new CameraConnectionError(
									`RTSP connection failed: ${stderrOutput.slice(-200)}`,
								),
							);
							return;
						}

						// Check for timeout errors
						if (stderr.includes("timeout") || stderr.includes("timed out")) {
							reject(
								new CameraTimeoutError(
									`RTSP timeout: ${stderrOutput.slice(-200)}`,
								),
							);
							return;
						}

						// Default to frame error for other ffmpeg issues
						const errorMessage =
							code !== 0
								? `ffmpeg process exited with code ${code}`
								: "No frame data received from ffmpeg";

						const fullError = stderrOutput
							? `${errorMessage}. stderr: ${stderrOutput.slice(-500)}`
							: errorMessage;

						reject(new CameraFrameError(fullError));
					}
				});

				// Handle process errors
				ffmpeg.on("error", (error: Error) => {
					resourceManager.cleanup();
					reject(
						new CameraConnectionError(
							`Failed to spawn ffmpeg: ${error.message}`,
							error,
						),
					);
				});
			} catch (error) {
				resourceManager.cleanup();
				reject(
					new CameraError(
						`Failed to capture frame: ${error instanceof Error ? error.message : String(error)}`,
						error instanceof Error ? error : undefined,
					),
				);
			}
		});
	}
}

/**
 * Controller for capturing frames from Bambu Lab printer cameras.
 */
export class CameraController {
	private host: string;
	private accessCode: string;
	private model: SupportedModel;
	private config: ModelCameraConfig;
	private options: Required<CameraControllerOptions>;
	private captureImpl: CameraFrameCaptureBase;

	private constructor(
		host: string,
		accessCode: string,
		model: SupportedModel,
		options: CameraControllerOptions = {},
	) {
		// Validate input parameters
		if (!host || typeof host !== "string" || host.trim().length === 0) {
			throw new CameraValidationError("Host must be a non-empty string");
		}
		if (
			!accessCode ||
			typeof accessCode !== "string" ||
			accessCode.trim().length === 0
		) {
			throw new CameraValidationError("Access code must be a non-empty string");
		}
		if (!isSupportedModel(model)) {
			throw new CameraValidationError(
				`Unsupported model: ${model}. Supported models: ${Object.keys(ModelCameraRegistry).join(", ")}`,
			);
		}

		this.host = host.trim();
		this.accessCode = accessCode.trim();
		this.model = model;
		this.config = ModelCameraRegistry[model];
		this.options = {
			connectionTimeout: options.connectionTimeout ?? 10000,
			maxFrameSize: options.maxFrameSize ?? 2 * 1024 * 1024, // 2MB
		};

		// Validate options
		if (this.options.connectionTimeout <= 0) {
			throw new CameraValidationError(
				"Connection timeout must be greater than 0",
			);
		}
		if (this.options.maxFrameSize <= 0) {
			throw new CameraValidationError("Max frame size must be greater than 0");
		}

		// Create the appropriate capture implementation based on protocol
		this.captureImpl = this.createCaptureImplementation();
	}

	/**
	 * Creates a new camera controller.
	 * @param config - Configuration object containing printer information.
	 * @returns A new CameraController instance
	 * @throws {CameraValidationError} When configuration is invalid
	 */
	static create(config: {
		model: SupportedModel;
		host: string;
		accessCode: string;
		options?: CameraControllerOptions;
	}): CameraController {
		if (!config || typeof config !== "object") {
			throw new CameraValidationError("Configuration object is required");
		}

		const { model, host, accessCode, options } = config;

		if (!model) {
			throw new CameraValidationError("Model is required in configuration");
		}
		if (!host) {
			throw new CameraValidationError("Host is required in configuration");
		}
		if (!accessCode) {
			throw new CameraValidationError(
				"Access code is required in configuration",
			);
		}

		return new CameraController(host, accessCode, model, options);
	}

	/**
	 * Creates the appropriate capture implementation based on the model's protocol.
	 * @throws {CameraError} When protocol is not supported
	 */
	private createCaptureImplementation(): CameraFrameCaptureBase {
		switch (this.config.protocol) {
			case CameraProtocol.TCP_STREAM:
				return new TCPFrameCapture(
					this.host,
					this.accessCode,
					this.config,
					this.options,
				);
			case CameraProtocol.RTSP:
				return new RTSPFrameCapture(
					this.host,
					this.accessCode,
					this.config,
					this.options,
				);
			default:
				throw new CameraError(`Unsupported protocol: ${this.config.protocol}`);
		}
	}

	/**
	 * Gets the camera configuration for the current model.
	 */
	getCameraConfig(): ModelCameraConfig {
		return { ...this.config };
	}

	/**
	 * Gets the protocol being used for this camera.
	 */
	getProtocol(): CameraProtocol {
		return this.config.protocol;
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
	 * Captures a single frame from the camera.
	 * Creates a new connection, authenticates, captures one frame, and disconnects.
	 *
	 * @returns Promise that resolves to a CameraFrame containing the image data
	 * @throws {CameraError} When frame capture fails
	 */
	async captureFrame(): Promise<CameraFrame> {
		return this.captureImpl.captureFrame();
	}
}
