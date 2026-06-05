import type { Background } from "@/models/background";
import { ElementalTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";

export const Hydromancer: Background = {
    name: "Hydromancer",
    description: "You learned how to cast elemental spells that create and harness water.",
    characteristic: ["Mind"],
    stamina: 7,
    trait: ElementalTraitData.WaterShield,
    skills: [
        GeneralSkillData.Alchemy,
        GeneralSkillData.Enchanting,
        GeneralSkillData.MagicLore,
        GeneralSkillData.Swim,
        SpellcastingSkillData.Elemental
    ],
    die_roll: 44,
    equipment: [
        GeneralGearData.Journal,
        GeneralGearData.QuillInkpot,
        GeneralGearData.Torch,
        SpellbookData.CreateWater,
        SpellbookData.Stream
    ]
}