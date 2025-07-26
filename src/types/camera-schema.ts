/**
 * Protocol types supported by different camera implementations.
 */
export enum CameraProtocol {
	TCP_STREAM = "tcp_stream",
	RTSP = "rtsp",
}

/**
 * Camera-specific configuration for different printer models.
 */
export interface ModelCameraConfig {
	/** Streaming protocol */
	protocol: CameraProtocol;
	/** Video server port (for TCP) or RTSP port */
	port: number;
	/** Username for authentication */
	username: string;
	/** RTSP-specific configuration */
	rtsp?: {
		/** RTSP stream path */
		path: string;
	};
}

/**
 * Camera frame data containing the image buffer and metadata.
 */
export interface CameraFrame {
	/** The image data (JPEG for TCP, varies for RTSP) */
	imageData: Buffer;
	/** Frame sequence number */
	frameNumber: number;
	/** Timestamp when the frame was received */
	timestamp: Date;
	/** Size of the image data in bytes */
	size: number;
}

/**
 * Camera connection configuration options.
 */
export interface CameraControllerOptions {
	/** Connection timeout in milliseconds (default: 10000) */
	connectionTimeout?: number;
	/** Maximum frame buffer size in bytes (default: 2MB) */
	maxFrameSize?: number;
}
