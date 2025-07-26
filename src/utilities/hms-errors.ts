/**
 * Mapping of HMS error codes to human-readable messages.
 */
export const hmsErrors: Record<string, string> = {
	"0300-0100-0001-0003":
		"The heatbed temperature is abnormal; the heater is over temperature.",
	"0300-1000-0002-0001":
		"The 1st order mechanical resonance mode of X axis is low.",
	"0300-1100-0002-0001":
		"The 1st order mechanical resonance mode of X axis is low.",
	"0300-1000-0002-0002":
		"The resonance frequency of the X axis differs greatly from last calibration. Please clean the carbon rod and rerun the machine calibration afterward.",
	"0300-1100-0002-0002":
		"The resonance frequency of the X axis differs greatly from last calibration. Please clean the carbon rod and rerun the machine calibration afterward.",
	"0300-0200-0001-0009":
		"The right nozzle temperature control is abnormal. The hot end may not be installed. To heat the heating assembly without the hotend, enable Maintenance Mode in the settings.",
	"0300-0300-0001-0001": "The hotend cooling fan speed is too slow or stopped",
	"0300-0300-0002-0002": "The speed of hotend fan is slow.",
	"0300-0400-0002-0001":
		"The speed of the part cooling fan is too slow or stopped. It may be stuck, or the connector may not be plugged in properly.",
	"0300-0600-0001-0001":
		"Motor-A has an open-circuit. There may be a loose connection, or the motor may have failed.",
	"0300-0700-0001-0001":
		"Motor-A has an open-circuit. There may be a loose connection, or the motor may have failed.",
	"0300-0800-0001-0001":
		"Motor-A has an open-circuit. There may be a loose connection, or the motor may have failed.",
	"0300-0600-0001-0002": "Motor-A has a short-circuit. It may have failed.",
	"0300-0700-0001-0002": "Motor-A has a short-circuit. It may have failed.",
	"0300-0800-0001-0002": "Motor-A has a short-circuit. It may have failed.",
	"0300-0600-0001-0003":
		"The resistance of Motor-A is abnormal, the motor may have failed.",
	"0300-0700-0001-0003":
		"The resistance of Motor-A is abnormal, the motor may have failed.",
	"0300-0800-0001-0003":
		"The resistance of Motor-A is abnormal, the motor may have failed.",
	"0300-0100-0001-0007":
		"The heatbed temperature is abnormal; the sensor may have an open circuit.",
	"0300-0100-0001-0006":
		"The heatbed temperature is abnormal; the sensor may have an short circuit.",
	"0300-1300-0001-0001":
		"The current sensor of Motor-A is abnormal. This may be caused by a failure of the hardware sampling circuit.",
	"0300-1400-0001-0001":
		"The current sensor of Motor-A is abnormal. This may be caused by a failure of the hardware sampling circuit.",
	"0300-1500-0001-0001":
		"The current sensor of Motor-A is abnormal. This may be caused by a failure of the hardware sampling circuit.",
	"0300-1800-0001-0005":
		"The Z axis motor seems got stuck during movement, please check if there is any foreign matter on the Z sliders or Z timing belt wheels.",
	"0300-1900-0001-0001":
		"The eddy current sensor on Y-axis is not available, the wire should be broken.",
	"0300-1900-0002-0002":
		"The sensitivity of Y-axis eddy current sensor is too low.",
	"0300-3100-0001-0001":
		"The speed of part cooling fan is too slow or stopped.",
	"0300-3100-0002-0002":
		"The speed of part cooling fan is too slow or stopped.",
	"0300-4000-0002-0001":
		"Data transmission over the serial port is abnormal; the software system may be faulty.",
	"0300-4100-0001-0001":
		"The system voltage is unstable; triggering the power failure protection function.",
	"0300-0100-0001-0008":
		"An abnormality occurs during the heating process of the heatbed. The heating modules may be broken.",
	"0300-0100-0003-0008":
		"The temperature of the heated bed exceeds the limit and automatically adjusts to the limit temperature.",
	"0300-9000-0001-0001":
		"Chamber heating failed. The chamber heater may be failing to blow hot air.",
	"0300-9000-0001-0002":
		"Chamber heating failed. The chamber may not be enclosed, or the ambient temperature may be too low, or the heat dissipation vent of the power supply may be blocked.",
	"0300-9000-0001-0003":
		"Chamber heating failed. The temperature of power supply may be too high.",
	"0300-9000-0001-0004":
		"Chamber heating failed. The speed of the heating fan is too low.",
	"0300-9000-0001-0005":
		"Chamber heating failed. The thermal resistance is too high.",
	"0300-9100-0001-0008":
		"Chamber heater 1 failed to rise to target temperature.",
	"0300-9200-0001-0008":
		"Chamber heater 1 failed to rise to target temperature.",
	"0300-9100-0001-0003":
		"The temperature of chamber heater 1 is abnormal. The heater is over temperature.",
	"0300-9200-0001-0003":
		"The temperature of chamber heater 1 is abnormal. The heater is over temperature.",
	"0300-9100-0001-0001":
		"The temperature of chamber heater 1 is abnormal. The heater may have a short circuit.",
	"0300-9200-0001-0001":
		"The temperature of chamber heater 1 is abnormal. The heater may have a short circuit.",
	"0300-9100-0001-0002":
		"The temperature of chamber heater 1 is abnormal. The heater may have an open circuit or the thermal fuse may have taken effect.",
	"0300-9200-0001-0002":
		"The temperature of chamber heater 1 is abnormal. The heater may have an open circuit or the thermal fuse may have taken effect.",
	"0300-9100-0001-0006":
		"The temperature of chamber heater 1 is abnormal. The sensor may have a short circuit.",
	"0300-9200-0001-0006":
		"The temperature of chamber heater 1 is abnormal. The sensor may have a short circuit.",
	"0300-9100-0001-0007":
		"The temperature of chamber heater 1 is abnormal. The sensor may have an open circuit.",
	"0300-9200-0001-0007":
		"The temperature of chamber heater 1 is abnormal. The sensor may have an open circuit.",
	"0300-9300-0001-0003":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor at the air outlet may have a short circuit.",
	"0300-9300-0001-0004":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor at the air outlet may have an open circuit.",
	"0300-9300-0001-0007":
		"Chamber temperature is abnormal. The temperature sensor at the power supply may have a short circuit.",
	"0300-9300-0001-0008":
		"Chamber temperature is abnormal. The temperature sensor at power supply may have an open circuit.",
	"0300-9300-0001-0001":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor may have a short circuit.",
	"0300-9300-0001-0002":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor may have an open circuit.",
	"0300-9300-0001-0005":
		"Chamber temperature is abnormal. The chamber heater's temperature sensor at the air inlet may have a short circuit.",
	"0300-9300-0001-0006":
		"Chamber temperature is abnormal. The chamber temperature sensor at the air inlet may have an open circuit.",
	"0300-9400-0002-0003":
		"Chamber failed to reach the desired temperature. The machine will stop waiting for the chamber temperature.",
	"0300-9400-0003-0001":
		"Chamber cooling may be too slow. You can open the chamber to help cooling if the gas in chamber is non-toxic.",
	"0300-1800-0001-0006":
		"The heatbed leveling data is abnormal. Please check whether there are any foreign objects on the heatbed and Z slider. If so, please remove them and try again.",
	"0300-2500-0001-0005":
		"Z axis motor rotation is obstructed; please check if there are foreign objects stuck in the Z slider or Z timing pulley.",
	"0300-2600-0001-0005":
		"Z axis motor rotation is obstructed; please check if there are foreign objects stuck in the Z slider or Z timing pulley.",
	"0300-2900-0001-0001":
		"Encoder pattern can not be recognized; possible reasons include: pattern distortion, light overexposure, plate misplacement.",
	"0300-0200-0001-0001":
		"The right nozzle temperature is abnormal; the heater may have a short circuit.",
	"0300-0200-0001-0002":
		"The right nozzle temperature is abnormal; the heater may have an open circuit.",
	"0300-0200-0001-0003":
		"The right nozzle temperature is abnormal; the heater is over temperature.",
	"0300-0200-0001-0006":
		"The right nozzle temperature is abnormal; the sensor may have a short circuit, please check whether the connector is properly plugged in.",
	"0300-0200-0001-0007":
		"The right nozzle temperature is abnormal; the sensor may have an open circuit.",
	"0300-1200-0002-0001": "The front cover of the toolhead fell off.",
	"0300-1800-0001-0001":
		"The value of extrusion force sensor is low, the nozzle seems to not be installed.",
	"0300-1800-0001-0002":
		"The sensitivity of the extrusion force sensor is low, the hotend may not installed correctly.",
	"0300-1800-0001-0003":
		"The extrusion force sensor is not available, the link between the MC and TH may be broken or the sensor is broken.",
	"0300-1800-0001-0004":
		"The data from extrusion force sensor is abnormal, the sensor should be broken.",
	"0300-0900-0001-0001":
		"The extruder servo motor has an open circuit. The connection may be loose, or the motor may have failed.",
	"0300-0900-0001-0002":
		"The extruder servo motor has a short-circuit. It may have failed.",
	"0300-0900-0001-0003":
		"The resistance of the extruder servo motor is abnormal; the motor may have failed.",
	"0300-0900-0002-0001":
		"The extrusion motor is overloaded. The extruder may be clogged or the filament may be stuck in the tool head.",
	"0300-0900-0002-0002":
		"The extrusion resistance is abnormal. The extruder may be clogged or there may be filament stuck in the toolhead.",
	"0300-0900-0002-0003":
		"The extruder is extruding abnormally. It may be clogged, or the filament may be too thin, causing the extruder to slip.",
	"0300-2500-0001-0001":
		"The frequency of the extrusion force sensor of the right extruder is too low. The nozzle may not be installed, or the nozzle heat sink may be too far away from the sensor.",
	"0300-2500-0001-0002":
		"The sensitivity of the right extruder extrusion force sensor is low; the nozzle may not installed correctly.",
	"0300-2500-0001-0003":
		"Unable to read data from the right extruder force sensor; there may be a communication break or sensor damage.",
	"0300-2600-0001-0003":
		"Unable to read data from the right extruder force sensor; there may be a communication break or sensor damage.",
	"0300-2500-0001-0004":
		"The signal of the extrusion force sensor of the right extruder is abnormal. The sensor may be damaged, or the MC-TH communication may be abnormal.",
	"0300-2600-0001-0004":
		"The signal of the extrusion force sensor of the right extruder is abnormal. The sensor may be damaged, or the MC-TH communication may be abnormal.",
	"0300-2500-0001-0007":
		"The frequency of the extrusion force sensor of the right extruder is too high. The sensor may be damaged, or the nozzle heat sink may be too close to the sensor.",
	"0300-2500-0001-0008":
		"The right nozzle touches the heating bed abnormally. Please check whether there is filament residue on the nozzle or foreign matter where the nozzle touches the bed.",
	"0300-2600-0001-0008":
		"The right nozzle touches the heating bed abnormally. Please check whether there is filament residue on the nozzle or foreign matter where the nozzle touches the bed.",
	"0300-2600-0001-0001":
		"The frequency of the extrusion force sensor of the left extruder is too low. The sensor may be installed too far, or the sensor may be loose.",
	"0300-2600-0001-0002":
		"The sensitivity of the left extruder extrusion force sensor is low; the force sensor may not be installed correctly.",
	"0300-2600-0001-0007":
		"The frequency of the extrusion force sensor of the left extruder is too high. The sensor may be installed too close, or the sensor may be loose.",
	"0300-2700-0001-0001":
		"The nozzle offset calibration sensor frequency is too low. The sensor may be damaged.",
	"0300-2700-0001-0004":
		"The signal of the nozzle offset calibration sensor is abnormal. The sensor may be damaged, or the wiring may not be connected properly.",
	"0300-2700-0001-0007":
		"The nozzle offset calibration sensor frequency is too high. The sensor may be damaged.",
	"0300-9600-0001-0001":
		"The front door seems to be open; the task has been paused.",
	"0300-9600-0001-0002":
		"The front door Hall sensor (Upper) is abnormal; please check whether the connection wire is loose.",
	"0300-9600-0001-0003":
		"The front door Hall sensor (Upper) is abnormal; please check whether the connection wire is loose.",
	"0300-9700-0001-0001":
		"The top cover seems to be open; the task has been paused.",
	"0300-9700-0001-0002":
		"The top cover Hall sensor (Front Right) is abnormal; please check whether the connection wire is loose.",
	"0300-9700-0001-0003":
		"The top cover Hall sensor (Front Right) is abnormal; please check whether the connection wire is loose.",
	"0300-9800-0001-0002":
		"The left side window Hall sensor (Upper) is abnormal; please check whether the connection wire is loose.",
	"0300-9800-0001-0003":
		"The left side window Hall sensor (Upper) is abnormal; please check whether the connection wire is loose.",
	"0300-9900-0001-0002":
		"The right side window Hall sensor (Lower) is abnormal; please check whether the connection wire is loose.",
	"0300-9900-0001-0003":
		"The right side window Hall sensor (Lower) is abnormal; please check whether the connection wire is loose.",
	"0500-0100-0002-0001":
		"The media pipeline is malfunctioning. Please restart the printer. If multiple attempts fail, please contact customer support.",
	"0500-0100-0002-0002": "USB camera is not connected.",
	"0500-0100-0002-0003": "USB camera is malfunctioning.",
	"0500-0100-0003-0004": "Not enough space in SD Card.",
	"0500-0100-0003-0005": "Error in SD Card.",
	"0500-0100-0003-0006":
		"The USB drive is not formatted or cannot be written; please format the USB drive.",
	"0500-0200-0002-0001":
		"Failed to connect internet, please check the network connection.",
	"0500-0200-0002-0002": "Failed to login device.",
	"0500-0200-0002-0003":
		"Failed to connect internet, please check the network connection.",
	"0500-0200-0002-0005":
		"Failed to connect internet, please check the network connection.",
	"0500-0200-0002-0004": "Unauthorized user.",
	"0500-0200-0002-0006": "Liveview service is malfunctioning.",
	"0500-0200-0002-0008": "Time synchronization failed.",
	"0500-0300-0001-0001":
		"The MC module is malfunctioning; please restart the device or check device cable connection.",
	"0500-0300-0001-0002":
		"The toolhead is malfunctioning. Please restart the device.",
	"0500-0300-0001-0003":
		"The AMS module is malfunctioning. Please restart the device.",
	"0500-0300-0001-0021": "Hardware incompatible, please check the laser.",
	"0500-0400-0001-0001":
		"Failed to download print job. Please check your network connection.",
	"0500-0400-0001-0002":
		"Failed to report print state. Please check your network connection.",
	"0500-0400-0001-0003":
		"The content of print file is unreadable. Please resend the print job.",
	"0500-0400-0001-0004": "The print file is unauthorized.",
	"0500-0400-0001-0006": "Failed to resume previous print.",
	"0500-0400-0002-0007":
		"The bed temperature exceeds the filament's vitrification temperature, which may cause a nozzle clog.",
	"0500-0500-0001-0007":
		"MQTT Command verification failed, please update Studio or Handy.",
	"0500-0400-0001-0051":
		"Emergency Stop Button is not in the right position. Please follow the Wiki to install it.",
	"0500-0400-0001-0052":
		"Safety Key is not inserted. Please follow the Wiki to install it.",
	"0500-0400-0002-0030":
		"The BirdsEye Camera is not installed. Please power off printer and then install the camera.",
	"0500-0400-0002-0031":
		"Before using a Laser/Cutting Module, the pose of the BirdsEye Camera needs to be determined. Please complete the setup to calibrate the camera.",
	"0500-0400-0002-0032":
		"Please slide in Laser Module and lock the quick-release lever.",
	"0500-0400-0002-0033": "Please plug in the module connector.",
	"0500-0400-0002-0034":
		"Laser module detected for the first time. Complete the setup (~4 min) before use for precise cutting and engraving. Also, ensure the H2.0 screw at the back securing the air pump is removed.",
	"0500-0400-0002-0035":
		"The Laser Module needs calibration to get the focus position. Please perform mounting calibration before use. (about 2 minutes)",
	"0500-0400-0002-0037":
		"The Cutting Module needs calibration to get the tool position. Please perform the mounting calibration before use. (about 2-4 minutes)",
	"0500-0400-0002-0038":
		"Please slide in cutting module and fasten the quick release lever. If already installed, the module might not be properly aligned. Please try reinstalling it.",
	"0500-0400-0002-0041":
		"The laser module has been used for a long time. Please clean it promptly to avoid affecting laser processing.",
	"0500-0400-0002-0042":
		"The Live View Camera is dirty or obstructed; please clean it and continue.",
	"0500-0400-0002-0050": "Laser Safety Window is not installed.",
	"0500-0600-0002-0001":
		"The Toolhead Camera is not in place; please check the hardware connection.",
	"0500-0600-0002-0002":
		"The Nozzle Camera is not in place; please check the hardware connection.",
	"0500-0600-0002-0004":
		"The Live View camera is not in place; please check the hardware connection.",
	"0500-0600-0002-0031":
		"ToolHead Camera is not connected. Please check the hardware and cable connections.",
	"0500-0600-0002-0032":
		"Nozzle Camera is not connected. Please check the hardware and cable connections.",
	"0700-0100-0001-0001":
		"The AMS assist motor has slipped.The extrusion wheel may be worn down,or the filament may be too thin.",
	"0700-0100-0001-0003":
		"The AMS assist motor torque control is malfunctioning.The current sensor may be faulty.",
	"0700-0100-0001-0004":
		"The AMS assist motor speed control is malfunctioning.The speed sensor may be faulty.",
	"0700-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"0701-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"0702-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"0703-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"0700-0200-0001-0001":
		"AMS filament speed and length error.The filament odometry may be faulty.",
	"0700-1000-0001-0001": "The AMS slot1 motor has slipped.The",
	"0700-1000-0001-0003":
		"The AMS slot1 motor torque control is malfunctioning.The current sensor may be faulty.",
	"0700-1000-0002-0002":
		"The AMS slot1 motor is overloaded.The filament may be tangled or stuck.",
	"0700-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0700-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0700-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0700-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0701-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0701-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0701-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0701-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0702-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0702-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0702-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0702-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0703-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0703-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0703-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0703-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0704-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0704-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0704-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0704-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0705-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0705-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0705-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0705-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0706-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0706-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0706-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0706-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0707-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0707-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0707-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0707-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1800-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1800-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1800-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1800-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1801-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1801-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1801-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1801-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1802-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1802-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1802-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1802-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1803-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1803-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1803-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1803-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1804-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1804-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1804-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1804-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1805-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1805-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1805-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1805-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1806-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1806-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1806-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1806-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1807-2000-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1807-2100-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1807-2200-0002-0001": "AMS1 Slot 1 filament has run out.",
	"1807-2300-0002-0001": "AMS1 Slot 1 filament has run out.",
	"0700-2000-0002-0002": "The AMS Slot 1 is empty.",
	"0700-2100-0002-0002": "The AMS Slot 1 is empty.",
	"0700-2200-0002-0002": "The AMS Slot 1 is empty.",
	"0700-2300-0002-0002": "The AMS Slot 1 is empty.",
	"0701-2000-0002-0002": "The AMS Slot 1 is empty.",
	"0701-2100-0002-0002": "The AMS Slot 1 is empty.",
	"0701-2200-0002-0002": "The AMS Slot 1 is empty.",
	"0701-2300-0002-0002": "The AMS Slot 1 is empty.",
	"0702-2000-0002-0002": "The AMS Slot 1 is empty.",
	"0702-2100-0002-0002": "The AMS Slot 1 is empty.",
	"0702-2200-0002-0002": "The AMS Slot 1 is empty.",
	"0702-2300-0002-0002": "The AMS Slot 1 is empty.",
	"0703-2000-0002-0002": "The AMS Slot 1 is empty.",
	"0703-2100-0002-0002": "The AMS Slot 1 is empty.",
	"0703-2200-0002-0002": "The AMS Slot 1 is empty.",
	"0703-2300-0002-0002": "The AMS Slot 1 is empty.",
	"0704-2000-0002-0002": "The AMS Slot 1 is empty.",
	"0704-2100-0002-0002": "The AMS Slot 1 is empty.",
	"0704-2200-0002-0002": "The AMS Slot 1 is empty.",
	"0704-2300-0002-0002": "The AMS Slot 1 is empty.",
	"0705-2000-0002-0002": "The AMS Slot 1 is empty.",
	"0705-2100-0002-0002": "The AMS Slot 1 is empty.",
	"0705-2200-0002-0002": "The AMS Slot 1 is empty.",
	"0705-2300-0002-0002": "The AMS Slot 1 is empty.",
	"0706-2000-0002-0002": "The AMS Slot 1 is empty.",
	"0706-2100-0002-0002": "The AMS Slot 1 is empty.",
	"0706-2200-0002-0002": "The AMS Slot 1 is empty.",
	"0706-2300-0002-0002": "The AMS Slot 1 is empty.",
	"0707-2000-0002-0002": "The AMS Slot 1 is empty.",
	"0707-2100-0002-0002": "The AMS Slot 1 is empty.",
	"0707-2200-0002-0002": "The AMS Slot 1 is empty.",
	"0707-2300-0002-0002": "The AMS Slot 1 is empty.",
	"1800-2000-0002-0002": "The AMS Slot 1 is empty.",
	"1800-2100-0002-0002": "The AMS Slot 1 is empty.",
	"1800-2200-0002-0002": "The AMS Slot 1 is empty.",
	"1800-2300-0002-0002": "The AMS Slot 1 is empty.",
	"1801-2000-0002-0002": "The AMS Slot 1 is empty.",
	"1801-2100-0002-0002": "The AMS Slot 1 is empty.",
	"1801-2200-0002-0002": "The AMS Slot 1 is empty.",
	"1801-2300-0002-0002": "The AMS Slot 1 is empty.",
	"1802-2000-0002-0002": "The AMS Slot 1 is empty.",
	"1802-2100-0002-0002": "The AMS Slot 1 is empty.",
	"1802-2200-0002-0002": "The AMS Slot 1 is empty.",
	"1802-2300-0002-0002": "The AMS Slot 1 is empty.",
	"1803-2000-0002-0002": "The AMS Slot 1 is empty.",
	"1803-2100-0002-0002": "The AMS Slot 1 is empty.",
	"1803-2200-0002-0002": "The AMS Slot 1 is empty.",
	"1803-2300-0002-0002": "The AMS Slot 1 is empty.",
	"1804-2000-0002-0002": "The AMS Slot 1 is empty.",
	"1804-2100-0002-0002": "The AMS Slot 1 is empty.",
	"1804-2200-0002-0002": "The AMS Slot 1 is empty.",
	"1804-2300-0002-0002": "The AMS Slot 1 is empty.",
	"1805-2000-0002-0002": "The AMS Slot 1 is empty.",
	"1805-2100-0002-0002": "The AMS Slot 1 is empty.",
	"1805-2200-0002-0002": "The AMS Slot 1 is empty.",
	"1805-2300-0002-0002": "The AMS Slot 1 is empty.",
	"1806-2000-0002-0002": "The AMS Slot 1 is empty.",
	"1806-2100-0002-0002": "The AMS Slot 1 is empty.",
	"1806-2200-0002-0002": "The AMS Slot 1 is empty.",
	"1806-2300-0002-0002": "The AMS Slot 1 is empty.",
	"1807-2000-0002-0002": "The AMS Slot 1 is empty.",
	"1807-2100-0002-0002": "The AMS Slot 1 is empty.",
	"1807-2200-0002-0002": "The AMS Slot 1 is empty.",
	"1807-2300-0002-0002": "The AMS Slot 1 is empty.",
	"0700-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0700-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0700-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0700-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0701-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0701-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0701-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0701-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0702-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0702-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0702-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0702-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0703-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0703-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0703-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0703-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0704-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0704-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0704-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0704-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0705-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0705-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0705-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0705-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0706-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0706-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0706-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0706-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0707-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0707-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0707-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0707-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1800-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1800-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1800-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1800-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1801-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1801-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1801-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1801-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1802-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1802-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1802-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1802-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1803-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1803-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1803-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1803-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1804-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1804-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1804-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1804-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1805-2000-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1805-2100-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1805-2200-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"1805-2300-0002-0003": "The AMS A Slot 1 filament may be broken in AMS.",
	"0700-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0700-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0700-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0700-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0701-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0701-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0701-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0701-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0702-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0702-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0702-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0702-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0703-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0703-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0703-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0703-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0704-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0704-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0704-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0704-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0705-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0705-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0705-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0705-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0706-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0706-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0706-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0706-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0707-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0707-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0707-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0707-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1800-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1800-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1800-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1800-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1801-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1801-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1801-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1801-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1802-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1802-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1802-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1802-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1803-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1803-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1803-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1803-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1804-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1804-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1804-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1804-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1805-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1805-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1805-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1805-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1806-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1806-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1806-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1806-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1807-2000-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1807-2100-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1807-2200-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"1807-2300-0002-0004":
		"The AMS A Slot 1 filament may be broken in the toolhead.",
	"0700-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0700-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0700-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0700-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0701-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0701-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0701-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0701-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0702-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0702-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0702-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0702-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0703-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0703-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0703-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0703-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0704-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0704-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0704-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0704-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0705-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0705-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0705-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0705-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0706-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0706-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0706-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0706-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0707-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0707-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0707-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0707-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1800-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1800-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1800-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1800-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1801-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1801-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1801-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1801-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1802-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1802-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1802-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1802-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1803-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1803-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1803-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1803-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1804-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1804-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1804-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1804-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1805-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1805-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1805-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1805-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1806-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1806-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1806-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1806-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1807-2000-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1807-2100-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1807-2200-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"1807-2300-0002-0005":
		"AMS A Slot 1 filament has run out, and purging the old filament went abnormally; please check whether the filament is stuck in the tool head.",
	"0700-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0700-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0700-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0700-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0701-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0701-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0701-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0701-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0702-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0702-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0702-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0702-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0703-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0703-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0703-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0703-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0704-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0704-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0704-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0704-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0705-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0705-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0705-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0705-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0706-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0706-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0706-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0706-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0707-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0707-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0707-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0707-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1800-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1800-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1800-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1800-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1801-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1801-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1801-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1801-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1802-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1802-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1802-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1802-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1803-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1803-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1803-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1803-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1804-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1804-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1804-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1804-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1805-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1805-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1805-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1805-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1806-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1806-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1806-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1806-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1807-2000-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1807-2100-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1807-2200-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"1807-2300-0002-0006":
		"PTFE tube detached during the feeding process. Please check if the PTFE tube is connected from AMS to extruder.",
	"0700-2000-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0700-2100-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0700-2200-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0700-2300-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0701-2000-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0701-2100-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0701-2200-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0701-2300-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0702-2000-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0702-2100-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0702-2200-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0702-2300-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0703-2000-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0703-2100-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0703-2200-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0703-2300-0003-0001":
		"AMS1 Slot1 filament has run out. Please wait while old filament is purged.",
	"0700-2000-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0700-2100-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0700-2200-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0700-2300-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0701-2000-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0701-2100-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0701-2200-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0701-2300-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0702-2000-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0702-2100-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0702-2200-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0702-2300-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0703-2000-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0703-2100-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0703-2200-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0703-2300-0003-0002":
		"AMS1 Slot1 filament has run out and automatically switched to the slot with the same filament.",
	"0700-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"0701-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"0702-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"0703-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"1800-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"1801-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"1802-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"1803-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"1804-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"1805-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"1806-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"1807-2500-0002-0001":
		"Detected AMS A using printer power for drying during loading/printing. For better drying performance, please connect a power adapter.",
	"0700-4000-0002-0001":
		"The filament buffer signal lost,the cable or position sensor may be malfunctioning.",
	"0700-4000-0002-0002":
		"The filament buffer position signal error,the position sensor may be malfunctioning.",
	"0700-4000-0002-0003":
		"The AMS Hub communication is abnormal,the cable may be not well connected.",
	"0700-4000-0002-0004":
		"The filament buffer signal is abnormal; the spring may be stuck, or the filament may be tangled.",
	"0700-4500-0002-0001":
		"The filament cutter sensor is malfunctioning.The sensor may be disconected or damaged.",
	"0700-4500-0002-0002":
		"The filament cutter's cutting distance is too large.The XY motor may lose steps.",
	"0700-4500-0002-0003":
		"The filament cutter handle has not been released. The handle or blade may be jammed, or there could be an issue with the filament sensor connection.",
	"1200-4500-0002-0003":
		"The filament cutter handle has not been released. The handle or blade may be jammed, or there could be an issue with the filament sensor connection.",
	"0700-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"0701-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"0702-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"0703-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1800-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1801-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1802-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1803-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1804-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1805-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1806-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1807-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1200-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1201-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1202-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"1203-5000-0002-0001":
		"AMS A communication is abnormal; please check the connection cable.",
	"0700-5100-0003-0001":
		"The AMS is disabled; please load filament from spool holder.",
	"0700-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"0701-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"0702-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"0703-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"1800-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"1801-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"1802-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"1803-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"1804-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"1805-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"1806-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"1807-5500-0001-0002":
		"Incorrect connection order of PTFE tubes between the toolhead and the buffer. Please ensure: the upper part of the buffer is connected to the right extruder, and the lower part is connected to the left extruder.",
	"0700-5500-0002-0001":
		"A new AMS detected. Please set it up to check which extruder the AMS is connected to.",
	"1800-5500-0002-0001":
		"A new AMS detected. Please set it up to check which extruder the AMS is connected to.",
	"0700-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"0701-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"0702-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"0703-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"0704-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"0705-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"0706-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"0707-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"1800-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"1801-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"1802-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"1803-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"1804-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"1805-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"1806-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"1807-5500-0001-0004":
		"The binding between AMS A and the extruder is incorrect. Please run the AMS Setup.",
	"0700-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700-7000-0002-0001":
		"Failed to pull out the filament from the extruder. Please check whether the extruder is clogged or whether the filament is broken inside the extruder.",
	"0700-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701-7000-0002-0001":
		"Failed to pull out the filament from the extruder. Please check whether the extruder is clogged or whether the filament is broken inside the extruder.",
	"0701-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702-7000-0002-0001":
		"Failed to pull out the filament from the extruder. Please check whether the extruder is clogged or whether the filament is broken inside the extruder.",
	"0702-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703-7000-0002-0001":
		"Failed to pull out the filament from the extruder. Please check whether the extruder is clogged or whether the filament is broken inside the extruder.",
	"0703-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0704-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0704-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0704-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0705-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0705-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0705-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0705-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0706-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0706-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0706-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0706-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0707-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0707-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0707-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0707-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1800-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1800-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1800-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1800-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1801-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1801-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1801-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1801-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1802-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1802-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1802-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1802-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1803-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1803-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1803-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1803-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1804-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1804-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1804-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1804-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1805-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1805-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1805-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1805-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1806-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1806-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1806-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1806-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1807-7000-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1807-7100-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1807-7200-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1807-7300-0002-0001":
		"The AMS1 slot1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0700-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0700-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0700-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0701-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0701-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0701-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0701-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0702-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0702-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0702-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0702-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0703-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0703-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0703-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0703-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0704-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0704-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0704-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0705-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0705-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0705-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0705-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0706-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0706-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0706-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0706-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0707-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0707-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0707-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0707-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1800-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1800-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1800-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1800-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1801-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1801-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1801-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1801-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1802-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1802-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1802-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1802-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1803-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1803-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1803-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1803-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1805-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1805-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1805-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1805-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1806-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1806-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1806-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1806-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1807-7000-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1807-7100-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1807-7200-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"1807-7300-0002-0002":
		"Failed to feed the filament into the toolhead. Please check whether the filament or the spool is stuck.",
	"0700-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"0701-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"0702-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"0703-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"0704-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"0705-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"0706-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"0707-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"1800-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"1801-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"1802-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"1803-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"1804-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"1805-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"1806-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"1807-7000-0002-0003":
		"Failed to extrude the filament. Please check if the extruder or nozzle clogged.",
	"0700-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0700-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0700-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0700-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0701-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0701-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0701-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0701-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0702-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0702-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0702-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0702-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0703-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0703-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0703-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0703-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0704-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0704-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0704-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0704-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0705-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0705-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0705-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0705-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0706-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0706-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0706-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0706-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0707-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0707-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0707-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0707-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1800-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1800-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1800-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1800-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1801-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1801-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1801-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1801-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1802-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1802-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1802-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1802-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1803-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1803-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1803-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1803-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1804-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1804-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1804-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1804-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1805-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1805-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1805-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1805-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1806-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1806-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1806-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1806-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1807-7000-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1807-7100-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1807-7200-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"1807-7300-0002-0004":
		"Failed to pull back the filament from the toolhead to AMS. Please check whether the filament or the spool is stuck.",
	"0700-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0700-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0700-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0700-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0701-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0701-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0701-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0701-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0702-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0702-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0702-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0702-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0703-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0703-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0703-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0703-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0704-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0704-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0704-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0704-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0705-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0705-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0705-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0705-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0706-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0706-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0706-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0706-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0707-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0707-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0707-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0707-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1800-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1800-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1800-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1800-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1801-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1801-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1801-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1801-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1802-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1802-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1802-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1802-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1803-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1803-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1803-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1803-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1804-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1804-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1804-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1804-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1805-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1805-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1805-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1805-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1806-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1806-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1806-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1806-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1807-7000-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1807-7100-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1807-7200-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"1807-7300-0002-0005":
		"Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
	"0700-7000-0002-0006":
		"Timeout purging old filament. Please check if the filament is stuck or the extruder/nozzle is clogged.",
	"0701-7000-0002-0006":
		"Timeout purging old filament. Please check if the filament is stuck or the extruder/nozzle is clogged.",
	"0702-7000-0002-0006":
		"Timeout purging old filament. Please check if the filament is stuck or the extruder/nozzle is clogged.",
	"0703-7000-0002-0006":
		"Timeout purging old filament. Please check if the filament is stuck or the extruder/nozzle is clogged.",
	"0700-7000-0002-0007":
		'AMS filament ran out. Please put a new filament into AMS and click the "Retry" button.',
	"0701-7000-0002-0007":
		'AMS filament ran out. Please put a new filament into AMS and click the "Retry" button.',
	"0702-7000-0002-0007":
		'AMS filament ran out. Please put a new filament into AMS and click the "Retry" button.',
	"0703-7000-0002-0007":
		'AMS filament ran out. Please put a new filament into AMS and click the "Retry" button.',
	"0700-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"0701-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"0702-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"0703-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"0704-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"0705-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"0706-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"0707-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"1800-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"1801-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"1802-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"1803-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"1804-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"1805-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"1806-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"1807-7000-0002-0008":
		'Failed to get AMS mapping table; please click "Resume" to retry.',
	"1200-1000-0002-0002":
		"The AMS1 Slot1 motor is overloaded. The filament may be tangled or stuck.",
	"1200-1100-0002-0002":
		"The AMS1 Slot1 motor is overloaded. The filament may be tangled or stuck.",
	"1200-1200-0002-0002":
		"The AMS1 Slot1 motor is overloaded. The filament may be tangled or stuck.",
	"1200-1300-0002-0002":
		"The AMS1 Slot1 motor is overloaded. The filament may be tangled or stuck.",
	"1200-8000-0002-0001": "AMS1 Slot1 filament may be tangled or stuck.",
	"1200-8100-0002-0001": "AMS1 Slot1 filament may be tangled or stuck.",
	"1200-8200-0002-0001": "AMS1 Slot1 filament may be tangled or stuck.",
	"1200-8300-0002-0001": "AMS1 Slot1 filament may be tangled or stuck.",
	"0700-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"0701-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"0702-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"0703-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"0704-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"0705-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"0706-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"0707-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"1800-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"1801-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"1802-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"1803-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"1804-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"1805-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"1806-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"1807-0100-0001-0005":
		"AMS A The current sensor of assist motor may be faulty.",
	"0704-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"0705-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"0706-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"0707-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"1800-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"1801-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"1802-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"1803-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"1804-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"1805-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"1806-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"1807-0100-0002-0002":
		"The AMS A assist motor is overloaded. The filament may be tangled or stuck.",
	"0700-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"0701-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"0702-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"0703-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"0704-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"0705-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"0706-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"0707-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"1800-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"1801-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"1802-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"1803-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"1804-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"1805-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"1806-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"1807-0100-0002-0006":
		"AMS A The assist motor three-phase wires are not connected. The assist motor connector may have poor contact.",
	"0700-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"0701-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"0702-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"0703-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"0704-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"0705-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"0706-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"0707-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"1800-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"1801-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"1802-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"1803-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"1804-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"1805-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"1806-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"1807-0100-0002-0008":
		"AMS A The assist motor phase winding has an open circuit. The assist motor may be faulty.",
	"0700-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"0701-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"0702-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"0703-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"0704-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"0705-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"0706-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"0707-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"1800-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"1801-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"1802-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"1803-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"1804-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"1805-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"1806-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"1807-0100-0002-0009":
		"AMS A The assist motor has unbalanced tree-phase resistaance. The assist motor may be faulty.",
	"0700-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"0701-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"0702-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"0703-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"0704-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"0705-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"0706-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"0707-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"1800-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"1801-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"1802-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"1803-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"1804-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"1805-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"1806-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"1807-0100-0002-0010":
		"AMS A The assist motor resistance is abnormal. The assist motor may be faulty.",
	"0700-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"0701-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"0702-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"0703-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"0704-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"0705-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"0706-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"0707-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"1800-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"1801-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"1802-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"1803-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"1804-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"1805-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"1806-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"1807-0100-0002-0011":
		"AMS A The motor assist parameter is lost. Please pull out the filament from the filament hub and then restart the AMS.",
	"0700-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"0701-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"0702-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"0703-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"0704-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"0705-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"0706-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"0707-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"1800-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"1801-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"1802-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"1803-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"1804-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"1805-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"1806-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"1807-0200-0002-0002":
		"AMS A The odometer has no signal. The odometer connector may have poor contact.",
	"0700-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0700-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0700-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0700-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0701-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0701-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0701-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0701-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0702-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0702-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0702-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0702-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0703-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0703-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0703-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0703-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0704-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0704-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0704-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0704-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0705-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0705-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0705-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0705-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0706-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0706-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0706-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0706-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0707-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0707-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0707-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0707-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1800-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1800-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1800-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1800-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1801-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1801-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1801-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1801-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1802-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1802-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1802-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1802-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1803-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1803-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1803-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1803-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1804-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1804-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1804-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1804-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1805-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1805-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1805-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1805-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1806-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1806-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1806-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1806-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1807-1000-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1807-1100-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1807-1200-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"1807-1300-0002-0004":
		"AMS A The brushed motor 1 has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0700-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0700-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0700-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0700-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0701-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0701-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0701-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0701-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0702-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0702-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0702-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0702-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0703-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0703-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0703-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0703-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0704-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0704-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0704-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0704-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0705-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0705-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0705-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0705-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0706-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0706-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0706-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0706-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0707-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0707-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0707-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0707-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1800-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1800-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1800-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1800-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1801-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1801-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1801-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1801-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1802-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1802-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1802-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1802-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1803-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1803-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1803-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1803-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1804-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1804-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1804-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1804-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1805-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1805-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1805-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1805-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1806-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1806-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1806-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1806-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1807-2000-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1807-2100-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1807-2200-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"1807-2300-0002-0007":
		"AMS A Slot 1 feed-out Hall sensor is disconnected. The connector may have poor contact.",
	"0700-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0700-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0700-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0700-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0701-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0701-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0701-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0701-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0702-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0702-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0702-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0702-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0703-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0703-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0703-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0703-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0704-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0704-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0704-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0704-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0705-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0705-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0705-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0705-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0706-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0706-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0706-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0706-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0707-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0707-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0707-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0707-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1800-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1800-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1800-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1800-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1801-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1801-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1801-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1801-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1802-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1802-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1802-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1802-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1803-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1803-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1803-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1803-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1804-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1804-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1804-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1804-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1805-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1805-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1805-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1805-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1806-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1806-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1806-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1806-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1807-2000-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1807-2100-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1807-2200-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"1807-2300-0002-0008":
		"AMS A Slot 1 feed-in Hall sensor is disconnected, which may be due to poor connector contact.",
	"0700-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0700-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0700-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0700-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0701-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0701-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0701-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0701-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0702-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0702-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0702-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0702-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0703-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0703-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0703-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0703-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0704-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0704-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0704-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0704-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0705-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0705-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0705-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0705-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0706-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0706-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0706-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0706-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0707-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0707-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0707-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0707-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1800-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1800-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1800-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1800-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1801-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1801-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1801-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1801-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1802-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1802-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1802-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1802-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1803-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1803-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1803-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1803-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1804-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1804-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1804-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1804-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1805-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1805-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1805-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1805-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1806-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1806-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1806-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1806-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1807-2000-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1807-2100-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1807-2200-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"1807-2300-0002-0009":
		"Failed to extrude AMS A Slot 1 filament; the extruder may be clogged or the filament may be too thin, causing the extruder to slip.",
	"0700-2000-0002-0011": "AMS A slot 1 pulls filament back to AMS timeout.",
	"0700-2000-0002-0012":
		"AMS A slot 1 feeder unit motor is stalled, cannot rotate the spool.",
	"0700-2000-0002-0013":
		"AMS A slot 1 feeder unit motor has no signal, which may be due to poor contact in the motor connector or a motor fault.",
	"0700-2000-0002-0014":
		"AMS A Slot 1 odometer no signal - possible poor odometer connector contact or odometer failure.",
	"0700-2000-0002-0015":
		"AMS A slot 1 filament status is abnormal, which may be due to a filament breakage inside the AMS.",
	"0700-2000-0002-0016":
		"AMS A Slot 1 assist motor is stalled，due to excessive resistance in the tube between AMS and the printer.",
	"0700-2000-0002-0017":
		"AMS A Slot 1 assist motor is stalled，due to excessive resistance in the tube between AMS and the printer.",
	"0700-2000-0002-0018":
		"AMS A Slot 1 assist motor is stalled，due to excessive resistance in the tube near AMS.",
	"0700-2000-0002-0019":
		"AMS A Slot 1 assist motor is stalled，due to excessive resistance in the tube between AMS and the filament buffer.",
	"0700-2000-0002-0021":
		"AMS A Slot 1 assist motor is stalled，due to excessive resistance in the tube between the filament buffer and the toolhead.",
	"0700-2000-0002-0022":
		"AMS A Slot 1 assist motor is stalled，due to excessive resistance in the tube near the toolhead.",
	"0700-2000-0002-0024":
		"AMS A Slot 1 assist motor is stalled，failed to rotate the filament spool when pulling filament back to AMS.",
	"0700-2000-0002-0025":
		"AMS A Slot 1 feed resistance is too high. Please reduce the feed resistance, decrease the rotation resistance of the spool, and avoid having the filament tube too long and excessively bent.",
	"0700-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"0700-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"0701-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"0701-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"0702-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"0702-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"0703-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"0703-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"0704-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"0704-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"0705-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"0705-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"0706-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"0706-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"0707-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"0707-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"1800-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"1800-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"1801-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"1801-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"1802-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"1802-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"1803-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"1803-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"1804-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"1804-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"1805-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"1805-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"1806-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"1806-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"1807-3000-0001-0001": "The AMS A RFID 1 board has an error.",
	"1807-3100-0001-0001": "The AMS A RFID 1 board has an error.",
	"0700-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"0701-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"0702-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"0703-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"0704-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"0705-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"0706-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"0707-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"1800-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"1801-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"1802-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"1803-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"1804-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"1805-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"1806-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"1807-3500-0001-0002":
		"AMS A The humidity sensor is disconnected, which may be due to poor connector contact.",
	"1800-4000-0002-0004":
		"The filament buffer signal is abnormal; the spring may be stuck, or the filament may be tangled.",
	"0700-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0700-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0701-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0702-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0703-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0704-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0704-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0704-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0704-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0705-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0705-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0705-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0705-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0706-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0706-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0706-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0706-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0707-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0707-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0707-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"0707-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1800-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1800-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1800-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1800-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1801-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1801-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1801-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1801-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1802-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1802-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1802-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1802-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1803-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1803-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1803-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1803-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1804-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1804-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1804-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1804-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1805-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1805-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1805-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1805-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1806-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1806-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1806-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1806-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1807-6000-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1807-6100-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1807-6200-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1807-6300-0002-0001":
		"The AMS A Slot 1 is overloaded. The filament may be tangled or the spool may be stuck.",
	"1200-1200-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1200-1000-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1200-1100-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1200-1300-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1201-1000-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1201-1100-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1201-1200-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1201-1300-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1202-1000-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1202-1100-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1202-1200-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1202-1300-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1203-1000-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1203-1100-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1203-1200-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1203-1300-0001-0001":
		"The AMS1 assist motor has slipped. The extrusion wheel may be worn down, or the filament may be too thin.",
	"1200-2000-0002-0006":
		"Failed to extrude AMS1 Slot1 filament, the extruder may be clogged, or the filament may be too thin, causing the extruder slipping",
	"1200-2100-0002-0006":
		"Failed to extrude AMS1 Slot1 filament, the extruder may be clogged, or the filament may be too thin, causing the extruder slipping",
	"1200-2200-0002-0006":
		"Failed to extrude AMS1 Slot1 filament, the extruder may be clogged, or the filament may be too thin, causing the extruder slipping",
	"1200-2300-0002-0006":
		"Failed to extrude AMS1 Slot1 filament, the extruder may be clogged, or the filament may be too thin, causing the extruder slipping",
	"1201-2000-0002-0006":
		"Failed to extrude AMS1 Slot1 filament, the extruder may be clogged, or the filament may be too thin, causing the extruder slipping",
	"1201-2100-0002-0006":
		"Failed to extrude AMS1 Slot1 filament, the extruder may be clogged, or the filament may be too thin, causing the extruder slipping",
	"1201-2200-0002-0006":
		"Failed to extrude AMS1 Slot1 filament, the extruder may be clogged, or the filament may be too thin, causing the extruder slipping",
	"1201-2300-0002-0006":
		"Failed to extrude AMS1 Slot1 filament, the extruder may be clogged, or the filament may be too thin, causing the extruder slipping",
	"1800-2400-0002-0009":
		"AMS-HT A front cover is open. This may affect the drying performance or cause the filament to absorb moisture.",
	"1801-2400-0002-0009":
		"AMS-HT A front cover is open. This may affect the drying performance or cause the filament to absorb moisture.",
	"1802-2400-0002-0009":
		"AMS-HT A front cover is open. This may affect the drying performance or cause the filament to absorb moisture.",
	"1803-2400-0002-0009":
		"AMS-HT A front cover is open. This may affect the drying performance or cause the filament to absorb moisture.",
	"1804-2400-0002-0009":
		"AMS-HT A front cover is open. This may affect the drying performance or cause the filament to absorb moisture.",
	"1805-2400-0002-0009":
		"AMS-HT A front cover is open. This may affect the drying performance or cause the filament to absorb moisture.",
	"1806-2400-0002-0009":
		"AMS-HT A front cover is open. This may affect the drying performance or cause the filament to absorb moisture.",
	"1807-2400-0002-0009":
		"AMS-HT A front cover is open. This may affect the drying performance or cause the filament to absorb moisture.",
};

/**
 * Returns a human-readable error message for a given HMS error code.
 * @param code - The HMS error code.
 * @returns A string containing the error message, or "Unknown error." if the code is not recognized.
 */
export function getHmsErrorMessage(code: string): string {
	return hmsErrors[code] || "Unknown error.";
}
