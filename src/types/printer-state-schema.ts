/**
 * Schema for printer state types.
 * This defines the structure of state objects used to represent
 * the full state and report state of a printer.
 * This is important because some models of printers report full state changes,
 * while others report partial state changes.
 */
export interface PrinterStateSchema {
	FullState: any;
	ReportState: any;
}
