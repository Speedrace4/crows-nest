import type { Background } from "@/models/background";
import { ElementalTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";

export const Pyromancer: Background = {
    name: "Pyromancer",
    description: "You learned how to cast elemental spells that create and harness fire.",
    characteristic: ["Mind"],
    stamina: 5,
    trait: ElementalTraitData.BurnBaby,
    skills: [
        GeneralSkillData.Alchemy,
        GeneralSkillData.Enchanting,
        GeneralSkillData.MagicLore,
        GeneralSkillData.Swim,
        SpellcastingSkillData.Elemental
    ],
    die_roll: 56,
    equipment: [
        GeneralGearData.MagnifyingGlass,
        GeneralGearData.String,
        GeneralGearData.Torch,
        SpellbookData.FireHands,
        SpellbookData.FireLance
    ]
}