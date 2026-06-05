import type { Background } from "@/models/background";
import { ArmorTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { ArmorData, GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Soldier: Background = {
    name: "Soldier",
    description: "You served as a soldier in an army dedicated to protecting others from the threats of the wilderness.",
    characteristic: ["Strength"],
    stamina: 9,
    trait: ArmorTraitData.Stalwart,
    skills: [
        GeneralSkillData.Endurance,
        WeaponSkillData.Bow,
        WeaponSkillData.Stabbing
    ],
    die_roll: 62,
    equipment: [
        GeneralGearData.Torch,
        WeaponData.QuiverOf20Arrows,
        WeaponData.Shortbow,
        WeaponData.Spear
    ],
    armor: [
        ArmorData.LightArmor
    ]
}