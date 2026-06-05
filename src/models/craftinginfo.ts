export type CraftingType = "Alchemy" | "Blacksmithing" | "Enchanting"

export interface ProjectPoints {
	base: number,
	fine?: number,
	masterwork?: number
}

export interface CraftingInfo {
	type: CraftingType;
	craft_mod: number;
	materials: string;
	pp: ProjectPoints;
}
