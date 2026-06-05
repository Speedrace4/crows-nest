import type { Background } from "@/models/background";
import { StabbingTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { ArmorData, GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Gladiator: Background = {
    name: "Gladiator",
    description: "You fought deadly battles for entertainment of others.",
    characteristic: ["Strength"],
    stamina: 9,
    trait: StabbingTraitData.BuryThePoint,
    skills: [
        GeneralSkillData.Jump,
        GeneralSkillData.Lift,
        WeaponSkillData.Stabbing
    ],
    die_roll: 42,
    equipment: [
        GeneralGearData.Mirror,
        GeneralGearData.RagePotion,
        GeneralGearData.Torch,
        WeaponData.Pike,
    ],
    armor: [
        ArmorData.LightArmor
    ]
}