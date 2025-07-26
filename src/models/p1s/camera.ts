import {
	type ModelCameraConfig,
	CameraProtocol,
} from "../../types/camera-schema";

/**
 * Camera configuration for P1S printers
 */
export const P1S_CAMERA_CONFIG: ModelCameraConfig = {
	protocol: CameraProtocol.TCP_STREAM,
	port: 6000,
	username: "bblp",
};
