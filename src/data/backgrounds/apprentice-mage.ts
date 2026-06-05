import type { Background } from "@/models/background";
import { AlterationTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData } from "../skill-data";
import { SpellbookData } from "../gear-data";

export const ApprenticeMage: Background = {
    name: "Apprentice Mage",
    description: "You studied several magic disciplines under a more experienced tutor.",
    characteristic: ["Mind"],
    stamina: 5,
    trait: AlterationTraitData.AlterationStone,
    skills: [
        GeneralSkillData.Enchanting,
        GeneralSkillData.MagicLore,
        GeneralSkillData.MonsterLore,
        SpellcastingSkillData.Alteration,
        SpellcastingSkillData.Conjuration,
        SpellcastingSkillData.Elemental,
        SpellcastingSkillData.Illusion,
    ],
    die_roll: 21,
    equipment: [
        SpellbookData.Jaunt,
        SpellbookData.Light,
        SpellbookData.Spark ,
        SpellbookData.TakeShape,
        SpellbookData.Thunder,
    ]
}