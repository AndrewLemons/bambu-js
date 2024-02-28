export class PrinterNotConnected extends Error {
	constructor(message?: string) {
		super(message ?? "The printer is not connected.");
	}
}

export class PrinterDirectoryUnavailable extends Error {
	constructor(path?: string) {
		let pathString = path ? JSON.stringify(path) + " " : "";
		super(
			`The directory ${pathString}is not available on the printer's SD card.`,
		);
	}
}
