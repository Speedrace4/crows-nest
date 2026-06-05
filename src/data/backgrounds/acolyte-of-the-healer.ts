import type { Background } from "@/models/background";
import { BenefactionTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Acolyte_Healer: Background = {
    name: "Acolyte of the Healer",
    description: "You served the god of healing.",
    characteristic: ["Mind"],
    stamina: 7,
    trait: BenefactionTraitData.EnhancedHealing,
    skills: [
        GeneralSkillData.Alchemy,
        GeneralSkillData.Lift,
        GeneralSkillData.ReligiousLore,
        SpellcastingSkillData.Benefaction,
        WeaponSkillData.Bashing
    ],
    die_roll: 12,
    equipment: [
        GeneralGearData.HolySymbol,
        GeneralGearData.Lantern,
        GeneralGearData.OilFlask,
        SpellbookData.MinorBlessing,
        SpellbookData.MinorHealing,
        WeaponData.Mace,
    ]
}