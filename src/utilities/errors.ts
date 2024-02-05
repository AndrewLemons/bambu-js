export class PrinterNotConnected extends Error {
	constructor(message?: string) {
		super(message ?? "The printer is not connected.");
	}
}
