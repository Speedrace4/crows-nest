import type { Background } from "@/models/background";
import { ThieveryTraitData } from "../trait-data";
import { GeneralSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Thief: Background = {
    name: "Thief",
    description: "You burgled places for money, either on your own or as part of a guild.",
    characteristic: ["Agility"],
    stamina: 5,
    trait: ThieveryTraitData.Stealthy,
    skills: [
        GeneralSkillData.Gymnastics,
        GeneralSkillData.Hide,
        GeneralSkillData.PickLock,
        GeneralSkillData.Sabotage,
        GeneralSkillData.Search,
        GeneralSkillData.SleightOfHand,
        GeneralSkillData.Sneak
    ],
    die_roll: 63,
    equipment: [
        GeneralGearData.Crowbar,
        GeneralGearData.GrapplingHook,
        GeneralGearData.LockpickSet,
        GeneralGearData.Torch,
        WeaponData.Knife
    ]
}