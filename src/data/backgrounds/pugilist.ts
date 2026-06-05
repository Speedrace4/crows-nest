import type { Background } from "@/models/background";
import { UnarmedTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { ArmorData, GeneralGearData } from "../gear-data";

export const Pugilist: Background = {
    name: "Pugilist",
    description: "You made a living battling it out with bare knuckles.",
    characteristic: ["Agility", "Strength"],
    stamina: 9,
    trait: UnarmedTraitData.PackAPunch,
    skills: [
        GeneralSkillData.Climb,
        GeneralSkillData.Jump,
        WeaponSkillData.Unarmed
    ],
    die_roll: 55,
    equipment: [
        GeneralGearData.Chain,
        GeneralGearData.Lorebook,
        GeneralGearData.Torch
    ],
    armor: [
        ArmorData.LightArmor
    ]
}