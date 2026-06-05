import type { Background } from "@/models/background";
import { SlashingTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { ArmorData, GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Duelist: Background = {
    name: "Duelist",
    description: "You dedicated your youth to fencing in noble courts.",
    characteristic: ["Agility"],
    stamina: 9,
    trait: SlashingTraitData.FinesseTheBlade,
    skills: [
        GeneralSkillData.Gymnastics,
        GeneralSkillData.HistoricalLore,
        WeaponSkillData.Slashing
    ],
    die_roll: 34,
    equipment: [
        GeneralGearData.Lorebook,
        GeneralGearData.Mirror,
        WeaponData.Sword,
        GeneralGearData.Torch
    ],
    armor: [
        ArmorData.LightArmor
    ]
}