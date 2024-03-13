/**
 * Generate the HMS error code for a given attribute and code.
 * @param attr - The attribute of the error code provided by the printer.
 * @param code - The code of the error code provided by the printer.
 * @returns The HMS error code with no spaces.
 */
export function generateHmsCode(attr: number, code: number) {
	return (
		attr.toString(16).padStart(8, "0") + code.toString(16).padStart(8, "0")
	);
}

/**
 * Get the error message for a given HMS error code.
 * @param code - The HMS error code.
 * @returns The error message for the given HMS error code, if known. Otherwise, "Unknown error."
 */
export function getErrorMessage(code: string) {
	return errorCodes[code] ?? "Unknown error.";
}

/* prettier-ignore */
export const errorCodes = {
	/*
		Bed
	*/
	// Force sensor continuous force
	"03000A0000010005": "Force sensor 1 detected unexpected continuous force.",
	"03000B0000010005": "Force sensor 2 detected unexpected continuous force.",
	"03000C0000010005": "Force sensor 3 detected unexpected continuous force.",
	// External disturbance
	"03000A0000010004": "Force sensor 1 detected an external disturbance while testing.",
	"03000B0000010004": "Force sensor 2 detected an external disturbance while testing.",
	"03000C0000010004": "Force sensor 3 detected an external disturbance while testing.",
	// Generic
	"0300100000020001": "The 1st order mechanical resonance mode of X axis is low.",
	"0300100000020002": "The 1st order mechanical resonance mode of X axis differ much from last calibration , please re-run the machine calibration later.",
	"03000F0000010001": "The accelerometer data is unavailable.",
	"03000D000001000B": "The Z axis motor seems got stuck when moving up.",
	"03000D0000010003": "The build plate is not placed properly.",
	"03000D0000020001": "Heatbed homing abnormal.",
	"03000A0000010003": "The sensititvity of heatbed force sensor 1/2/3 is too low.",
	"03000A0000010002": "The sensititvity of heatbed force sensor 1/2/3 is low.",
	"03000A0000010001": "The sensititvity of heatbed force sensor 1/2/3 is too high.",
	"0300020000010009": "The nozzle temperature control is abnormal. The hot end may not be installed.",
	"0300030000020002": "The speed of hotend fan is slow.",
	"0300030000010001": "The speed of the hotend fan is too slow or stopped",
	"0300040000020001": "The speed of part cooling fan if too slow or stopped.",
	"0300060000010001": "Motor-A has an open-circuit. There may be a loose connection, or the motor may have failed.",
	"0300060000010002": "Motor-A has a short-circuit. It may have failed.",
	"0300060000010003": "The resistance of Motor-A is abnormal, the motor may have failed.",
	"0300010000010007": "The heatbed temperature is abnormal; the sensor may have an open circuit.",
	"0300130000010001": "The current sensor of Motor-A is abnormal. This may be caused by a failure of the hardware sampling circuit.",
	"0300180000010005": "The Z axis motor seems got stuck during movement, please check if there is any foreign matter on the Z sliders or Z timing belt wheels.",
	"0300190000010001": "The eddy current sensor on Y-axis is not available, the wire should be broken.",
	"0300190000020002": "The sensitivity of Y-axis eddy current sensor is too low.",
	"0300400000020001": "Data transmission over the serial port is abnormal; the software system may be faulty.",
	"0300410000010001": "The system voltage is unstable; triggering the power failure protection function.",
	"0300020000010001": "The nozzle temperature is abnormal, the heater may be short circuit.",
	"0300020000010002": "The nozzle temperature is abnormal,the heater may be open circuit.",
	"0300020000010003": "The nozzle temperature is abnormal,the heater is over temperature.",
	"0300020000010006": "The nozzle temperature is abnormal,the sensor may be short circuit.",
	"0300020000010007": "The nozzle temperature is abnormal,the sensor may be open circuit.",
	"0300120000020001": "The front cover of the toolhead fell off.",
	"0300180000010001": "The value of extrusion force sensor is low, the nozzle seems to not be installed.",
	"0300180000010002": "The sensitivity of the extrusion force sensor is low, the hotend may not installed correctly.",
	"0300180000010003": "The extrusion force sensor is not available, the link between the MC and TH may be broken or the sensor is broken.",
	"0300180000010004": "The data from extrusion force sensor is abnormal, the sensor should be broken.",
	"03001A0000020001": "The nozzle is wrapped in the filament or the build plate is placed incorrectly",
	"03001A0000020002": "The extrusion force sensor detects that the nozzle is clogged",
	/*
		AMS
	*/
	// Tangle
	"0700010000020002": "AMS slot 1 filament may be tangled.",
	"0700020000020002": "AMS slot 2 filament may be tangled.",
	"0700030000020002": "AMS slot 3 filament may be tangled.",
	"0700040000020002": "AMS slot 4 filament may be tangled.",
	// Slot empty
	"0700200000020002": "AMS slot 1 is empty.",
	"0700210000020002": "AMS slot 2 is empty.",
	"0700220000020002": "AMS slot 3 is empty.",
	"0700230000020002": "AMS slot 4 is empty.",
	// Filament runout
	"0700200000020001": "AMS slot 1 filament has run out.",
	"0700210000020001": "AMS slot 2 filament has run out.",
	"0700220000020001": "AMS slot 3 filament has run out.",
	"0700230000020001": "AMS slot 4 filament has run out.",
	// Broken in tube
	"0700200000020003": "AMS slot 1 filament may be broken in the PTFE tube.",
	"0700210000020003": "AMS slot 2 filament may be broken in the PTFE tube.",
	"0700220000020003": "AMS slot 3 filament may be broken in the PTFE tube.",
	"0700230000020003": "AMS slot 4 filament may be broken in the PTFE tube.",
	// Broken in toolhead
	"0700200000020004": "AMS slot 1 filament may be broken in the toolhead.",
	"0700210000020004": "AMS slot 2 filament may be broken in the toolhead.",
	"0700220000020004": "AMS slot 3 filament may be broken in the toolhead.",
	"0700230000020004": "AMS slot 4 filament may be broken in the toolhead.",
	// Overload
	"0700600000020001": "AMS slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700610000020001": "AMS slot 2 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700620000020001": "AMS slot 3 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700630000020001": "AMS slot 4 is overloaded. The filament may be tangled or the spool may be stuck.",
	// Generic
	"0700010000010001": "The AMS assist motor has slipped.The extrusion wheel may be worn down,or the filament may be too thin.",
	"0700010000010003": "The AMS assist motor torque control is malfunctioning.The current sensor may be faulty.",
	"0700010000010004": "The AMS assist motor speed control is malfunctioning.The speed sensor may be faulty.",
	"0700020000010001": "AMS filament speed and length error.The filament odometry may be faulty.",
	"0700100000010001": "The AMS slot1 motor has slipped.The",
	"0700100000010003": "The AMS slot1 motor torque control is malfunctioning.The current sensor may be faulty.",
	"0700100000020002": "The AMS slot1 motor is overloaded.The filament may be tangled or stuck.",
	"0700200000020005": "AMS1 Slot1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0700200000030001": "AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0700200000030002": "AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0700400000020001": "The filament buffer signal lost,the cable or position sensor may be malfunctioning.",
	"0700400000020002": "The filament buffer position signal error,the position sensor may be malfunctioning.",
	"0700400000020003": "The AMS Hub communication is abnormal,the cable may be not well connected.",
	"0700400000020004": "The filament buffer signal is abnormal,the spring may be stuck or the filament may be tangle.",
	"0700450000020001": "The filament cutter sensor is malfunctioning.The sensor may be disconected or damaged.",
	"0700450000020002": "The filament cutter's cutting distance is too large.The XY motor may lose steps.",
	"0700450000020003": "The filament cutter handle has not released.The handle or blade ay be stuck.",
	"0700510000030001": "The AMS is disabled; please load filament from spool holder.",
	/*
		Other
	*/
	"0C00010000010001": "Micro Lidar camera is offline.",
	"0C00010000020002": "Micro Lidar camera is malfunctioning.",
	"0C00010000010003": "Micro Lidar Synchronization abnormal.",
	"0C00010000010004": "Micro Lidar Lens dirty.",
	"0C00010000010005": "Micro Lidar OTP parameter abnormal.",
	"0C00010000020006": "Micro Lidar extrinsic parameter abnormal.",
	"0C00010000020007": "Micro Lidar laser parameter drifted.",
	"0C00010000020008": "Chamber camera offline.",
	"0C00010000010009": "Chamber camera dirty.",
	"0C0001000001000A": "The Micro Lidar LED may be broken.",
	"0C0001000002000B": "Failed to calibrate Micro Lidar.",
	"0C00020000010001": "Laser not lit.",
	"0C00020000020002": "Laser too thick.",
	"0C00020000020003": "Laser not bright enough.",
	"0C00020000020004": "Nozzle height seems too low.",
	"0C00020000010005": "A new micro lidar is detected.",
	"0C00020000020006": "Nozzle height seems too high.",
	"0C00030000020001": "Filament exposure metering failed.",
	"0C00030000020002": "First layer inspection terminated due to abnormal lidar data.",
	"0C00030000020004": "First layer inspection not supported for current print job.",
	"0C00030000020005": "First layer inspection timeout.",
	"0C00030000030006": "Purged filaments piled up.",
	"0C00030000030007": "Possible first layer defects.",
	"0C00030000030008": "Possible spaghetti defects.",
	"0C00030000010009": "First layer inspection module rebooted.",
	"0C0003000003000B": "Inspecting first layer.",
	"0C0003000002000C": "Build plate marker not detected.",
	"0500010000020001": "The media pipeline is malfunctioning.",
	"0500010000020002": "USB camera is not connected.",
	"0500010000020003": "USB camera is malfunctioning.",
	"0500010000030004": "Not enough space in SD Card.",
	"0500010000030005": "Error in SD Card.",
	"0500010000030006": "Unformatted SD Card.",
	"0500020000020001": "Failed to connect internet, please check the network connection.",
	"0500020000020002": "Failed to login device.",
	"0500020000020004": "Unauthorized user.",
	"0500020000020006": "Liveview service is malfunctioning.",
	"0500030000010001": "The MC module is malfunctioning. Please restart the device.",
	"0500030000010002": "The toolhead is malfunctioning. Please restart the device.",
	"0500030000010003": "The AMS module is malfunctioning. Please restart the device.",
	"050003000001000A": "System state is abnormal. Please restore factory settings.",
	"050003000001000B": "The screen is malfunctioning.",
	"050003000002000C": "Wireless hardware error: please turn off/on WiFi or restart the device.",
	"0500040000010001": "Failed to download print job. Please check your network connection.",
	"0500040000010002": "Failed to report print state. Please check your network connection.",
	"0500040000010003": "The content of print file is unreadable. Please resend the print job.",
	"0500040000010004": "The print file is unauthorized.",
	"0500040000010006": "Failed to resume previous print.",
	"0500040000020007": "The bed temperature exceeds the filament's vitrification temperature, which may cause a nozzle clog.",
	"1200100000020002": "The AMS1 Slot1 motor is overloaded. The filament may be tangled or stuck.",
	"1200800000020001": "AMS1 Slot1 filament may be tangled or stuck.",
	"07FF200000020001": "External filament has run out; please load a new filament.",
	"07FF200000020002": "External filament is missing; please load a new filament.",
	"07FF200000020004": "Please pull out the filament on the spool holder from the extruder.",
	"12FF200000020007": "Failed to check the filament location in the tool head, please click for more help,",
	"1200200000020006": "Failed to extrude AMS1 Slot1 filament, the extruder may be clogged, or the filament may be too thin, causing the extruder slipping"
}
