import type { Background } from "@/models/background";
import { NecromancyTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Acolyte_Smith: Background = {
    name: "Acolyte of the Smith",
    description: "You served the god of creativity.",
    characteristic: ["Mind"],
    stamina: 7,
    trait: NecromancyTraitData.SoulAbsorption,
    skills: [
        GeneralSkillData.MagicLore,
        GeneralSkillData.MonsterLore,
        GeneralSkillData.ReligiousLore,
        SpellcastingSkillData.Necromancy,
        WeaponSkillData.Chopping
    ],
    die_roll: 14,
    equipment: [
        GeneralGearData.Torch,
        WeaponData.Axe,
        SpellbookData.MonsterSense,
        SpellbookData.MinorCurse,
        SpellbookData.BoneCapture
    ]
}