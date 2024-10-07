/**
 * Generate the HMS error code for a given attribute and code.
 * @param attr - The attribute of the error code provided by the printer.
 * @param code - The code of the error code provided by the printer.
 * @returns The HMS error code with no spaces.
 */
export function getErrorCode(attr: number, code: number) {
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

export const errorCodes: { [key: string]: string } = {
	"030002000001000B":
		"The nozzle temperature is abnormal. Temperature control system may have an issue.",
	"030091000001000C":
		"The chamber heater 1 has been working at full load for a long time. The temperature control system may have an issue.",
	"030001000001000D":
		"An issue occurred when heating the heatbed previously. To continue using your printer, please refer to the wiki to troubleshoot.",
	"0500030000010024":
		"The current temperature is too low. In order to protect you and your printer. Printing task, moving axis and other operations is disabled. Please move the printer to an environment above 10°C.",
	"0300180000010005":
		"The Z axis motor got stuck while moving, or the extrusion force sensor may have an issue; please check if there is any foreign matter on the Z sliders or Z timing belt wheels.",
	"0500010000030004":
		"Not enough space in MicroSD Card; please clear some space.",
	"0300020000010006":
		"The nozzle temperature is abnormal; the sensor may have a short circuit. Please check whether the connector is properly plugged in.",
	"0500030000010021": "Hardware incompatible: please check the laser.",
	"0C00030000020010":
		"Foreign objects detected on hotbed: please check and clean the hotbed.",
	"0500050000010001":
		"The factory data of AP board is abnormal; please replace the AP board with a new one.",
	"0500050000030002":
		"The device is in the engineering state; please pay attention to the information security related matters.",
	"0500020000020008": "Time synchronization failed.",
	"03001A0000020002": "The nozzle is clogged with filament.",
	"03000F0000010001":
		"Abnormal accelerometer data detected. Please try to restart the printer.",
	"0300010000010008":
		"An abnormality occurs during the heating process of the heatbed, the heating modules may be broken.",
	"030001000001000C":
		"The heatbed has worked at full load for a long time. The temperature control system may be abnormal.",
	"0500020000020006":
		"Streaming function error. Please check the network and try again. You can restart or update the printer if the issue persists.",
	"03000D0000020004":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000020005":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000020006":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000020007":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000020008":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000020009":
		"The build plate is not placed properly. Please adjust it.",
	"03000D000002000A":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000020003":
		"The build plate is not placed properly. Please adjust it.",
	"1201100000010001":
		"The AMS2 Slot1 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1202100000010001":
		"The AMS3 Slot1 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1201100000020002":
		"The AMS2 Slot1 motor is overloaded. The filament may be tangled or stuck.",
	"1202100000020002":
		"The AMS3 Slot1 motor is overloaded. The filament may be tangled or stuck.",
	"1203100000020002":
		"The AMS4 Slot1 motor is overloaded. The filament may be tangled or stuck.",
	"1201110000020002":
		"The AMS2 Slot2 motor is overloaded. The filament may be tangled or stuck.",
	"1202110000020002":
		"The AMS3 Slot2 motor is overloaded. The filament may be tangled or stuck.",
	"1203110000020002":
		"The AMS4 Slot2 motor is overloaded. The filament may be tangled or stuck.",
	"1201120000020002":
		"The AMS2 Slot3 motor is overloaded. The filament may be tangled or stuck.",
	"1202120000020002":
		"The AMS3 Slot3 motor is overloaded. The filament may be tangled or stuck.",
	"1203120000020002":
		"The AMS4 Slot3 motor is overloaded. The filament may be tangled or stuck.",
	"1201130000020002":
		"The AMS2 Slot4 motor is overloaded. The filament may be tangled or stuck.",
	"1202130000020002":
		"The AMS3 Slot4 motor is overloaded. The filament may be tangled or stuck.",
	"1203130000020002":
		"The AMS4 Slot4 motor is overloaded. The filament may be tangled or stuck.",
	"1201100000010003":
		"The AMS2 Slot1 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1202100000010003":
		"The AMS3 Slot1 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1203100000010003":
		"The AMS4 Slot1 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1200130000020002":
		"The AMS1 Slot4 motor is overloaded. The filament may be tangled or stuck.",
	"1200450000020003":
		"The filament cutter handle has not released. The handle or blade may be stuck.",
	"0C0003000002000F":
		"Parts skipped before first layer inspection; the inspection will not be supported for the current print.",
	"0C00010000020008":
		"Failed to get image from chamber camera. Spaghetti and waste chute pileup detection is not available for now.",
	"0C00030000030006":
		"Purged filament may have piled up in the waste chute. Please check and clean the chute.",
	"1200100000010001":
		"The AMS1 Slot1 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1203100000010001":
		"The AMS4 Slot1 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1200100000020002":
		"The AMS1 Slot1 motor is overloaded. The filament may be tangled or stuck.",
	"1200110000020002":
		"The AMS1 Slot2 motor is overloaded. The filament may be tangled or stuck.",
	"1200120000020002":
		"The AMS1 Slot3 motor is overloaded. The filament may be tangled or stuck.",
	"1200100000010003":
		"The AMS1 Slot1 motor torque control is malfunctioning. The current sensor may be faulty.",
	"03001D0000010001":
		"The position sensor of extrusion motor is abnormal. The sensor signal wire may be not properly plugged in.",
	"03001C0000010001":
		"The extrusion motor driver is abnormal. The MOSFET may have a short circuit.",
	"030001000001000A":
		"The hotbed temperature control is abnormal, the AC board may be broken.",
	"030091000001000A":
		"The temperature of chamber heater 1 is abnormal. The AC board may be broken.",
	"030092000001000A":
		"The temperature of chamber heater 2 is abnormal. The AC board may be broken.",
	"0300170000010001":
		"The speed of the nozzle fan is too slow or stopped. It may be stuck or the connector may not be plugged in properly.",
	"0300170000020002":
		"The speed of the nozzle fan is slow. It may be stuck and need cleaning.",
	"0300180000010002":
		"The sensitivity of the extrusion force sensor is low, the nozzle may not installed correctly.",
	"0500040000030009":
		"The bed temperature exceeds filament's vitrification temperature, which may cause nozzle clog. Please keep the front door of printer open. Already turning off the door opening detection temporarily.",
	"03001B0000010001":
		"The signal of the heatbed acceleration sensor is weak. The sensor may have fallen off or been damaged.",
	"03001B0000010002":
		"External disturbance was detected on the heatbed acceleeration sensor. The sensor signal wire may not be fixed.",
	"03001B0000010003":
		"The heatbed acceleration sensor detected unexpected continuous force. The sensor may be stuck, or the analog front end may be broken.",
	"03000D000001000B":
		"The Z axis motor seems to be stuck when moving. Please check if there is any foreign matter on the Z sliders or Z timing belt wheels .",
	"03000D0000020001":
		"Heatbed homing abnormal: there may be a bulge on the heatbed or the nozzle tip may not be clean.",
	"0300100000020002":
		"The resonance frequency of the X axis differs greatly from last calibration. Please clean the carbon rod and rerun the machine calibration afterward.",
	"0300110000020002":
		"The resonance frequency of the Y axis differs greatly from the last calibration. Please clean the carbon rod and rerun the machine calibration afterward.",
	"12FF200000020007":
		"Failed to check the filament location in the tool head; please click for more help.",
	"1200200000020006":
		"Failed to extrude AMS1 Slot1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1201200000020006":
		"Failed to extrude AMS2 Slot1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1202200000020006":
		"Failed to extrude AMS3 Slot1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1203200000020006":
		"Failed to extrude AMS4 Slot1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1200210000020006":
		"Failed to extrude AMS1 Slot2 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1201210000020006":
		"Failed to extrude AMS2 Slot2 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1202210000020006":
		"Failed to extrude AMS3 Slot2 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1203210000020006":
		"Failed to extrude AMS4 Slot2 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1200220000020006":
		"Failed to extrude AMS1 Slot3 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1201220000020006":
		"Failed to extrude AMS2 Slot3 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1202220000020006":
		"Failed to extrude AMS3 Slot3 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1203220000020006":
		"Failed to extrude AMS4 Slot3 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1200230000020006":
		"Failed to extrude AMS1 Slot4 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1201230000020006":
		"Failed to extrude AMS2 Slot4 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1202230000020006":
		"Failed to extrude AMS3 Slot4 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1203230000020006":
		"Failed to extrude AMS4 Slot4 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0300020000010009":
		"The nozzle temperature control is abnormal; the hot end may not be installed. If you want to heat the hot end without it being installed, please turn on maintenance mode on the settings page.",
	"0300940000020003":
		"Chamber failed to reach the desired temperature. The machine will stop waiting for the chamber temperature.",
	"0500040000020020": "",
	"0300900000010002":
		"Chamber heating failed. The chamber may not be enclosed, or the ambient temperature may be too low, or the heat dissipation vent of the power supply may be blocked.",
	"0500030000010004":
		"The AHB module is malfunctioning. Please restart the device.",
	"0500030000020020":
		"Micro SD Card capacity is insufficient to cache print files.",
	"12FF200000030007":
		"Checking the filament location of all AMS slots, please wait.",
	"0300940000030001":
		"Chamber cooling may be too slow. You can open the chamber to help cooling if the gas in chamber is non-toxic.",
	"0300180000010001":
		"The value of extrusion force sensor is low, the nozzle seems to not be installed.",
	"0300180000010003":
		"The extrusion force sensor is not available, the link between the MC and TH may be broken or the sensor is broken.",
	"0300180000010004":
		"The data from extrusion force sensor is abnormal, the sensor should be broken.",
	"0300190000010001":
		"The eddy current sensor on Y-axis is not available, the wire should be broken.",
	"0300190000020002":
		"The sensitivity of Y-axis eddy current sensor is too low.",
	"0300940000030002":
		"Chamber temperature setting value exceed the limit, the boundary value will be set.",
	"03001A0000020001":
		"The nozzle is covered with filaments, or the build plate is put in crooked.",
	"0300900000010010":
		"The communication of chamber temperature controller is abnormal.",
	"0300910000010008": "Chamber heater 1 failed to rise to target temperature.",
	"0300930000010006":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor at the air inlet may have an open circuit.",
	"0300930000010007":
		"Chamber temperature is abnormal. The temperature sensor at the power supply may have a short circuit.",
	"0300930000010008":
		"Chamber temperature is abnormal. The temperature sensor at power supply may have an open circuit.",
	"0300930000010002":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor may have an open circuit.",
	"0300930000010003":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor at the air outlet may have a short circuit.",
	"0300930000010004":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor at the air outlet may have an open circuit.",
	"0300930000010005":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor at the air inlet may have a short circuit.",
	"0300910000010001":
		"The temperature of chamber heater 1 is abnormal. The heater may have a short circuit.",
	"0300910000010002":
		"The temperature of chamber heater 1 is abnormal. The heater may have an open circuit or the thermal fuse may have taken effect.",
	"0300910000010006":
		"The temperature of chamber heater 1 is abnormal. The sensor may have a short circuit.",
	"0300910000010007":
		"The temperature of chamber heater 1 is abnormal. The sensor may have an open circuit.",
	"0300920000010001":
		"The temperature of chamber heater 2 is abnormal. The heater may have a short circuit.",
	"0300920000010002":
		"The temperature of chamber heater 2 is abnormal. The heater may have an open circuit or the thermal fuse may be in effect.",
	"0300920000010006":
		"The temperature of chamber heater 2 is abnormal. The sensor may have a short circuit.",
	"0300920000010007":
		"The temperature of chamber heater 2 is abnormal. The sensor may have an open circuit.",
	"0300920000010008": "Chamber heater 2 failed to rise to target temperature.",
	"0300930000010001":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor may have a short circuit.",
	"0300900000010001":
		"Chamber heating failed. The chamber heater may be failing to blow hot air.",
	"0300900000010003":
		"Chamber heating failed. The temperature of power supply may be too high.",
	"0300900000010004":
		"Chamber heating failed. The speed of the heating fan is too low.",
	"0300900000010005":
		"Chamber heating failed. The thermal resistance is too high.",
	"0300910000010003":
		"The temperature of chamber heater 1 is abnormal. The heater is over temperature.",
	"0300920000010003":
		"The temperature of chamber heater 2 is abnormal. The heater is over temperature.",
	"0500030000010023":
		"The CTC module is malfunctioning. Please restart the device.",
	"1200800000020001": "AMS1 Slot1 filament may be tangled or stuck.",
	"1200810000020001": "AMS1 Slot2 filament may be tangled or stuck.",
	"1200820000020001": "AMS1 Slot3 filament may be tangled or stuck.",
	"1200830000020001": "AMS1 Slot4 filament may be tangled or stuck.",
	"1201800000020001": "AMS2 Slot1 filament may be tangled or stuck.",
	"1201810000020001": "AMS2 Slot2 filament may be tangled or stuck.",
	"1201820000020001": "AMS2 Slot3 filament may be tangled or stuck.",
	"1201830000020001": "AMS2 Slot4 filament may be tangled or stuck.",
	"1202800000020001": "AMS3 Slot1 filament may be tangled or stuck.",
	"1202810000020001": "AMS3 Slot2 filament may be tangled or stuck.",
	"1202820000020001": "AMS3 Slot3 filament may be tangled or stuck.",
	"1202830000020001": "AMS3 Slot4 filament may be tangled or stuck.",
	"1203800000020001": "AMS4 Slot1 filament may be tangled or stuck.",
	"1203810000020001": "AMS4 Slot2 filament may be tangled or stuck.",
	"1203820000020001": "AMS4 Slot3 filament may be tangled or stuck.",
	"1203830000020001": "AMS4 Slot4 filament may be tangled or stuck.",
	"12FF800000020001":
		"The filament on the spool holder may be tangled or stuck.",
	"0500040000020014": "The RFID-tag on AMS2 Slot1 cannot be identified.",
	"0500040000020013": "The RFID-tag on AMS1 Slot4 cannot be identified.",
	"0700300000020002":
		"The RFID-tag on AMS1 Slot1 is damaged or the it's content cannot be identified.",
	"0700310000020002":
		"The RFID-tag on AMS1 Slot2 is damaged or the it's content cannot be identified.",
	"0700320000020002":
		"The RFID-tag on AMS1 Slot3 is damaged or the it's content cannot be identified.",
	"0700330000020002":
		"The RFID-tag on AMS1 Slot4 is damaged or the it's content cannot be identified.",
	"0701300000020002":
		"The RFID-tag on AMS2 Slot1 is damaged or the it's content cannot be identified.",
	"0701310000020002":
		"The RFID-tag on AMS2 Slot2 is damaged or the it's content cannot be identified.",
	"0701320000020002":
		"The RFID-tag on AMS2 Slot3 is damaged or the it's content cannot be identified.",
	"0701330000020002":
		"The RFID-tag on AMS2 Slot4 is damaged or the it's content cannot be identified.",
	"0702300000020002":
		"The RFID-tag on AMS3 Slot1 is damaged or the it's content cannot be identified.",
	"0702310000020002":
		"The RFID-tag on AMS3 Slot2 is damaged or the it's content cannot be identified.",
	"0702320000020002":
		"The RFID-tag on AMS3 Slot3 is damaged or the it's content cannot be identified.",
	"0702330000020002":
		"The RFID-tag on AMS3 Slot4 is damaged or the it's content cannot be identified.",
	"0703300000020002":
		"The RFID-tag on AMS4 Slot1 is damaged or the it's content cannot be identified.",
	"0703310000020002":
		"The RFID-tag on AMS4 Slot2 is damaged or the it's content cannot be identified.",
	"0703320000020002":
		"The RFID-tag on AMS4 Slot3 is damaged or the it's content cannot be identified.",
	"0703330000020002":
		"The RFID-tag on AMS4 Slot4 is damaged or the it's content cannot be identified.",
	"0500040000020010": "The RFID-tag on AMS1 Slot1 cannot be identified.",
	"0500040000020011": "The RFID-tag on AMS1 Slot2 cannot be identified.",
	"0500040000020012": "The RFID-tag on AMS1 Slot3 cannot be identified.",
	"0500040000020015": "The RFID-tag on AMS2 Slot2 cannot be identified.",
	"0500040000020016": "The RFID-tag on AMS2 Slot3 cannot be identified.",
	"0500040000020017": "The RFID-tag on AMS2 Slot4 cannot be identified.",
	"0500040000020018": "The RFID-tag on AMS3 Slot1 cannot be identified.",
	"0500040000020019": "The RFID-tag on AMS3 Slot2 cannot be identified.",
	"050004000002001A": "The RFID-tag on AMS3 Slot3 cannot be identified.",
	"050004000002001B": "The RFID-tag on AMS3 Slot4 cannot be identified.",
	"050004000002001C": "The RFID-tag on AMS4 Slot1 cannot be identified.",
	"050004000002001D": "The RFID-tag on AMS4 Slot2 cannot be identified.",
	"050004000002001E": "The RFID-tag on AMS4 Slot3 cannot be identified.",
	"050004000002001F": "The RFID-tag on AMS4 Slot4 cannot be identified.",
	"0500030000030022":
		"MicroSD Card performance degradation has been detected. It may affect print jobs, logs, and video records. Please try to format or change the MicroSD card.",
	"0300030000020002": "",
	"1203110000010001":
		"The AMS4 Slot2 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1203120000010001":
		"The AMS4 Slot3 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1203130000010001":
		"The AMS4 Slot4 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1203110000010003":
		"The AMS4 Slot2 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1203120000010003":
		"The AMS4 Slot3 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1203130000010003":
		"The AMS4 Slot4 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1201110000010001":
		"The AMS2 Slot2 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1202110000010001":
		"The AMS3 Slot2 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1201120000010001":
		"The AMS2 Slot3 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1202120000010001":
		"The AMS3 Slot3 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1201130000010001":
		"The AMS2 Slot4 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1202130000010001":
		"The AMS3 Slot4 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1201110000010003":
		"The AMS2 Slot2 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1202110000010003":
		"The AMS3 Slot2 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1201120000010003":
		"The AMS2 Slot3 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1202120000010003":
		"The AMS3 Slot3 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1201130000010003":
		"The AMS2 Slot4 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1202130000010003":
		"The AMS3 Slot4 motor torque control is malfunctioning. The current sensor may be faulty.",
	"12FF200000020002":
		"Filament on the spool holder is empty; please insert a new filament.",
	"1200300000010001":
		"AMS1 Slot1 RFID coil is broken or the RF hardware circuit has an error.",
	"1201300000010001":
		"AMS2 Slot1 RFID coil is broken or the RF hardware circuit has an error.",
	"1202300000010001":
		"AMS3 Slot1 RFID coil is broken or the RF hardware circuit has an error.",
	"1203300000010001":
		"AMS4 Slot1 RFID coil is broken or the RF hardware circuit has an error.",
	"1200310000010001":
		"AMS1 Slot2 RFID coil is broken or the RF hardware circuit has an error.",
	"1201310000010001":
		"AMS2 Slot2 RFID coil is broken or the RF hardware circuit has an error.",
	"1202310000010001":
		"AMS3 Slot2 RFID coil is broken or the RF hardware circuit has an error.",
	"1203310000010001":
		"AMS4 Slot2 RFID coil is broken or the RF hardware circuit has an error.",
	"1200320000010001":
		"AMS1 Slot3 RFID coil is broken or the RF hardware circuit has an error.",
	"1201320000010001":
		"AMS2 Slot3 RFID coil is broken or the RF hardware circuit has an error.",
	"1202320000010001":
		"AMS3 Slot3 RFID coil is broken or the RF hardware circuit has an error.",
	"1203320000010001":
		"AMS4 Slot3 RFID coil is broken or the RF hardware circuit has an error.",
	"1200330000010001":
		"AMS1 Slot4 RFID coil is broken or the RF hardware circuit has an error.",
	"1201330000010001":
		"AMS2 Slot4 RFID coil is broken or the RF hardware circuit has an error.",
	"1202330000010001":
		"AMS3 Slot4 RFID coil is broken or the RF hardware circuit has an error.",
	"1203330000010001":
		"AMS4 Slot4 RFID coil is broken or the RF hardware circuit has an error.",
	"1200300000010004":
		"RFID cannot be read because of an encryption chip failure in AMS1.",
	"1201300000010004":
		"RFID cannot be read because of an encryption chip failure in AMS2.",
	"1202300000010004":
		"RFID cannot be read because of an encryption chip failure in AMS3.",
	"1203300000010004":
		"RFID cannot be read because of an encryption chip failure in AMS4.",
	"1200450000020001":
		"The filament cutter sensor is malfunctioning. Please check whether the connector is properly plugged in.",
	"1200500000020001":
		"AMS1 communication is abnormal; please check the connection cable.",
	"1201500000020001":
		"AMS2 communication is abnormal; please check the connection cable.",
	"1202500000020001":
		"AMS3 communication is abnormal; please check the connection cable.",
	"1203500000020001":
		"AMS4 communication is abnormal; please check the connection cable.",
	"1200510000030001":
		"AMS is disabled; please load filament from spool holder.",
	"1201200000020001":
		"AMS2 Slot1 filament has run out; please insert a new filament.",
	"1202200000020001":
		"AMS3 Slot1 filament has run out; please insert a new filament.",
	"1203200000020001":
		"AMS4 Slot1 filament has run out; please insert a new filament.",
	"1200210000020001":
		"AMS1 Slot2 filament has run out; please insert a new filament.",
	"1201210000020001":
		"AMS2 Slot2 filament has run out; please insert a new filament.",
	"1202210000020001":
		"AMS3 Slot2 filament has run out; please insert a new filament.",
	"1203210000020001":
		"AMS4 Slot2 filament has run out; please insert a new filament.",
	"1200220000020001":
		"AMS1 Slot3 filament has run out; please insert a new filament.",
	"1201220000020001":
		"AMS2 Slot3 filament has run out; please insert a new filament.",
	"1202220000020001":
		"AMS3 Slot3 filament has run out; please insert a new filament.",
	"1203220000020001":
		"AMS4 Slot3 filament has run out; please insert a new filament.",
	"1200230000020001":
		"AMS1 Slot4 filament has run out; please insert a new filament.",
	"1201230000020001":
		"AMS2 Slot4 filament has run out; please insert a new filament.",
	"1202230000020001":
		"AMS3 Slot4 filament has run out; please insert a new filament.",
	"1203230000020001":
		"AMS4 Slot4 filament has run out; please insert a new filament.",
	"12FF200000020001":
		"Filament at the spool holder has run out; please insert a new filament.",
	"1201200000020002": "AMS2 Slot1 is empty; please insert a new filament.",
	"1202200000020002": "AMS3 Slot1 is empty; please insert a new filament.",
	"1203200000020002": "AMS4 Slot1 is empty; please insert a new filament.",
	"1200210000020002": "AMS1 Slot2 is empty; please insert a new filament.",
	"1201210000020002": "AMS2 Slot2 is empty; please insert a new filament.",
	"1202210000020002": "AMS3 Slot2 is empty; please insert a new filament.",
	"1203210000020002": "AMS4 Slot2 is empty; please insert a new filament.",
	"1200220000020002": "AMS1 Slot3 is empty; please insert a new filament.",
	"1201220000020002": "AMS2 Slot3 is empty; please insert a new filament.",
	"1202220000020002": "AMS3 Slot3 is empty; please insert a new filament.",
	"1203220000020002": "AMS4 Slot3 is empty; please insert a new filament.",
	"1200230000020002": "AMS1 Slot4 is empty; please insert a new filament.",
	"1201230000020002": "AMS2 Slot4 is empty; please insert a new filament.",
	"1202230000020002": "AMS3 Slot4 is empty; please insert a new filament.",
	"1203230000020002": "AMS4 Slot4 is empty; please insert a new filament.",
	"1203210000020005":
		"AMS4 Slot2 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1201200000030001":
		"AMS2 Slot1 filament has run out. Purging the old filament; please wait.",
	"1202200000030001":
		"AMS3 Slot1 filament has run out. Purging the old filament; please wait.",
	"1203200000030001":
		"AMS4 Slot1 filament has run out. Purging the old filament; please wait.",
	"1201210000030001":
		"AMS2 Slot2 filament has run out. Purging the old filament; please wait.",
	"1202210000030001":
		"AMS3 Slot2 filament has run out. Purging the old filament; please wait.",
	"1203210000030001":
		"AMS4 Slot2 filament has run out. Purging the old filament; please wait.",
	"1200220000030001":
		"AMS1 Slot3 filament has run out. Purging the old filament; please wait.",
	"1201220000030001":
		"AMS2 Slot3 filament has run out. Purging the old filament; please wait.",
	"1202220000030001":
		"AMS3 Slot3 filament has run out. Purging the old filament; please wait.",
	"1203220000030001":
		"AMS4 Slot3 filament has run out. Purging the old filament; please wait.",
	"1200230000030001":
		"AMS1 Slot4 filament has run out. Purging the old filament; please wait.",
	"1201230000030001":
		"AMS2 Slot4 filament has run out. Purging the old filament; please wait.",
	"1202230000030001":
		"AMS3 Slot4 filament has run out. Purging the old filament; please wait.",
	"1203230000030001":
		"AMS4 Slot4 filament has run out. Purging the old filament; please wait.",
	"1200200000030001":
		"AMS1 Slot1 filament has run out. Purging the old filament; please wait.",
	"1200210000030001":
		"AMS1 Slot2 filament has run out. Purging the old filament; please wait.",
	"1200230000030002":
		"AMS1 Slot4 filament has run out and automatically switched to the slot with the same filament.",
	"1201230000030002":
		"AMS2 Slot4 filament has run out and automatically switched to the slot with the same filament.",
	"1202230000030002":
		"AMS3 Slot4 filament has run out and automatically switched to the slot with the same filament.",
	"1203230000030002":
		"AMS4 Slot4 filament has run out and automatically switched to the slot with the same filament.",
	"1201200000030002":
		"AMS2 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"1202200000030002":
		"AMS3 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"1203200000030002":
		"AMS4 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"1200210000030002":
		"AMS1 Slot2 filament has run out and automatically switched to the slot with the same filament.",
	"1201210000030002":
		"AMS2 Slot2 filament has run out and automatically switched to the slot with the same filament.",
	"1202210000030002":
		"AMS3 Slot2 filament has run out and automatically switched to the slot with the same filament.",
	"1203210000030002":
		"AMS4 Slot2 filament has run out and automatically switched to the slot with the same filament.",
	"1200220000030002":
		"AMS1 Slot3 filament has run out and automatically switched to the slot with the same filament.",
	"1201220000030002":
		"AMS2 Slot3 filament has run out and automatically switched to the slot with the same filament.",
	"1202220000030002":
		"AMS3 Slot3 filament has run out and automatically switched to the slot with the same filament.",
	"1203220000030002":
		"AMS4 Slot3 filament has run out and automatically switched to the slot with the same filament.",
	"1202220000020003": "AMS3 Slot3 filament may be broken in the PTFE tube.",
	"1203220000020003": "AMS4 Slot3 filament may be broken in the PTFE tube.",
	"1200230000020003": "AMS1 Slot4 filament may be broken in the PTFE tube.",
	"1201230000020003": "AMS2 Slot4 filament may be broken in the PTFE tube.",
	"1202230000020003": "AMS3 Slot4 filament may be broken in the PTFE tube.",
	"1203230000020003": "AMS4 Slot4 filament may be broken in the PTFE tube.",
	"1200200000020004": "AMS1 Slot1 filament may be broken in the tool head.",
	"1201200000020004": "AMS2 Slot1 filament may be broken in the tool head.",
	"1202200000020004": "AMS3 Slot1 filament may be broken in the tool head.",
	"1203200000020004": "AMS4 Slot1 filament may be broken in the tool head.",
	"1200210000020004": "AMS1 Slot2 filament may be broken in the tool head.",
	"1201210000020004": "AMS2 Slot2 filament may be broken in the tool head.",
	"1202210000020004": "AMS3 Slot2 filament may be broken in the tool head.",
	"1203210000020004": "AMS4 Slot2 filament may be broken in the tool head.",
	"1200220000020004": "AMS1 Slot3 filament may be broken in the tool head.",
	"1201220000020004": "AMS2 Slot3 filament may be broken in the tool head.",
	"1202220000020004": "AMS3 Slot3 filament may be broken in the tool head.",
	"1203220000020004": "AMS4 Slot3 filament may be broken in the tool head.",
	"1200230000020004": "AMS1 Slot4 filament may be broken in the tool head.",
	"1201230000020004": "AMS2 Slot4 filament may be broken in the tool head.",
	"1202230000020004": "AMS3 Slot4 filament may be broken in the tool head.",
	"1203230000020004": "AMS4 Slot4 filament may be broken in the tool head.",
	"1200200000030002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"1200110000010001":
		"The AMS1 Slot2 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1200120000010001":
		"The AMS1 Slot3 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1200130000010001":
		"The AMS1 Slot4 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"1200110000010003":
		"The AMS1 Slot2 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1200120000010003":
		"The AMS1 Slot3 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1200130000010003":
		"The AMS1 Slot4 motor torque control is malfunctioning. The current sensor may be faulty.",
	"1200200000020003": "AMS1 Slot1 filament may be broken in the PTFE tube.",
	"1201200000020003": "AMS2 Slot1 filament may be broken in the PTFE tube.",
	"1202200000020003": "AMS3 Slot1 filament may be broken in the PTFE tube.",
	"1203200000020003": "AMS4 Slot1 filament may be broken in the PTFE tube.",
	"1200210000020003": "AMS1 Slot2 filament may be broken in the PTFE tube.",
	"1201210000020003": "AMS2 Slot2 filament may be broken in the PTFE tube.",
	"1202210000020003": "AMS3 Slot2 filament may be broken in the PTFE tube.",
	"1203210000020003": "AMS4 Slot2 filament may be broken in the PTFE tube.",
	"1200220000020003": "AMS1 Slot3 filament may be broken in the PTFE tube.",
	"1201220000020003": "AMS2 Slot3 filament may be broken in the PTFE tube.",
	"1202220000020005":
		"AMS3 Slot3 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1203220000020005":
		"AMS4 Slot3 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1200230000020005":
		"AMS1 Slot4 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1201230000020005":
		"AMS2 Slot4 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1202230000020005":
		"AMS3 Slot4 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1203230000020005":
		"AMS4 Slot4 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1200200000020001":
		"AMS1 Slot1 filament has run out; please insert a new filament.",
	"1200200000020002": "AMS1 Slot1 is empty; please insert a new filament.",
	"1200200000020005":
		"AMS1 Slot1 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1201200000020005":
		"AMS2 Slot1 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1202200000020005":
		"AMS3 Slot1 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1203200000020005":
		"AMS4 Slot1 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1200210000020005":
		"AMS1 Slot2 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1201210000020005":
		"AMS2 Slot2 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1202210000020005":
		"AMS3 Slot2 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1200220000020005":
		"AMS1 Slot3 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"1201220000020005":
		"AMS2 Slot3 filament has run out, and purging the old filament went abnormally; please check to see if filament is stuck in the toolhead.",
	"12FF200000020005": "Filament may be broken in the tool head.",
	"12FF200000020006":
		"Failed to extrude the filament and the extruder may be clogged.",
	"1200300000020002": "The RFID-tag on AMS1 Slot1 is damaged.",
	"1201300000020002": "The RFID-tag on AMS2 Slot1 is damaged.",
	"1202300000020002": "The RFID-tag on AMS3 Slot1 is damaged.",
	"1203300000020002": "The RFID-tag on AMS4 Slot1 is damaged.",
	"1200310000020002": "The RFID-tag on AMS1 Slot2 is damaged.",
	"1201310000020002": "The RFID-tag on AMS2 Slot2 is damaged.",
	"1202310000020002": "The RFID-tag on AMS3 Slot2 is damaged.",
	"1203310000020002": "The RFID-tag on AMS4 Slot2 is damaged.",
	"1200320000020002": "The RFID-tag on AMS1 Slot3 is damaged.",
	"1201320000020002": "The RFID-tag on AMS2 Slot3 is damaged.",
	"1202320000020002": "The RFID-tag on AMS3 Slot3 is damaged.",
	"1203320000020002": "The RFID-tag on AMS4 Slot3 is damaged.",
	"1200330000020002": "The RFID-tag on AMS1 Slot4 is damaged.",
	"1201330000020002": "The RFID-tag on AMS2 Slot4 is damaged.",
	"1202330000020002": "The RFID-tag on AMS3 Slot4 is damaged.",
	"1203330000020002": "The RFID-tag on AMS4 Slot4 is damaged.",
	"1200300000030003":
		"AMS1 Slot1 RFID cannot be read because of a structural error.",
	"1201300000030003":
		"AMS2 Slot1 RFID cannot be read because of a structural error.",
	"1202300000030003":
		"AMS3 Slot1 RFID cannot be read because of a structural error.",
	"1203300000030003":
		"AMS4 Slot1 RFID cannot be read because of a structural error.",
	"1200310000030003":
		"AMS1 Slot2 RFID cannot be read because of a structural error.",
	"1201310000030003":
		"AMS2 Slot2 RFID cannot be read because of a structural error.",
	"1202310000030003":
		"AMS3 Slot2 RFID cannot be read because of a structural error.",
	"1203310000030003":
		"AMS4 Slot2 RFID cannot be read because of a structural error.",
	"1200320000030003":
		"AMS1 Slot3 RFID cannot be read because of a structural error.",
	"1201320000030003":
		"AMS2 Slot3 RFID cannot be read because of a structural error.",
	"1202320000030003":
		"AMS3 Slot3 RFID cannot be read because of a structural error.",
	"1203320000030003":
		"AMS4 Slot3 RFID cannot be read because of a structural error.",
	"1200330000030003":
		"AMS1 Slot4 RFID cannot be read because of a structural error.",
	"1201330000030003":
		"AMS2 Slot4 RFID cannot be read because of a structural error.",
	"1202330000030003":
		"AMS3 Slot4 RFID cannot be read because of a structural error.",
	"1203330000030003":
		"AMS4 Slot4 RFID cannot be read because of a structural error.",
	"1200450000020002":
		"The filament cutter's cutting distance is too large. The X motor may lose steps.",
	"1200700000010001":
		"AMS1 Filament speed and length error: The slot 1 filament odometry may be faulty.",
	"1201700000010001":
		"AMS2 Filament speed and length error: The slot 1 filament odometry may be faulty.",
	"1202700000010001":
		"AMS3 Filament speed and length error: The slot 1 filament odometry may be faulty.",
	"1203700000010001":
		"AMS4 Filament speed and length error: The slot 1 filament odometry may be faulty.",
	"1200710000010001":
		"AMS1 Filament speed and length error: The slot 2 filament odometry may be faulty.",
	"1201710000010001":
		"AMS2 Filament speed and length error: The slot 2 filament odometry may be faulty.",
	"1202710000010001":
		"AMS3 Filament speed and length error: The slot 2 filament odometry may be faulty.",
	"1203710000010001":
		"AMS4 Filament speed and length error: The slot 2 filament odometry may be faulty.",
	"1200720000010001":
		"AMS1 Filament speed and length error: The slot 3 filament odometry may be faulty.",
	"1201720000010001":
		"AMS2 Filament speed and length error: The slot 3 filament odometry may be faulty.",
	"1202720000010001":
		"AMS3 Filament speed and length error: The slot 3 filament odometry may be faulty.",
	"1203720000010001":
		"AMS4 Filament speed and length error: The slot 3 filament odometry may be faulty.",
	"1200730000010001":
		"AMS1 Filament speed and length error: The slot 4 filament odometry may be faulty.",
	"1201730000010001":
		"AMS2 Filament speed and length error: The slot 4 filament odometry may be faulty.",
	"1202730000010001":
		"AMS3 Filament speed and length error: The slot 4 filament odometry may be faulty.",
	"1203730000010001":
		"AMS4 Filament speed and length error: The slot 4 filament odometry may be faulty.",
	"12FF200000020004":
		"Please pull out the filament on the spool holder from the extruder.",
	"1200240000020001": "Filament may be broken in the tool head.",
	"1200250000020001":
		"Failed to extrude the filament and the extruder may be clogged.",
	"0500010000030007":
		"Unable to record time-lapse photography without MicroSD card inserted.",
	"0500030000020010": "forward coredump, it is recovering.",
	"0500030000020011": "upgrade coredump, it is recovering.",
	"0500030000020012": "ipcam coredump, it is recovering.",
	"0500030000020016": "device_manager coredump, it is recovering.",
	"0500030000020017": "recorder coredump, it is recovering.",
	"0500030000020018": "security coredump, it is recovering.",
	"0500030000020013": "xcam coredump, it is recovering.",
	"0500030000020014": "bbl_screen coredump, it is recovering.",
	"0500030000020015": "device_gate coredump, it is recovering.",
	"0500040000030008": "The door is detected to be open.",
	"0700400000020004":
		"The filament buffer signal is abnormal; the spring may be stuck or the filament may be tangle.",
	"0500010000030005":
		"MicroSD Card error: please reinsert, format or replace it.",
	"0500010000030006": "Unformatted MicroSD Card: please format it.",
	"0700200000020002": "AMS1 Slot1 is empty; please load a new filament.",
	"0700210000020002": "AMS1 Slot2 is empty; please load a new filament.",
	"0700220000020002": "AMS1 Slot3 is empty; please load a new filament.",
	"0700230000020002": "AMS1 Slot4 is empty; please load a new filament.",
	"0701200000020002": "AMS2 Slot1 is empty; please load a new filament.",
	"0701210000020002": "AMS2 Slot2 is empty; please load a new filament.",
	"0701220000020002": "AMS2 Slot3 is empty; please load a new filament.",
	"0701230000020002": "AMS2 Slot4 is empty; please load a new filament.",
	"0702200000020002": "AMS3 Slot1 is empty; please load a new filament.",
	"0702210000020002": "AMS3 Slot2 is empty; please load a new filament.",
	"0702220000020002": "AMS3 Slot3 is empty; please load a new filament.",
	"0702230000020002": "AMS3 Slot4 is empty; please load a new filament.",
	"0703200000020002": "AMS4 Slot1 is empty; please load a new filament.",
	"0703210000020002": "AMS4 Slot2 is empty; please load a new filament.",
	"0703220000020002": "AMS4 Slot3 is empty; please load a new filament.",
	"0703230000020002": "AMS4 Slot4 is empty; please load a new filament.",
	"07FF200000020001":
		"External filament has run out; please load a new filament.",
	"07FF200000020002":
		"External filament is missing; please load a new filament.",
	"07FF200000020004": "Please pull the external filament from the extruder.",
	"0300030000010001":
		"The speed of the nozzle fan is too slow or stopped. It may be stuck or the connector is not plugged in properly.",
	"0300010000030008":
		"The temperature of the heated bed exceeds the limit and automatically adjusts to the limit temperature.",
	"0300200000010003": "X axis homing abnormal: the timing belt may be loose.",
	"0300200000010004": "Y axis homing abnormal: the timing belt may be loose.",
	"0C00030000020004":
		"First layer inspection is not supported for the current print job.",
	"0C0003000003000d":
		"Some objects may have fallen down, or the extruder is not extruding normally. Please check and decide if the printing should be stopped.",
	"0700200000030001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0700210000030001":
		"AMS1 Slot2 filament has run out. Please wait while old filament is purged.",
	"0700220000030001":
		"AMS1 Slot3 filament has run out. Please wait while old filament is purged.",
	"0700200000030002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0700210000030002":
		"AMS1 Slot2 filament has run out and automatically switched to the slot with the same filament.",
	"0700220000030002":
		"AMS1 Slot3 filament has run out and automatically switched to the slot with the same filament.",
	"0C00030000030008":
		"Possible spaghetti defects were detected. Please check the print quality and decide if the job should be stopped.",
	"0702500000020001":
		"AMS3 communication is abnormal; please check the connection cable.",
	"0703500000020001":
		"AMS4 communication is abnormal; please check the connection cable.",
	"0700600000020001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701600000020001":
		"The AMS2 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702600000020001":
		"The AMS3 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703600000020001":
		"The AMS4 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700610000020001":
		"The AMS1 slot2 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701610000020001":
		"The AMS2 slot2 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702610000020001":
		"The AMS3 slot2 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703610000020001":
		"The AMS4 slot2 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700620000020001":
		"The AMS1 slot3 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701620000020001":
		"The AMS2 slot3 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702620000020001":
		"The AMS3 slot3 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703620000020001":
		"The AMS4 slot3 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700630000020001":
		"The AMS1 slot4 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701630000020001":
		"The AMS2 slot4 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702630000020001":
		"The AMS3 slot4 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703630000020001":
		"The AMS4 slot4 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700200000020004": "AMS1 Slot1 filament may be broken in the tool head.",
	"0702200000020004": "AMS3 Slot1 filament may be broken in the tool head.",
	"0703200000020004": "AMS4 Slot1 filament may be broken in the tool head.",
	"0700210000020004": "AMS1 Slot2 filament may be broken in the tool head.",
	"0701210000020004": "AMS2 Slot2 filament may be broken in the tool head.",
	"0702210000020004": "AMS3 Slot2 filament may be broken in the tool head.",
	"0703210000020004": "AMS4 Slot2 filament may be broken in the tool head.",
	"0700220000020004": "AMS1 Slot3 filament may be broken in the tool head.",
	"0701220000020004": "AMS2 Slot3 filament may be broken in the tool head.",
	"0702220000020004": "AMS3 Slot3 filament may be broken in the tool head.",
	"0703220000020004": "AMS4 Slot3 filament may be broken in the tool head.",
	"0700230000020004": "AMS1 Slot4 filament may be broken in the tool head.",
	"0701230000020004": "AMS2 Slot4 filament may be broken in the tool head.",
	"0702230000020004": "AMS3 Slot4 filament may be broken in the tool head.",
	"0703230000020004": "AMS4 Slot4 filament may be broken in the tool head.",
	"0702200000020005":
		"AMS3 Slot1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0703200000020005":
		"AMS4 Slot1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0702210000020005":
		"AMS3 Slot2 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0703210000020005":
		"AMS4 Slot2 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0702220000020005":
		"AMS3 Slot3 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0703220000020005":
		"AMS4 Slot3 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0702230000020005":
		"AMS3 Slot4 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0703230000020005":
		"AMS4 Slot4 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0701200000030002":
		"AMS2 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0702200000030002":
		"AMS3 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0703200000030002":
		"AMS4 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0701210000030002":
		"AMS2 Slot2 filament has run out and automatically switched to the slot with the same filament.",
	"0702210000030002":
		"AMS3 Slot2 filament has run out and automatically switched to the slot with the same filament.",
	"0703210000030002":
		"AMS4 Slot2 filament has run out and automatically switched to the slot with the same filament.",
	"0701220000030002":
		"AMS2 Slot3 filament has run out and automatically switched to the slot with the same filament.",
	"0702220000030002":
		"AMS3 Slot3 filament has run out and automatically switched to the slot with the same filament.",
	"0703220000030002":
		"AMS4 Slot3 filament has run out and automatically switched to the slot with the same filament.",
	"0700230000030002":
		"AMS1 Slot4 filament has run out and automatically switched to the slot with the same filament.",
	"0701230000030002":
		"AMS2 Slot4 filament has run out and automatically switched to the slot with the same filament.",
	"0702230000030002":
		"AMS3 Slot4 filament has run out and automatically switched to the slot with the same filament.",
	"0703230000030002":
		"AMS4 Slot4 filament has run out and automatically switched to the slot with the same filament.",
	"0700450000020001":
		"The filament cutter sensor is malfunctioning; please check whether the connector is properly plugged in.",
	"0700500000020001":
		"AMS1 communication is abnormal; please check the connection cable.",
	"0701500000020001":
		"AMS2 communication is abnormal; please check the connection cable.",
	"0500020000020002":
		"Device login failed; please check your account information.",
	"0500020000020003":
		"Failed to connect internet; please check the network connection.",
	"0500020000020004":
		"Unauthorized user: please check your account information.",
	"0500020000020005":
		"Failed to connect internet; please check the network connection.",
	"0500020000020007":
		"Liveview service login failed; please check your network connection.",
	"0500030000010001":
		"The MC module is malfunctioning; please restart the device or check device cable connection.",
	"050003000001000a":
		"System state is abnormal; please restore factory settings.",
	"050003000001000b":
		"The screen is malfunctioning; please restart the device.",
	"0300200000010001":
		"X axis homing abnormal: please check if the tool head is stuck or the carbon rod has too much resistance.",
	"0300200000010002":
		"Y axis homing abnormal: please check if the tool head is stuck or the Y carriage has too much resistance.",
	"0300400000020001":
		"Data transmission over the serial port is abnormal; the software system may be faulty.",
	"0300410000010001":
		"The system voltage is unstable; triggering the power failure protection function.",
	"0701200000020004": "AMS2 Slot1 filament may be broken in the tool head.",
	"0700200000020005":
		"AMS1 Slot1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0701200000020005":
		"AMS2 Slot1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0700210000020005":
		"AMS1 Slot2 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0701210000020005":
		"AMS2 Slot2 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0700220000020005":
		"AMS1 Slot3 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0701220000020005":
		"AMS2 Slot3 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0700230000020005":
		"AMS1 Slot4 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0701230000020005":
		"AMS2 Slot4 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0500020000020001":
		"Failed to connect internet. Please check the network connection.",
	"0300040000020001":
		"The speed of the part cooling fan is too slow or stopped. It may be stuck or the connector is not plugged in properly.",
	"0500010000020002":
		"USB camera is not connected. Please check video camera cable connection.",
	"050003000002000c":
		"Wireless hardware error: please turn off/on WiFi or restart the device.",
	"0C0003000003000b": "Inspecting the first layer: please wait a moment.",
	"0C00020000020004":
		"Nozzle height seems too low. Please check if the nozzle is worn or tilted. Re-calibrate Lidar if the nozzle has been replaced.",
	"0C00030000030007":
		"Possible first layer defects have been detected. Please check the first layer quality and decide if the job should be stopped.",
	"0C0001000001000B":
		"Failed to calibrate Micro Lidar. Please make sure the calibration chart is clean and not occluded, and run machine calibration again.",
	"0C00020000020002":
		"The horizontal laser line is too wide. Please check if the heatbed is dirty.",
	"0C00020000020008":
		"The vertical laser line is too wide. Please check if the heatbed is dirty.",
	"03000A0000010001":
		"Heatbed force sensor 1 is too sensitive. It may be stuck between the strain arm and heatbed support, or the adjusting screw may be too tight.",
	"03000A0000010004":
		"An external disturbance was detected on force sensor 1. The heatbed plate may have touched something outside the heatbed.",
	"03000A0000010005":
		"Force sensor 1 detected unexpected continuous force. The heatbed may be stuck, or the analog front end may be broken.",
	"03000B0000010001":
		"Heatbed force sensor 2 is too sensitive. It may be stuck between the strain arm and heatbed support, or the adjusting screw may be too tight.",
	"03000B0000010004":
		"An external disturbance was detected on force sensor 2. The heatbed plate may have touched something outside the heatbed.",
	"03000B0000010005":
		"Force sensor 2 detected unexpected continuous force. The heatbed may be stuck, or the analog front end may be broken.",
	"03000C0000010001":
		"Heatbed force sensor 3 is too sensitive. It may be stuck between the strain arm and heatbed support, or the adjusting screw may be too tight.",
	"03000C0000010004":
		"An external disturbance was detected on force sensor 3. The heatbed plate may have touched something outside the heatbed.",
	"03000C0000010005":
		"Force sensor 3 detected unexpected continuous force. The heatbed may be stuck, or the analog front end may be broken.",
	"0C0001000001000A": "The Micro Lidar LED may be broken.",
	"0700510000030001":
		"The AMS is disabled; please load filament from spool holder.",
	"0500040000020007":
		"The bed temperature exceeds the filament's vitrification temperature, which may cause a nozzle clog. Please keep the front door of the printer open or lower the bed temperature.",
	"0300100000020001":
		"The resonance frequency of the X axis is low. The timing belt may be loose.",
	"0300110000020001":
		"The resonance frequency of the Y axis is low. The timing belt may be loose.",
	"03000A0000010002":
		"The signal of heatbed force sensor 1 is weak. The force sensor may be broken or have poor electric connection.",
	"03000A0000010003":
		"The signal of heatbed force sensor 1 is too weak. The electronic connection to the sensor may be broken.",
	"03000B0000010003":
		"The signal of heatbed force sensor 2 is too weak. The electronic connection to the sensor may be broken.",
	"03000B0000010002":
		"The signal of heatbed force sensor 2 is weak. The force sensor may be broken or have poor electric connection.",
	"03000C0000010002":
		"The signal of heatbed force sensor 3 is weak. The force sensor may be broken or have poor electric connection.",
	"03000C0000010003":
		"The signal of heatbed force sensor 3 is too weak. The electronic connection to the sensor may be broken.",
	"0300060000010001":
		"Motor-A has an open-circuit. There may be a loose connection, or the motor may have failed.",
	"0300060000010002": "Motor-A has a short-circuit. It may have failed.",
	"0300070000010001":
		"Motor-B has an open-circuit. The connection may be loose, or the motor may have failed.",
	"0300070000010002": "Motor-B has a short-circuit. It may have failed.",
	"0300080000010001":
		"Motor-Z has an open-circuit. The connection may be loose, or the motor may have failed.",
	"0300080000010002": "Motor-Z has a short-circuit. It may have failed.",
	"0300090000010001":
		"Motor-E has an open-circuit. The connection may be loose, or the motor may have failed.",
	"0300090000010002": "Motor-E has a short-circuit. It may have failed.",
	"0700200000020001":
		"AMS1 Slot1 filament has run out. Please insert a new filament.",
	"0700200000020003": "AMS1 Slot1's filament may be broken in AMS.",
	"0700210000020001":
		"AMS1 Slot2 filament has run out. Please insert a new filament.",
	"0700210000020003": "AMS1 Slot2's filament may be broken in AMS.",
	"0700220000020001":
		"AMS1 Slot3 filament has run out. Please insert a new filament.",
	"0700220000020003": "AMS1 Slot3's filament may be broken in AMS.",
	"0700230000020001":
		"AMS1 Slot4 filament has run out. Please insert a new filament.",
	"0700230000020003": "AMS1 Slot4's filament may be broken in AMS.",
	"0701200000020001":
		"AMS2 Slot1 filament has run out. Please insert a new filament.",
	"0701200000020003": "AMS2 Slot1's filament may be broken in AMS.",
	"0701210000020001":
		"AMS2 Slot2 filament has run out. Please insert a new filament.",
	"0701210000020003": "AMS2 Slot2's filament may be broken in AMS.",
	"0701220000020001":
		"AMS2 Slot3 filament has run out. Please insert a new filament.",
	"0701220000020003": "AMS2 Slot3's filament may be broken in AMS.",
	"0701230000020001":
		"AMS2 Slot4 filament has run out. Please insert a new filament.",
	"0701230000020003": "AMS2 Slot4's filament may be broken in AMS.",
	"0702200000020001":
		"AMS3 Slot1 filament has run out. Please insert a new filament.",
	"0702200000020003": "AMS3 Slot1's filament may be broken in AMS.",
	"0702210000020001":
		"AMS3 Slot2 filament has run out. Please insert a new filament.",
	"0702210000020003": "AMS3 Slot2's filament may be broken in AMS.",
	"0702220000020001":
		"AMS3 Slot3 filament has run out. Please insert a new filament.",
	"0702220000020003": "AMS3 Slot3's filament may be broken in AMS.",
	"0702230000020001":
		"AMS3 Slot4 filament has run out. Please insert a new filament.",
	"0702230000020003": "AMS3 Slot4's filament may be broken in AMS.",
	"0703200000020001":
		"AMS4 Slot1 filament has run out. Please insert a new filament.",
	"0703200000020003": "AMS4 Slot1's filament may be broken in AMS.",
	"0703210000020001":
		"AMS4 Slot2 filament has run out. Please insert a new filament.",
	"0703210000020003": "AMS4 Slot2's filament may be broken in AMS.",
	"0703220000020001":
		"AMS4 Slot3 filament has run out. Please insert a new filament.",
	"0703220000020003": "AMS4 Slot3's filament may be broken in AMS.",
	"0703230000020001":
		"AMS4 Slot4 filament has run out. Please insert a new filament.",
	"0703230000020003": "AMS4 Slot4's filament may be broken in AMS.",
	"0C00010000020007":
		"Micro Lidar laser parameters are drifted. Please re-calibrate your printer.",
	"0C0003000002000c":
		"The build plate localization marker is not detected. Please check if the build plate is aligned correctly.",
	"0300060000010003":
		"The resistance of Motor-A is abnormal, the motor may have failed.",
	"0300070000010003":
		"The resistance of Motor-B is abnormal, the motor may have failed.",
	"0300080000010003":
		"The resistance of Motor-Z is abnormal, the motor may have failed.",
	"0300090000010003":
		"The resistance of Motor-E is abnormal, the motor may have failed.",
	"0300130000010001":
		"The current sensor of Motor-A is abnormal. This may be caused by a failure of the hardware sampling circuit.",
	"0300140000010001":
		"The current sensor of Motor-B is abnormal. This may be caused by a failure of the hardware sampling circuit.",
	"0300150000010001":
		"The current sensor of Motor-Z is abnormal. This may be caused by a failure of the hardware sampling circuit.",
	"0300160000010001":
		"The current sensor of Motor-E is abnormal. This may be caused by a failure of the hardware sampling circuit.",
	"0701200000030001":
		"AMS2 Slot1 filament has run out. Please wait while old filament is purged.",
	"0702200000030001":
		"AMS3 Slot1 filament has run out. Please wait while old filament is purged.",
	"0703200000030001":
		"AMS4 Slot1 filament has run out. Please wait while old filament is purged.",
	"0701210000030001":
		"AMS2 Slot2 filament has run out. Please wait while old filament is purged.",
	"0702210000030001":
		"AMS3 Slot2 filament has run out. Please wait while old filament is purged.",
	"0703210000030001":
		"AMS4 Slot2 filament has run out. Please wait while old filament is purged.",
	"0701220000030001":
		"AMS2 Slot3 filament has run out. Please wait while old filament is purged.",
	"0702220000030001":
		"AMS3 Slot3 filament has run out. Please wait while old filament is purged.",
	"0703220000030001":
		"AMS4 Slot3 filament has run out. Please wait while old filament is purged.",
	"0700230000030001":
		"AMS1 Slot4 filament has run out. Please wait while old filament is purged.",
	"0701230000030001":
		"AMS2 Slot4 filament has run out. Please wait while old filament is purged.",
	"0702230000030001":
		"AMS3 Slot4 filament has run out. Please wait while old filament is purged.",
	"0703230000030001":
		"AMS4 Slot4 filament has run out. Please wait while old filament is purged.",
	"0C00020000020009":
		"The vertical laser is not bright enough at homing position. Please clean or replace heatbed if this message appears repeatedly.",
	"0C0003000003000e": "Your printer seems to be printing without extruding.",
	"0C0003000003000f":
		"Your nozzle seems to be covered with jammed or clogged material.",
	"0C00020000020006":
		"Nozzle height seems too high. Please check if there is filament residual attached to the nozzle.",
	"0C00030000010009":
		"The first layer inspection module rebooted abnormally. The inspection result may be inaccurate.",
	"0C0003000001000a":
		"Your printer is in factory mode. Please contact Technical Support.",
	"0C00030000020001":
		"Filament exposure metering failed because laser reflection is too weak on this material. First layer inspection may be inaccurate.",
	"0C00030000020002":
		"First layer inspection terminated due to abnormal Lidar data.",
	"0C00030000020005":
		"First layer inspection timed out abnormally, and the current results may be inaccurate.",
	"0C00020000020007":
		"The vertical laser is not lit. Please check if it's covered or hardware connection is normal.",
	"0C00010000010004":
		"The Micro Lidar camera lens seems to be dirty. Please clean the lens.",
	"0C00010000010005":
		"Micro Lidar camera OTP parameter is abnormal. Please contact after-sales.",
	"0C00010000010009":
		"The chamber camera lens seems to be dirty. Please clean the lens.",
	"0C00010000020002":
		"The Micro Lidar camera is malfunctioning and related functions may fail. Please contact after-sales if this message keeps appearing in multiple prints.",
	"0C00010000020006":
		"Micro Lidar camera extrinsic parameters are abnormal. Please enable flowrate calibration in your next print.",
	"0C00020000010001":
		"The horizontal laser is not lit. Please check if it's covered or hardware connection is normal.",
	"0C00020000010005":
		"A new Micro Lidar was detected. Please calibrate it on Calibration page before use.",
	"0C00020000020003":
		"The horizontal laser is not bright enough at homing position. Please clean or replace heatbed if this message appears repeatedly.",
	"0703300000030003":
		"RFID cannot be read because of a hardware or structural error.",
	"0703310000010001": "The RFID board between AMS4 Slot3 & Slot4 has an error.",
	"0703310000010004": "Encryption chip failure.",
	"0703310000030003":
		"RFID cannot be read because of a hardware or structural error.",
	"0703350000010001":
		"The temperature and humidity sensor has an error. The chip may be faulty.",
	"0C00010000010001":
		"The Micro Lidar camera is offline. Please check the hardware connection.",
	"0C00010000010003":
		"Synchronization between the Micro Lidar camera and MCU is abnormal. Please restart your printer.",
	"0703130000020002":
		"The AMS4 slot4 motor is overloaded. The filament may be tangled or stuck.",
	"0703300000010001": "The RFID board between AMS4 Slot1 & Slot2 has an error.",
	"0703300000010004": "Encryption chip failure.",
	"0703010000010003":
		"The AMS4 assist motor torque control is malfunctioning. The current sensor may be faulty.",
	"0703010000010004":
		"The AMS4 assist motor speed control is malfunctioning. The speed sensor may be faulty.",
	"0703010000020002":
		"The AMS4 assist motor is overloaded. The filament may be tangled or stuck.",
	"0703020000010001":
		"AMS4 Filament speed and length error: The filament odometry may be faulty.",
	"0703100000010001":
		"The AMS4 slot1 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0703100000010003":
		"The AMS4 slot1 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0703100000020002":
		"The AMS4 slot1 motor is overloaded. The filament may be tangled or stuck.",
	"0703110000010001":
		"The AMS4 slot2 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0703110000010003":
		"The AMS4 slot2 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0703110000020002":
		"The AMS4 slot2 motor is overloaded. The filament may be tangled or stuck.",
	"0703120000010001":
		"The AMS4 slot3 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0703120000010003":
		"The AMS4 slot3 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0703120000020002":
		"The AMS4 slot3 motor is overloaded. The filament may be tangled or stuck.",
	"0703130000010001":
		"The AMS4 slot4 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0703130000010003":
		"The AMS4 slot4 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0702300000030003":
		"RFID cannot be read because of a hardware or structural error.",
	"0702310000010001": "The RFID board between AMS3 Slot3 & Slot4 has an error.",
	"0702310000010004": "Encryption chip failure.",
	"0702310000030003":
		"RFID cannot be read because of a hardware or structural error.",
	"0702350000010001":
		"The temperature and humidity sensor has an error. The chip may be faulty.",
	"0703010000010001":
		"The AMS4 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"0702300000010001": "The RFID board between AMS3 Slot1 & Slot2 has an error.",
	"0702300000010004": "Encryption chip failure.",
	"0702010000020002":
		"The AMS3 assist motor is overloaded. The filament may be tangled or stuck.",
	"0702020000010001":
		"AMS3 Filament speed and length error: The filament odometry may be faulty.",
	"0702100000010001":
		"The AMS3 slot1 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0702100000010003":
		"The AMS3 slot1 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0702100000020002":
		"The AMS3 slot1 motor is overloaded. The filament may be tangled or stuck.",
	"0702110000010001":
		"The AMS3 slot2 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0702110000010003":
		"The AMS3 slot2 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0702110000020002":
		"The AMS3 slot2 motor is overloaded. The filament may be tangled or stuck.",
	"0702120000010001":
		"The AMS3 slot3 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0702120000010003":
		"The AMS3 slot3 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0702120000020002":
		"The AMS3 slot3 motor is overloaded. The filament may be tangled or stuck.",
	"0702130000010001":
		"The AMS3 slot4 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0702130000010003":
		"The AMS3 slot4 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0702130000020002":
		"The AMS3 slot4 motor is overloaded. The filament may be tangled or stuck.",
	"0701310000010001": "The RFID board between AMS2 Slot3 & Slot4 has an error.",
	"0701310000010004": "Encryption chip failure.",
	"0701310000030003":
		"RFID cannot be read because of a hardware or structural error.",
	"0701350000010001":
		"The temperature and humidity sensor has an error. The chip may be faulty.",
	"0702010000010001":
		"The AMS3 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"0702010000010003":
		"The AMS3 assist motor torque control is malfunctioning. The current sensor may be faulty.",
	"0702010000010004":
		"The AMS3 assist motor speed control is malfunctioning. The speed sensor may be faulty.",
	"0701300000010001": "The RFID board between AMS2 Slot1 & Slot2 has an error.",
	"0701300000010004": "Encryption chip failure.",
	"0701300000030003":
		"RFID cannot be read because of a hardware or structural error.",
	"0701010000020002":
		"The AMS2 assist motor is overloaded. The filament may be tangled or stuck.",
	"0701020000010001":
		"AMS2 Filament speed and length error: The filament odometry may be faulty.",
	"0701100000010001":
		"The AMS2 slot1 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0701100000010003":
		"The AMS2 slot1 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0701100000020002":
		"The AMS2 slot1 motor is overloaded. The filament may be tangled or stuck.",
	"0701110000010001":
		"The AMS2 slot2 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0701110000010003":
		"The AMS2 slot2 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0701110000020002":
		"The AMS2 slot2 motor is overloaded. The filament may be tangled or stuck.",
	"0701120000010001":
		"The AMS2 slot3 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0701120000010003":
		"The AMS2 slot3 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0701120000020002":
		"The AMS2 slot3 motor is overloaded. The filament may be tangled or stuck.",
	"0701130000010001":
		"The AMS2 slot4 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0701130000010003":
		"The AMS2 slot4 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0701130000020002":
		"The AMS2 slot4 motor is overloaded. The filament may be tangled or stuck.",
	"0700310000010004": "Encryption chip failure.",
	"0700310000030003":
		"RFID cannot be read because of a hardware or structural error.",
	"0700350000010001":
		"The temperature and humidity sensor has an error. The chip may be faulty.",
	"0700400000020001":
		"The filament buffer position signal lost: the cable or position sensor may be malfunctioning.",
	"0700400000020002":
		"The filament buffer position signal error: the position sensor may be malfunctioning.",
	"0700400000020003":
		"The AMS Hub communication is abnormal, the cable may be not well connected.",
	"0700450000020002":
		"The filament cutter's cutting distance is too large. The XY motor may lose steps.",
	"0700450000020003":
		"The filament cutter handle has not released. The handle or blade may be stuck.",
	"0701010000010001":
		"The AMS2 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"0701010000010003":
		"The AMS2 assist motor torque control is malfunctioning. The current sensor may be faulty.",
	"0701010000010004":
		"The AMS2 assist motor speed control is malfunctioning. The speed sensor may be faulty.",
	"0700300000010001": "The RFID board between AMS1 Slot1 & Slot2 has an error.",
	"0700300000010004": "Encryption chip failure.",
	"0700300000030003":
		"RFID cannot be read because of a hardware or structural error.",
	"0700310000010001": "The RFID board between AMS1 Slot3 & Slot4 has an error.",
	"0700020000010001":
		"AMS1 Filament speed and length error: The filament odometry may be faulty.",
	"0700100000010001":
		"The AMS1 slot1 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0700100000010003":
		"The AMS1 slot1 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0700100000020002":
		"The AMS1 slot1 motor is overloaded. The filament may be tangled or stuck.",
	"0700110000010001":
		"The AMS1 slot2 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0700110000010003":
		"The AMS1 slot2 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0700110000020002":
		"The AMS1 slot2 motor is overloaded. The filament may be tangled or stuck.",
	"0700120000010001":
		"The AMS1 slot3 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0700120000010003":
		"The AMS1 slot3 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0700120000020002":
		"The AMS1 slot3 motor is overloaded. The filament may be tangled or stuck.",
	"0700130000010001":
		"The AMS1 slot4 motor has slipped. The extrusion wheel may be malfunctioning, or the filament may be too thin.",
	"0700130000010003":
		"The AMS1 slot4 motor torque control is malfunctioning. The current sensor may be faulty.",
	"0700130000020002":
		"The AMS1 slot4 motor is overloaded. The filament may be tangled or stuck.",
	"0500030000010009":
		"A system hang occurred. It has been recovered by automatic restart.",
	"050003000002000d": "The SD Card controller is malfunctioning.",
	"0500030000030007":
		"A system panic occurred. It has been recovered by automatic restart.",
	"0500040000010001":
		"Failed to download print job. Please check your network connection.",
	"0500040000010002":
		"Failed to report print state. Please check your network connection.",
	"0500040000010003":
		"The content of print file is unreadable. Please resend the print job.",
	"0500040000010004": "The print file is unauthorized.",
	"0500040000010006": "Failed to resume previous print.",
	"0700010000010001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"0700010000010003":
		"The AMS1 assist motor torque control is malfunctioning. The current sensor may be faulty.",
	"0700010000010004":
		"The AMS1 assist motor speed control is malfunctioning. The speed sensor may be faulty.",
	"0700010000020002":
		"The AMS1 assist motor is overloaded. The filament may be tangled or stuck.",
	"0500030000010002":
		"The toolhead is malfunctioning. Please restart the device.",
	"0500030000010003":
		"The AMS module is malfunctioning. Please restart the device.",
	"0500030000010005":
		"Internal service is malfunctioning. Please restart the device.",
	"0500030000010006": "A system panic occurred. Please restart the device.",
	"0500030000010008": "A system hang occurred. Please restart the device.",
	"0300120000020001": "The front cover of the toolhead fell off.",
	"0500010000020001": "The media pipeline is malfunctioning.",
	"0500010000020003": "USB camera is malfunctioning.",
	"03000D0000010002":
		"Heatbed homing failed. The environmental vibration is too great.",
	"03000D0000010003":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000010004":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000010005":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000010006":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000010007":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000010008":
		"The build plate is not placed properly. Please adjust it.",
	"03000D0000010009":
		"The build plate is not placed properly. Please adjust it.",
	"03000D000001000A":
		"The build plate is not placed properly. Please adjust it.",
	"0300010000010001":
		"The heatbed temperature is abnormal; the heater may have a short circuit.",
	"0300010000010002":
		"The heatbed temperature is abnormal; the heater may have an open circuit, or the thermal switch may be open.",
	"0300010000010003":
		"The heatbed temperature is abnormal; the heater is over temperature.",
	"0300020000010001":
		"The nozzle temperature is abnormal; the heater may have a short circuit.",
	"0300020000010002":
		"The nozzle temperature is abnormal; the heater may have an open circuit.",
	"0300020000010003":
		"The nozzle temperature is abnormal; the heater is over temperature.",
	"0300050000010001":
		"The motor driver is overheating. Its radiator may be loose, or its cooling fan may be damaged.",
	"0300010000010006":
		"The heatbed temperature is abnormal; the sensor may have a short circuit.",
	"0300010000010007":
		"The heatbed temperature is abnormal; the sensor may have an open circuit.",
	"0300020000010007":
		"The nozzle temperature is abnormal; the sensor may have an open circuit.",
};
