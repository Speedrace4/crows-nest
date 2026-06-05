import type { Background } from "@/models/background";
import { AlchemyTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";

export const Alchemist: Background = {
    name: "Alchemist",
    description: "You crafted and sold acids, potions, and bombs.",
    characteristic: ["Mind"],
    stamina: 5,
    trait: AlchemyTraitData.MidnightOil,
    skills: [
        GeneralSkillData.Alchemy,
        GeneralSkillData.Enchanting,
        GeneralSkillData.MagicLore,
        GeneralSkillData.MonsterLore,
        GeneralSkillData.Sabotage,
        GeneralSkillData.Search,
        WeaponSkillData.Bow
    ],
    die_roll: 16,
    equipment: [
        GeneralGearData.AcidVial,
        GeneralGearData.AlchemistTools,
        GeneralGearData.Bucket,
        GeneralGearData.HealingPotion,
        GeneralGearData.Lantern,
        GeneralGearData.OilFlask
    ]
}