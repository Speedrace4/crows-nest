import type { Background } from "@/models/background";
import { EnchantmentTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";

export const Acolyte_Gardner: Background = {
    name: "Acolyte of the Gardner",
    description: "You served the god of nature.",
    characteristic: ["Mind"],
    stamina: 5,
    trait: EnchantmentTraitData.MaterialTransfer,
    skills: [
        GeneralSkillData.HandleAnimal,
        GeneralSkillData.NatureLore,
        GeneralSkillData.Navigate,
        GeneralSkillData.ReligiousLore,
        GeneralSkillData.Swim,
        SpellcastingSkillData.Benefaction,
        SpellcastingSkillData.Elemental
    ],
    die_roll: 11,
    equipment: [
        GeneralGearData.HolySymbol,
        GeneralGearData.Torch,
        SpellbookData.FireHands,
        SpellbookData.MinorHealing,
        SpellbookData.Spark,
    ]
}