import { PrintStage } from "./PrintStage";

/**
 * Easy-to-use interface for the printer state.
 */
export interface PrinterState {
	/**
	 * Timestamp of the current state.
	 */
	timestamp: number;
	/**
	 * Information about the print nozzle.
	 */
	nozzle: {
		/**
		 * Current temperature of the nozzle.
		 */
		temperature: number;
		/**
		 * Target temperature of the nozzle.
		 */
		target_temperature: number;
		/**
		 * Diameter of the nozzle.
		 */
		diameter: number;
		/**
		 * Type of the nozzle.
		 */
		type: string;
	};
	/**
	 * Information about the print bed.
	 */
	bed: {
		/**
		 * Current temperature of the bed.
		 */
		temperature: number;
		/**
		 * Target temperature of the bed.
		 */
		target_temperature: number;
	};
	/**
	 * Information about the IP camera in the printer.
	 */
	camera: {
		/**
		 * Whether the camera is recording.
		 */
		record: boolean;
		/**
		 * Whether the camera is in timelapse mode.
		 */
		timelapse: boolean;
		/**
		 * Resolution of the camera.
		 */
		resolution: string;
	};
	/**
	 * Information about the print chamber.
	 */
	chamber: {
		/**
		 * Current temperature of the chamber.
		 */
		temperature: number;
	};
	/**
	 * Information about the machine controller (MC).
	 */
	controller: {
		/**
		 * Current print name.
		 */
		printName: string;
		/**
		 * Current print stage.
		 */
		printStage: PrintStage;
		/**
		 * Current print sub-stage.
		 */
		printSubStage: number;
		/**
		 * Current print line number.
		 */
		printLineNumber: number;
		/**
		 * Current percentage of completion of the print stage.
		 */
		printPercent: number;
		/**
		 * Time remaining for the current print stage in seconds.
		 */
		printTimeRemaining: number;
	};
	/**
	 * Information about the lights in the printer.
	 */
	lights: Array<{
		/**
		 * Which light node is being referred to.
		 */
		node: string;
		/**
		 * Current mode of the given light node.
		 */
		mode: string;
	}>;
	errors?: Array<{
		attr: number;
		code: number;
		action: number;
	}>;
}
