export class FileError extends Error {
	constructor(
		message: string,
		public override readonly cause?: Error,
	) {
		super(message);
		this.name = "FileError";
	}
}

export class FileConnectionError extends FileError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "FileConnectionError";
	}
}

export class FileTimeoutError extends FileError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "FileTimeoutError";
	}
}

export class FileValidationError extends FileError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "FileValidationError";
	}
}

export class FileOperationError extends FileError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "FileOperationError";
	}
}

export class FileNotFoundError extends FileError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "FileNotFoundError";
	}
}

export class FileUploadError extends FileError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "FileUploadError";
	}
}

export class FileDownloadError extends FileError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "FileDownloadError";
	}
}

export class FileDeleteError extends FileError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "FileDeleteError";
	}
}

export class FileDirectoryError extends FileError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "FileDirectoryError";
	}
}

export class FileDisconnectionError extends FileError {
	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = "FileDisconnectionError";
	}
}
