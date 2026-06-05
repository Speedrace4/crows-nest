import type { Background } from "@/models/background";
import { ArcheryTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Archer: Background = {
    name: "Archer",
    description: "You served as a soldier or member of the watch who was specially trained with a bow.",
    characteristic: ["Agility"],
    stamina: 7,
    trait: ArcheryTraitData.PointBlank,
    skills: [
        GeneralSkillData.Climb,
        GeneralSkillData.Hide,
        GeneralSkillData.Sneak,
        WeaponSkillData.Bow,
        WeaponSkillData.Unarmed
    ],
    die_roll: 22,
    equipment: [
        WeaponData.QuiverOf20Arrows,
        WeaponData.Shortbow,
        GeneralGearData.Spyglass,
        GeneralGearData.Torch,
        GeneralGearData.Whistle,
    ]
}