import { type P1SState, type P1SReportState } from "./state";

// Export state types
export { type P1SState, type P1SReportState } from "./state";

// Export command functions
export * from "./commands";

// Export camera configuration
export * from "./camera";

// P1S state type definition
export type P1S = {
	FullState: P1SState;
	ReportState: P1SReportState;
};
