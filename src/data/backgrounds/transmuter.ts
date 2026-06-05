import type { Background } from "@/models/background";
import { AlterationTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";

export const Transmuter: Background = {
    name: "Transmuter",
    description: "You studied alteration magic either on your own or with a teacher.",
    characteristic: ["Mind"],
    stamina: 5,
    trait: AlterationTraitData.LastingAlteration,
    skills: [
        GeneralSkillData.Alchemy,
        GeneralSkillData.Blacksmithing,
        GeneralSkillData.Enchanting,
        GeneralSkillData.MagicLore,
        GeneralSkillData.PickLock,
        GeneralSkillData.Sabotage,
        SpellcastingSkillData.Alteration
    ],
    die_roll: 65,
    equipment: [
        GeneralGearData.Chalk,
        GeneralGearData.Torch,
        SpellbookData.Jaunt,
        SpellbookData.AnimalForm,
        SpellbookData.Repair,
        SpellbookData.TakeShape
    ]
}