# Bambu JS

<a href="https://www.npmjs.com/package/bambu-js"><img src="https://img.shields.io/npm/v/bambu-js"></a>
<a href="https://www.npmjs.com/package/bambu-js"><img src="https://img.shields.io/npm/dt/bambu-js"></a>
<a href="https://github.com/AndrewLemons/bambu-js"><img src="https://img.shields.io/github/stars/AndrewLemons/bambu-js?style=flat"></a>

Tools to interact with Bambu Lab printers over MQTT and FTP.

## Example

```typescript
import { BambuPrinter } from "bambu-js";

(async () => {
	// Create the printer
	const printer = new BambuPrinter("192.168.68.1", "01P0XX1XX2XX", "12345678");

	// Connect to the printer
	await printer.connect();

	// Manipulate files on the SD card
	await printer.manipulateFiles((context) => {
		let dir = await context.readDir("models");
		console.log(dir);
	});

	// Start a print job
	printer.printProjectFile(
		"models/project.3mf",
		"plate_1.gcode",
		"Plate 1",
		"66b1ea1d91b15ace6f74ea1456ba1456",
		{
			timelapse: false,
		},
	);

	// Log the printer state
	console.log(printer.state);
})();
```
