import type { Background } from "@/models/background";
import { ChoppingTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Executioner: Background = {
    name: "Executioner",
    description: "You carried out capital punishment.",
    characteristic: ["Strength"],
    stamina: 9,
    trait: ChoppingTraitData.ChopEmDown,
    skills: [
        GeneralSkillData.Lift,
        WeaponSkillData.Chopping,
        WeaponSkillData.Unarmed
    ],
    die_roll: 36,
    equipment: [
        GeneralGearData.Chain,
        WeaponData.Greataxe,
        GeneralGearData.Ladder,
        GeneralGearData.Padlock,
        GeneralGearData.Torch
    ]
}