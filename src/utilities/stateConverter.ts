import type { PrinterState } from "../types/PrinterState";
import type { RawPrinterState } from "../types/RawPrinterState";
import { PrintStage } from "../types/PrintStage";

/**
 * Convert raw state to printer state.
 * @param rawState Raw state returned by the printer.
 * @returns Printer state.
 */
export default function convertState(rawState: RawPrinterState): PrinterState {
	return {
		timestamp: rawState.timestamp,
		nozzle: {
			temperature: rawState.nozzle_temper,
			targetTemperature: rawState.nozzle_target_temper,
			diameter: parseFloat(rawState.nozzle_diameter),
			type: rawState.nozzle_type,
		},
		bed: {
			temperature: rawState.bed_temper,
			targetTemperature: rawState.bed_target_temper,
		},
		camera: {
			record: rawState.ipcam?.ipcam_record === "enable",
			timelapse: rawState.ipcam?.timelapse === "enable",
			resolution: rawState.ipcam?.resolution,
		},
		chamber: {
			temperature: rawState.chamber_temper,
		},
		controller: {
			printName: rawState.subtask_name,
			printStage: PrintStage[rawState.mc_print_stage] ?? PrintStage.UNKNOWN,
			printSubStage: rawState.mc_print_sub_stage,
			printLineNumber: parseInt(rawState.mc_print_line_number),
			printPercent: rawState.mc_percent,
			printTimeRemaining: rawState.mc_remaining_time,
		},
		lights: rawState.lights_report,
		errors: rawState.hms,
	};
}
