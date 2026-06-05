import type { Background } from "@/models/background";
import { SlashingTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { ArmorData, GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";
import { AnimalData } from "../creature-data";

export const Knight: Background = {
    name: "Knight",
    description: "You were a knight in the service of a noble or a hedge knight in service to no one other than yourself.",
    characteristic: ["Strength"],
    stamina: 9,
    trait: SlashingTraitData.Swordplay,
    skills: [
        GeneralSkillData.HandleAnimal,
        GeneralSkillData.HistoricalLore,
        WeaponSkillData.Slashing
    ],
    die_roll: 51,
    equipment: [
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.AnimalFeed,
        GeneralGearData.Lantern,
        GeneralGearData.OilFlask,
        WeaponData.Greatsword
    ],
    armor: [
        ArmorData.LightArmor
    ],
    pets: [
        AnimalData.Horse
    ]
}