import type { Background } from "@/models/background";
import { ElementalTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Keraunomancer: Background = {
    name: "Keraunomancer",
    description: "You learned how to cast elemental spells that create and harness lightning and thunder.",
    characteristic: ["Mind"],
    stamina: 7,
    trait: ElementalTraitData.HurlTheStorm,
    skills: [
        GeneralSkillData.Blacksmithing,
        GeneralSkillData.Enchanting,
        GeneralSkillData.MagicLore,
        SpellcastingSkillData.Elemental,
        WeaponSkillData.Bashing
    ],
    die_roll: 46,
    equipment: [
        GeneralGearData.Mirror,
        GeneralGearData.Torch,
        WeaponData.Mace,
        SpellbookData.Spark,
        SpellbookData.Thunder
    ]
}