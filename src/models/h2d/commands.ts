/**
 * Generates the command for requesting the printer's firmware information.
 * @return The command payload to send to the printer.
 */
export function getVersionCommand() {
	return {
		info: {
			sequence_id: "0",
			command: "get_version",
		},
	};
}

/**
 * Generate commands for stopping the current print job.
 * @returns The command payload to send to the printer.
 */
export function stopCommand() {
	return {
		print: {
			sequence_id: "0",
			command: "stop",
			param: "",
		},
	};
}

/**
 * Generate commands for pausing the current print job.
 * @returns The command payload to send to the printer.
 */
export function pauseCommand() {
	return {
		print: {
			sequence_id: "0",
			command: "pause",
			param: "",
		},
	};
}

/**
 * Generate commands for resuming the current print job.
 * @returns The command payload to send to the printer.
 */
export function resumeCommand() {
	return {
		print: {
			sequence_id: "0",
			command: "resume",
			param: "",
		},
	};
}

interface SetLedCommandOptions {
	onTime?: number;
	offTime?: number;
	loopTimes?: number;
	intervalTime?: number;
}

/**
 * Generate the command to set the printers LED state.
 * @param node - The LED node to control.
 * @param state - The desired LED state (on/off).
 * @returns The command payload to send to the printer.
 */
export function setLedCommand(
	node: "chamber_light" | "work_light" | "chamber_light2",
	mode: "on" | "off" | "flashing",
	options?: SetLedCommandOptions,
) {
	return {
		system: {
			sequence_id: "0",
			command: "ledctrl",
			led_node: node,
			led_mode: mode,

			// Only required for "flashing" but must always be present
			led_on_time: options?.onTime ?? 500,
			led_off_time: options?.offTime ?? 500,
			loop_times: options?.loopTimes ?? 1,
			interval_time: options?.intervalTime ?? 1000,
		},
	};
}

/**
 * Generate the command to set the printers speed.
 * @param speed - The speed level to set (1-4).
 * @returns The command payload to send to the printer.
 */
export function printSpeedCommand(speed: "1" | "2" | "3" | "4") {
	return {
		print: {
			sequence_id: "0",
			command: "print_speed",
			param: speed,
		},
	};
}

/**
 * Generate the command to preform G-code actions from a file on the printer's file system.
 * @param filePath - The absolute path to the G-code file on the printer's file system.
 * @returns The command payload to send to the printer.
 */
export function gcodeActionCommand(filePath: string) {
	return {
		print: {
			sequence_id: "0",
			command: "gcode_action",
			param: filePath,
		},
	};
}

/**
 * Generate the command to preform a G-code action.
 * @param line - The G-code line to execute.
 */
export function gcodeLineCommand(line: string) {
	return {
		print: {
			sequence_id: "0",
			command: "gcode_line",
			param: line,
		},
	};
}

interface PrintProjectCommandOptions {
	flowCalibration?: boolean;
	layerInspect?: boolean;
	timelaspe?: boolean;
	vibrationCalibration?: boolean;
	bedLeveling?: boolean;
	bedType?: string;
}

/**
 * Generate the command to print a 3MF project file from the printer's file system.
 * @param projectPath - The absolute path to the 3MF file on the printer's file system (e.g. "/sdcard/project.3mf")
 * @param file - The absolute path of the gcode file in the 3MF project to be printed (e.g. "Metadata/plate_1.gcode")
 * @param name - The name to use for the print job. Serves no functional purpose, this is for end-user convenience.
 * @param hash - The MD5 hash of the gcode file. This can be found in the 3MF file metadata.
 * @param options - Options for the print job.
 * @returns The command payload to send to the printer.
 */
export function printProjectCommand(
	projectPath: string,
	file: string,
	name: string,
	hash: string,
	options?: PrintProjectCommandOptions,
) {
	return {
		print: {
			command: "project_file",
			// File info
			param: file,
			url: "file://" + projectPath,
			subtask_name: name,
			md5: hash,
			// Options
			flow_cali: options?.flowCalibration ?? true,
			layer_inspect: options?.layerInspect ?? true,
			timelapse: options?.timelaspe ?? false,
			vibration_cali: options?.vibrationCalibration ?? true,
			bed_leveling: options?.bedLeveling ?? true,
			bed_type: options?.bedType ?? "textured_plate",
			use_ams: true,
			// Required misc
			profile_id: "0",
			project_id: "0",
			sequence_id: "0",
			subtask_id: "0",
			task_id: "0",
		},
	};
}
