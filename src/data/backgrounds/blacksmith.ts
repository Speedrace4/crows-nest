import type { Background } from "@/models/background";
import { BlacksmithingTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";

export const Blacksmith: Background = {
    name: "Blacksmith",
    description: "You forged and sold items made from metal.",
    characteristic: ["Strength"],
    stamina: 7,
    trait: BlacksmithingTraitData.DoubleDuty,
    skills: [
        GeneralSkillData.Blacksmithing,
        GeneralSkillData.Endurance,
        GeneralSkillData.Lift,
        GeneralSkillData.Sabotage,
        WeaponSkillData.Bashing
    ],
    die_roll: 25,
    equipment: [
        GeneralGearData.Bell,
        GeneralGearData.Pot,
        GeneralGearData.String,
        GeneralGearData.Tent,
        GeneralGearData.Torch
    ]
}