export class PrinterError extends Error {
	constructor(
		message: string,
		public override readonly cause?: Error,
	) {
		super(message);
		this.name = "PrinterError";
	}
}

export class PrinterConnectionError extends PrinterError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "PrinterConnectionError";
	}
}

export class PrinterAuthenticationError extends PrinterError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "PrinterAuthenticationError";
	}
}

export class PrinterTimeoutError extends PrinterError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "PrinterTimeoutError";
	}
}

export class PrinterValidationError extends PrinterError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "PrinterValidationError";
	}
}

export class PrinterCommunicationError extends PrinterError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "PrinterCommunicationError";
	}
}

export class PrinterSubscriptionError extends PrinterError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "PrinterSubscriptionError";
	}
}

export class PrinterReconnectionError extends PrinterError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "PrinterReconnectionError";
	}
}

export class PrinterDisconnectionError extends PrinterError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "PrinterDisconnectionError";
	}
}
