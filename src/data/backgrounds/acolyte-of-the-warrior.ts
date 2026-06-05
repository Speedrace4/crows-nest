import type { Background } from "@/models/background";
import { BenefactionTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Acolyte_Warrior: Background = {
    name: "Acolyte of the Warrior",
    description: "You served the god of war.",
    characteristic: ["Mind", "Strength"],
    stamina: 9,
    trait: BenefactionTraitData.FirstResponder,
    skills: [
        GeneralSkillData.ReligiousLore,
        SpellcastingSkillData.Benefaction,
        WeaponSkillData.Chopping
    ],
    die_roll: 15,
    equipment: [
        GeneralGearData.Torch,
        GeneralGearData.HolySymbol,
        WeaponData.Axe,
        SpellbookData.MinorHealing,
        SpellbookData.MinorWard
    ]
}