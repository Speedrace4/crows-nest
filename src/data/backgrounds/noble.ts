import type { Background } from "@/models/background";
import { ReputationTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";
import { AnimalData } from "../creature-data";

export const Noble: Background = {
    name: "Noble",
    description: "You grew up in a family that had wealth and power.",
    characteristic: ["Agility", "Mind"],
    stamina: 7,
    trait: ReputationTraitData.CallDaddy,
    skills: [
        GeneralSkillData.HandleAnimal,
        GeneralSkillData.HistoricalLore,
        GeneralSkillData.ReligiousLore,
        GeneralSkillData.Sneak,
        WeaponSkillData.Bow
    ],
    die_roll: 54,
    equipment: [
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.Lantern,
        GeneralGearData.Lorebook,
        GeneralGearData.OilFlask
    ],
    gold: 50,
    pets: [
        AnimalData.Horse
    ]
}