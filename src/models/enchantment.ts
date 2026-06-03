import type { Upgrade } from "@/models/upgrade"
import type { WeaponType } from "@/models/weapon";

export interface Enchantment {
    name: string;
    description: string;
    upgrade: Upgrade;
}

export interface ArmorEnchantment extends Enchantment {
    equipment: "Suit" | "Shield" | "Both";
}

export interface WeaponEnchantment extends Enchantment {
    types: WeaponType[];
}