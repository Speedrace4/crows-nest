import type { ArmorUpgrade } from "@/models/upgrade"

export type ArmorType = "Light" | "Medium" | "Heavy" | "Shield"

export interface Armor {
    type: ArmorType;
    upgrade?: ArmorUpgrade;
    slots: number;
    ad: number;
    price: number;
}