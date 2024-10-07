export enum PrintStage {
	UNKNOWN = "UNKNOWN",
	IDLE = "IDLE",
	PRINTING = "PRINTING",
	PAUSED = "PAUSED",
	FINISHED = "FINISHED",
}

export const printStageValues = [
	PrintStage.UNKNOWN, // 0
	PrintStage.IDLE, // 1
	PrintStage.PRINTING, // 2
	PrintStage.PAUSED, // 3
	PrintStage.FINISHED, // 4
] as PrintStage[];
