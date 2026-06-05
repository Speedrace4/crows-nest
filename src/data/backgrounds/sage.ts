import type { Background } from "@/models/background";
import { KnowledgeTraitData } from "../trait-data";
import { GeneralSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";

export const Sage: Background = {
    name: "Sage",
    description: "You studied all subjects with a tutor or by burying your nose in many books (likely both).",
    characteristic: ["Mind"],
    stamina: 5,
    trait: KnowledgeTraitData.Cram,
    skills: [
        GeneralSkillData.HistoricalLore,
        GeneralSkillData.MagicLore,
        GeneralSkillData.MonsterLore,
        GeneralSkillData.NatureLore,
        GeneralSkillData.Navigate,
        GeneralSkillData.ReligiousLore,
        GeneralSkillData.Sabotage
    ],
    die_roll: 61,
    equipment: [
        GeneralGearData.Journal,
        GeneralGearData.Lorebook,
        GeneralGearData.Lorebook,
        GeneralGearData.QuillInkpot,
        GeneralGearData.Torch
    ]
}