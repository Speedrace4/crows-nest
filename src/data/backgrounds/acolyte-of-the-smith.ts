import type { Background } from "@/models/background";
import { EnchantmentTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";

export const Acolyte_Three: Background = {
    name: "Acolyte of the Three",
    description: "You served the god of death, greeed, and knowledge.",
    characteristic: ["Mind", "Strength"],
    stamina: 7,
    trait: EnchantmentTraitData.HandsForTools,
    skills: [
        GeneralSkillData.Alchemy,
        GeneralSkillData.Blacksmithing,
        GeneralSkillData.Enchanting,
        GeneralSkillData.ReligiousLore,
        SpellcastingSkillData.Benefaction
    ],
    die_roll: 13,
    equipment: [
        GeneralGearData.HolySymbol,
        GeneralGearData.MagnifyingGlass,
        GeneralGearData.Torch,
        SpellbookData.MinorHealing,
        SpellbookData.SummonObject,
    ]
}