import type { Background } from "@/models/background";
import { ArmorTraitData } from "../trait-data";
import { GeneralSkillData, WeaponSkillData } from "../skill-data";
import { ArmorData, GeneralGearData } from "../gear-data";
import { WeaponData } from "../weapon-data";

export const VillageWatch: Background = {
    name: "Village Watch",
    description: "You were a member of an organized law enforcement body that kept a settlement safe.",
    characteristic: ["Strength"],
    stamina: 9,
    trait: ArmorTraitData.StandStrong,
    skills: [
        GeneralSkillData.Jump,
        GeneralSkillData.Search,
        WeaponSkillData.Stabbing
    ],
    die_roll: 65,
    equipment: [
        GeneralGearData.Chain,
        GeneralGearData.Lantern,
        GeneralGearData.OilFlask,
        GeneralGearData.Whistle,
        WeaponData.Pike
    ],
    armor: [
        ArmorData.LightArmor
    ]
}