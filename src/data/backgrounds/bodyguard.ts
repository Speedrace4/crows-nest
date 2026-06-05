import type { Background } from "@/models/background";
import { ArmorTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { ArmorData, GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Bodyguard: Background = {
    name: "Bodyguard",
    description: "You protected a person of importance.",
    characteristic: ["Strength"],
    stamina: 9,
    trait: ArmorTraitData.InterposingArm,
    skills: [
        GeneralSkillData.Endurance,
        GeneralSkillData.Hide,
        WeaponSkillData.Slashing
    ],
    die_roll: 26,
    equipment: [
        GeneralGearData.BallBearings,
        GeneralGearData.Torch,
        WeaponData.Sword
    ],
    armor: [
        ArmorData.LightArmor,
        ArmorData.Shield
    ]
}