import type { Background } from "@/models/background";
import { KnowledgeTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const Tinkerer: Background = {
    name: "Tinkerer",
    description: "You created magic and mechanical inventions.",
    characteristic: ["Mind"],
    stamina: 5,
    trait: KnowledgeTraitData.ImprovisedEquipment,
    skills: [
        GeneralSkillData.Alchemy,
        GeneralSkillData.Blacksmithing,
        GeneralSkillData.Enchanting,
        GeneralSkillData.PickLock,
        GeneralSkillData.Sabotage,
        GeneralSkillData.Search,
        WeaponSkillData.Chopping
    ],
    die_roll: 64,
    equipment: [
        GeneralGearData.Crowbar,
        GeneralGearData.GrapplingHook,
        GeneralGearData.LockpickSet,
        GeneralGearData.Torch,
        WeaponData.Knife
    ]
}