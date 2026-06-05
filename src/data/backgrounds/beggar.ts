import type { Background } from "@/models/background";
import { LeverageTraitData } from "../trait-data";
import { GeneralSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";

export const Beggar: Background = {
    name: "Beggar",
    description: "You relied on the kindness of strangers to scrape together enough coins to live.",
    characteristic: ["Agility", "Mind", "Strength"],
    stamina: 7,
    trait: LeverageTraitData.MoreForLess,
    skills: [
        GeneralSkillData.Endurance,
        GeneralSkillData.Hide,
        GeneralSkillData.Lift,
        GeneralSkillData.Search,
        GeneralSkillData.Sneak
    ],
    die_roll: 24,
    equipment: [
        GeneralGearData.Padlock,
        GeneralGearData.Pot,
        GeneralGearData.String,
        GeneralGearData.Tent,
        GeneralGearData.Torch
    ]
}