export type CraftingTypes = "Alchemy" | "Blacksmithing" | "Enchanting"

export interface CraftingInfo {
	type: CraftingTypes;
	craft_mod: number;
	materials: string[];
	pp: number;
	price: number;
}
