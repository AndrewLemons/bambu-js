export class CameraError extends Error {
	constructor(
		message: string,
		public override readonly cause?: Error,
	) {
		super(message);
		this.name = "CameraError";
	}
}

export class CameraConnectionError extends CameraError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "CameraConnectionError";
	}
}

export class CameraAuthenticationError extends CameraError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "CameraAuthenticationError";
	}
}

export class CameraTimeoutError extends CameraError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "CameraTimeoutError";
	}
}

export class CameraFrameError extends CameraError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "CameraFrameError";
	}
}

export class CameraValidationError extends CameraError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "CameraValidationError";
	}
}
