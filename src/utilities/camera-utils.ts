/**
 * JPEG image validation utility
 */
export class JPEGValidator {
	// Magic bytes for JPEG images
	private static readonly JPEG_SOI = Buffer.from([0xff, 0xd8]); // Start of Image
	private static readonly JPEG_EOI = Buffer.from([0xff, 0xd9]); // End of Image

	/**
	 * Validates if a buffer contains valid JPEG data
	 * @param buffer - Buffer to validate
	 * @returns True if buffer contains valid JPEG data
	 */
	static isValidJPEG(buffer: Buffer): boolean {
		if (buffer.length < 4) return false;

		// Check for SOI (Start of Image) magic bytes at the beginning
		const hasSOI = buffer.subarray(0, 2).equals(JPEGValidator.JPEG_SOI);

		// Check for EOI (End of Image) magic bytes at the end
		const hasEOI = buffer.subarray(-2).equals(JPEGValidator.JPEG_EOI);

		return hasSOI && hasEOI;
	}
}

/**
 * Resource cleanup utility for managing socket connections and timeouts
 */
export class ResourceManager {
	private resources: (() => void)[] = [];

	/**
	 * Add a cleanup function to be called when disposing resources
	 * @param cleanup - Function to call for cleanup
	 */
	addCleanup(cleanup: () => void): void {
		this.resources.push(cleanup);
	}

	/**
	 * Clean up all registered resources
	 */
	cleanup(): void {
		for (const cleanup of this.resources) {
			try {
				cleanup();
			} catch (error) {
				// Ignore cleanup errors to prevent masking original errors
				console.warn("Error during resource cleanup:", error);
			}
		}
		this.resources = [];
	}
}
