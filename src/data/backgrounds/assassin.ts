import type { Background } from "@/models/background";
import { ThieveryTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Assassin: Background = {
    name: "Assassin",
    description: "You were a killer who either worked paid contracts or served a higher purpose in a shady organization.",
    characteristic: ["Agility"],
    stamina: 5,
    trait: ThieveryTraitData.SiezeTheAdvantage,
    skills: [
        GeneralSkillData.Climb,
        GeneralSkillData.Gymnastics,
        GeneralSkillData.Hide,
        GeneralSkillData.PickLock,
        GeneralSkillData.Sneak,
        WeaponSkillData.Bow,
        WeaponSkillData.Slashing
    ],
    die_roll: 23,
    equipment: [
        WeaponData.Knife,
        WeaponData.Shortbow,
        WeaponData.QuiverOf20Arrows,
        GeneralGearData.PoisonVial,
        GeneralGearData.Torch,
    ]
}