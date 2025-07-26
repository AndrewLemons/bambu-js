# Bambu JS

<a href="https://www.npmjs.com/package/bambu-js"><img src="https://img.shields.io/npm/v/bambu-js"></a>
<a href="https://www.npmjs.com/package/bambu-js"><img src="https://img.shields.io/npm/dt/bambu-js"></a>
<a href="https://github.com/AndrewLemons/bambu-js"><img src="https://img.shields.io/github/stars/AndrewLemons/bambu-js?style=flat"></a>

A modern TypeScript/JavaScript library for interacting with Bambu Lab 3D printers. Control your printer, monitor print status, manage files, and capture camera frames.

## Features

- 🖨️ **Printer Control**: Monitor printer status, control print jobs (pause/resume/stop), and send commands.
- 📁 **File Management**: Upload, download, and manage files on the printer's file system via FTP.
- 📸 **Camera Access**: Capture frames from the printer's camera.
- 📡 **Multiple Models**: Currently supports P1S and H2D models, with more to come.
- 🛡️ **Type Safety**: Full TypeScript support with comprehensive type definitions.

## Installation

```bash
pnpm install bambu-js
```

## Quick Start

```typescript
import { PrinterController, FileController, CameraController } from "bambu-js";

// Create a printer controller
const printer = PrinterController.create({
	model: "P1S",
	host: "192.168.1.100",
	accessCode: "your-access-code",
	serial: "printer-serial-number",
});

// Connect and monitor the printer
await printer.connect();

printer.on("report", (state) => {
	console.log("Printer state:", state.print);
});

printer.on("connect", () => {
	console.log("Connected to printer!");
});
```

## Core Controllers

### PrinterController

The main controller for monitoring and controlling your Bambu Lab printer.

#### Basic Usage

```typescript
import { PrinterController, P1SCommands } from "bambu-js";

const printer = PrinterController.create({
	model: "P1S",
	host: "192.168.1.100",
	accessCode: "your-access-code",
	serial: "printer-serial-number",
	options: {
		connectionTimeout: 10000,
		autoReconnect: true,
		reconnectDelay: 5000,
	},
});

// Connect to the printer
await printer.connect();

// Listen for state updates
printer.on("report", (state) => {
	console.log("Print state:", state.print);
});

// Send commands to the printer
const stopCommand = P1SCommands.stopCommand();
await printer.sendCommand(stopCommand);

const pauseCommand = P1SCommands.pauseCommand();
await printer.sendCommand(pauseCommand);

const resumeCommand = P1SCommands.resumeCommand();
await printer.sendCommand(resumeCommand);

// Control the chamber light
const ledCommand = P1SCommands.setLedCommand("chamber_light", "on");
await printer.sendCommand(ledCommand);

// Set print speed (1-4)
const speedCommand = P1SCommands.printSpeedCommand("2");
await printer.sendCommand(speedCommand);
```

#### Events

```typescript
// Connection events
printer.on("connect", () => {
	console.log("Printer connected");
});

printer.on("disconnect", () => {
	console.log("Printer disconnected");
});

printer.on("end", () => {
	console.log("Connection ended");
});

// State updates
printer.on("report", (state) => {
	// Handle printer state updates
	console.log("Current state:", state);
});

// Error handling
printer.on("error", (error) => {
	console.error("Printer error:", error);
});
```

### FileController

Manage files on your printer's SD card via FTP.

#### Basic Usage

```typescript
import { FileController } from "bambu-js";

const fileController = FileController.create({
	host: "192.168.1.100",
	accessCode: "your-access-code",
	options: {
		timeout: 15000,
	},
});

// Connect and perform file operations
await fileController.connect();

// List files in a directory
const files = await fileController.listDir("/sdcard/path/to/directory");
console.log("Files:", files);

// Upload a file
await fileController.uploadFile("./local-file.3mf", "/sdcard/file.3mf");

// Download a file
await fileController.downloadFile("/sdcard/file.3mf", "./local-file.3mf");

// Delete a file
await fileController.deleteFile("/sdcard/file.3mf");

// Disconnect
await fileController.disconnect();
```

#### File Operations with Progress Tracking

