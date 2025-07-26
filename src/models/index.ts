import { type P1S, P1S_CAMERA_CONFIG } from "./p1s";
import { type H2D, H2D_CAMERA_CONFIG } from "./h2d";
import * as P1SCommands from "./p1s/commands";
import * as H2DCommands from "./h2d/commands";
import type { ModelCameraConfig } from "../types/camera-schema";

// Export individual model types and states
export { type P1S, type P1SState, type P1SReportState } from "./p1s";
export { type H2D, type H2DState, type H2DReportState } from "./h2d";

// Export command modules with consistent naming
export { P1SCommands, H2DCommands };

/**
 * Core state registry - maps model names to their state type definitions
 */
export interface ModelStateRegistry {
	P1S: P1S;
	H2D: H2D;
}

/**
 * Camera configuration registry - maps model names to their camera configs
 */
export const ModelCameraRegistry: Record<
	keyof ModelStateRegistry,
	ModelCameraConfig
> = {
	P1S: P1S_CAMERA_CONFIG,
	H2D: H2D_CAMERA_CONFIG,
};

/**
 * Commands registry - maps model names to their command functions
 */
export const ModelCommandsRegistry = {
	P1S: P1SCommands,
	H2D: H2DCommands,
} as const;

/**
 * Union type of all supported model names
 */
export type SupportedModel = keyof ModelStateRegistry;

/**
 * Helper type to get the state schema for a specific model
 */
export type ModelStateSchema<T extends SupportedModel> = ModelStateRegistry[T];

/**
 * Helper type to get the camera config for a specific model
 */
export type ModelCameraSchema<T extends SupportedModel> =
	(typeof ModelCameraRegistry)[T];

/**
 * Helper type to get the commands for a specific model
 */
export type ModelCommandsSchema<T extends SupportedModel> =
	(typeof ModelCommandsRegistry)[T];

/**
 * Validates that a model name is supported
 * @param model - The model name to validate
 * @returns True if the model is supported
 */
export function isSupportedModel(model: string): model is SupportedModel {
	const supportedModels: readonly SupportedModel[] = ["P1S", "H2D"];
	return supportedModels.includes(model as SupportedModel);
}

/**
 * Gets a list of all supported model names
 * @returns Array of supported model names
 */
export function getSupportedModels(): SupportedModel[] {
	return ["P1S", "H2D"];
}

/**
 * Gets the state registry for all supported models
 */
export function getModelStateRegistry(): ModelStateRegistry {
	// Return a type-only interface reference
	throw new Error(
		"ModelStateRegistry is a type-only interface. Use ModelStateSchema<T> for type checking.",
	);
}

/**
 * Gets the camera configuration for a specific model
 * @param model - The model name
 * @returns The camera configuration for the model
 */
export function getModelCameraConfig<T extends SupportedModel>(
	model: T,
): ModelCameraSchema<T> {
	return ModelCameraRegistry[model] as ModelCameraSchema<T>;
}

/**
 * Gets the commands module for a specific model
 * @param model - The model name
 * @returns The commands module for the model
 */
export function getModelCommands<T extends SupportedModel>(
	model: T,
): ModelCommandsSchema<T> {
	return ModelCommandsRegistry[model];
}
