import {
	type ModelCameraConfig,
	CameraProtocol,
} from "../../types/camera-schema";

/**
 * Camera configuration for H2D printers
 */
export const H2D_CAMERA_CONFIG: ModelCameraConfig = {
	protocol: CameraProtocol.RTSP,
	port: 322,
	username: "bblp",
	rtsp: {
		path: "/streaming/live/1",
	},
};
