import type { Background } from "@/models/background";
import { TravelTraitData } from "../trait-data";
import { GeneralSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";

export const Cartographer: Background = {
    name: "Cartographer",
    description: "You drew maps of villages, ruins, or wilderness areas so others could find their way.",
    characteristic: ["Mind"],
    stamina: 7,
    trait: TravelTraitData.Orienteering,
    skills: [
        GeneralSkillData.HistoricalLore,
        GeneralSkillData.MonsterLore,
        GeneralSkillData.NatureLore,
        GeneralSkillData.Navigate,
        GeneralSkillData.Search
    ],
    die_roll: 31,
    equipment: [
        GeneralGearData.Compass,
        GeneralGearData.Journal,
        GeneralGearData.Lantern,
        GeneralGearData.Lorebook,
        GeneralGearData.OilFlask,
        GeneralGearData.QuillInkpot,
    ]
}