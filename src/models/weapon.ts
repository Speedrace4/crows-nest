import type { Attack } from "@/models/attack"
import type { Quality } from "@/models/quality"
import type { Upgrade } from "@/models/upgrade"
import type { Enchantment } from "./enchantment";
import type { CraftingInfo } from "./craftinginfo";

export type WeaponType = "Bashing" | "Chopping" | "Slashing" | "Chopping" | "Stabbing" | "Bow" | "Ammunition"

export interface Weapon extends Attack {
	price: number;
	slots: number;
    type: WeaponType;
	upgrade?: Upgrade;
	qualities: Quality[];
    notes: string;
	stack: number;
	enchantments?: Enchantment;
	craft_info: CraftingInfo;
}