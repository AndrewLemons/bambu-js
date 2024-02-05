/**
 * Options for printing a 3MF project file.
 */
export default interface PrintProjectFileOptions {
	flowCalibration?: boolean;
	layerInspect?: boolean;
	timelaspe?: boolean;
	vibrationCalibration?: boolean;
	bedLeveling?: boolean;
	bedType?: string;
}
