import type { Background } from "@/models/background";
import { PetsTraitData } from "../trait-data";
import { GeneralSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";
import { AnimalData } from "../creature-data";

export const Farmer: Background = {
    name: "Farmer",
    description: "You ploughed the fields and raise animals.",
    characteristic: ["Strength"],
    stamina: 7,
    trait: PetsTraitData.Buddy,
    skills: [
        GeneralSkillData.Blacksmithing,
        GeneralSkillData.Endurance,
        GeneralSkillData.HandleAnimal,
        GeneralSkillData.Lift,
        GeneralSkillData.NatureLore
    ],
    die_roll: 41,
    equipment: [
        GeneralGearData.TenFootPole,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.Pot,
        GeneralGearData.Torch
    ],
    pets: [
        AnimalData.Goat
    ]
}