```typescript
// Upload with progress tracking
fileController.on("progress", (info) => {
	const progress = (info.bytesTransferred / info.bytesOverall) * 100;
	console.log(`Upload progress: ${progress.toFixed(2)}%`);
});

await fileController.uploadFile(
	"./large-file.3mf",
	"/printer/path/large-file.3mf",
);
```

### CameraController

Capture frames from your printer's camera.

#### Basic Usage

```typescript
import fs from "fs/promises";
import { CameraController } from "bambu-js";

const camera = CameraController.create({
	model: "P1S",
	host: "192.168.1.100",
	accessCode: "your-access-code",
	options: {
		connectionTimeout: 10000,
		frameTimeout: 5000,
	},
});

// Capture a single frame
try {
	const frame = await camera.captureFrame();
	console.log("Frame captured:", {
		frameNumber: frame.frameNumber,
		size: frame.data.length,
		timestamp: frame.timestamp,
	});

	// Save the frame to a file
	await fs.writeFile("./frame.jpg", frame.data);
} catch (error) {
	console.error("Failed to capture frame:", error);
}
```

#### Continuous Frame Capture

Continuous frame capture is generally a bad idea, specifically for P1 series printers, but can be implemented.

```typescript
// Capture frames continuously
const captureFrames = async () => {
	for (let i = 0; i < 10; i++) {
		try {
			const frame = await camera.captureFrame();
			require("fs").writeFileSync(`./frame-${i}.jpg`, frame.data);
			console.log(`Frame ${i + 1} captured`);

			// Wait 1 second between captures
			await new Promise((resolve) => setTimeout(resolve, 1000));
		} catch (error) {
			console.error(`Failed to capture frame ${i + 1}:`, error);
		}
	}
};

captureFrames();
```

## Supported Models

The library supports multiple Bambu Lab printer models:

- **P1S**
- **H2D**

Each model has its own state schema and command set:

```typescript
import { P1SCommands, H2DCommands } from 'bambu-js';

// P1S specific commands
const p1sController = PrinterController.create({ model: 'P1S', ... });
const p1sStopCommand = P1SCommands.stopCommand();

// H2D specific commands
const h2dController = PrinterController.create({ model: 'H2D', ... });
const h2dStopCommand = H2DCommands.stopCommand();
```

## Working with HMS Errors

The library includes HMS error codes and messages:

```typescript
import { hmsErrors, getHmsErrorMessage } from "bambu-js";

console.log(getHmsErrorMessage("0300-1100-0002-0002"));
```

## Best Practices

### Connection Management

```typescript
// Always handle connection errors
printer.on("error", (error) => {
	console.error("Printer error:", error);
	// Implement reconnection logic if needed
});

// Clean shutdown
process.on("SIGINT", async () => {
	console.log("Shutting down...");
	await printer.disconnect();
	process.exit(0);
});
```

```typescript
// Use try/finally for resource cleanup
const fileController = FileController.create({ ... });

try {
  await fileController.connect();
  await fileController.uploadFile('./file.3mf', '/printer/file.3mf');
} finally {
  await fileController.disconnect();
}
```

## API Reference

### PrinterController

- `PrinterController.create(config)` - Create a new printer controller
- `connect()` - Connect to the printer
- `disconnect()` - Disconnect from the printer
- `sendCommand(command)` - Send a command to the printer
- `isConnected` - Check connection status
- `getModel()` - Get printer model
- `getHost()` - Get printer host
- `getSerial()` - Get printer serial

### FileController

- `FileController.create(config)` - Create a new file controller
- `connect()` - Connect to the printer's FTP server
- `disconnect()` - Disconnect from FTP server
- `listFiles(path)` - List files in directory
- `uploadFile(local, remote)` - Upload a file
- `downloadFile(remote, local)` - Download a file
- `deleteFile(path)` - Delete a file

### CameraController

- `CameraController.create(config)` - Create a new camera controller
- `captureFrame()` - Capture a single frame

### HMS Errors

- `hmsErrors` - Mapping of HMS error codes to error messages
- `getHmsErrorMessage(code)` - Get the error message of a given error code

## Contributing

Contributions are welcome! Please submit pull requests to the GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:

- GitHub Issues: [Create an issue](https://github.com/AndrewLemons/bambu-js/issues)
- Documentation: [API Documentation](https://github.com/AndrewLemons/bambu-js#api-reference)
