import type { Background } from "@/models/background";
import { ConjurationTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";

export const Conjurer: Background = {
    name: "Conjurer",
    description: "You studied conjuration magic on your own or with a teacher.",
    characteristic: ["Mind"],
    stamina: 7,
    trait: ConjurationTraitData.Jumper,
    skills: [
        GeneralSkillData.HandleAnimal,
        GeneralSkillData.MagicLore,
        GeneralSkillData.MonsterLore,
        GeneralSkillData.Navigate,
        SpellcastingSkillData.Conjuration
    ],
    die_roll: 32,
    equipment: [
        GeneralGearData.Chain,
        GeneralGearData.Torch,
        SpellbookData.Jaunt,
        SpellbookData.SummonObject,
        SpellbookData.TeleportObject,
    ]
}