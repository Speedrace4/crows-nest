import type { CraftingInfo } from "./craftinginfo";

export interface GearImprovement {
    price: number,
    description: string
}

export interface Gear {
    name: string;
    description?: string;
    price: number;
    fine?: GearImprovement;
    masterwork?: GearImprovement;
    stack: number;
    crafting_info?: CraftingInfo;
    slots?: number;
}