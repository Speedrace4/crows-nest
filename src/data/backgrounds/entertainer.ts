import type { Background } from "@/models/background";
import { CampingTraitData } from "../trait-data";
import { GeneralSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";

export const Entertainer: Background = {
    name: "Entertainer",
    description: "You were an acrobat, dancer, and/or musician.",
    characteristic: ["Agility"],
    stamina: 5,
    trait: CampingTraitData.SongOfRest,
    skills: [
        GeneralSkillData.Climb,
        GeneralSkillData.Endurance,
        GeneralSkillData.Gymnastics,
        GeneralSkillData.HandleAnimal,
        GeneralSkillData.HistoricalLore,
        GeneralSkillData.Jump,
        GeneralSkillData.SleightOfHand
    ],
    die_roll: 35,
    equipment: [
        GeneralGearData.TenFootPole,
        GeneralGearData.Chalk,
        GeneralGearData.Mirror,
        GeneralGearData.Torch,
        GeneralGearData.MusicalInstrument
    ]
}