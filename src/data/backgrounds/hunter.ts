import type { Background } from "@/models/background";
import { TravelTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";
import { AnimalData } from "../creature-data";

export const Hunter: Background = {
    name: "Hunter",
    description: "You tracked animals in the wild and foraged for food.",
    characteristic: ["Agility"],
    stamina: 5,
    trait: TravelTraitData.ForagingExpert,
    skills: [
        GeneralSkillData.HandleAnimal,
        GeneralSkillData.Hide,
        GeneralSkillData.NatureLore,
        GeneralSkillData.Navigate,
        GeneralSkillData.Sneak,
        GeneralSkillData.Swim,
        WeaponSkillData.Bow
    ],
    die_roll: 43,
    equipment: [
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.Torch,
        WeaponData.Shortbow,
        WeaponData.QuiverOf20Arrows,
    ],
    pets: [
        AnimalData.Dog
    ]
}