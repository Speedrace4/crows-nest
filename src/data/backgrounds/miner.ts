import type { Background } from "@/models/background";
import { LeverageTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Miner: Background = {
    name: "Miner",
    description: "You worked in mines, digging and hauling ore.",
    characteristic: ["Strength"],
    stamina: 7,
    trait: LeverageTraitData.LastingLight,
    skills: [
        GeneralSkillData.Climb,
        GeneralSkillData.Endurance,
        GeneralSkillData.Lift,
        GeneralSkillData.Navigate,
        WeaponSkillData.Stabbing
    ],
    die_roll: 53,
    equipment: [
        GeneralGearData.Chalk,
        GeneralGearData.GrapplingHook,
        GeneralGearData.Lantern,
        GeneralGearData.OilFlask,
        WeaponData.Pickaxe,
        WeaponData.Shovel
    ],
    gold: 50
}