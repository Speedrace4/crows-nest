import type { Background } from "@/models/background";
import { CampingTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";

export const Cook: Background = {
    name: "Cook",
    description: "You worked as a cook at a tavern or organization.",
    characteristic: ["Agility", "Mind", "Strength"],
    stamina: 7,
    trait: CampingTraitData.HeartyMeals,
    skills: [
        GeneralSkillData.Alchemy,
        GeneralSkillData.Endurance,
        GeneralSkillData.Lift,
        GeneralSkillData.NatureLore,
        WeaponSkillData.Slashing
    ],
    die_roll: 33,
    equipment: [
        GeneralGearData.CookUtensils,
        GeneralGearData.HeartyRation,
        GeneralGearData.HeartyRation,
        GeneralGearData.Pot,
        GeneralGearData.Torch
    ]
}