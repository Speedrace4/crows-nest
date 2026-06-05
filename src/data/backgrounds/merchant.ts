import type { Background } from "@/models/background";
import { CampingTraitData } from "../trait-data";
import { GeneralSkillData } from "../skill-data";
import { GeneralGearData } from "../gear-data";

export const Merchant: Background = {
    name: "Merchant",
    description: "You were a merchant who traveled from village to village, tading your wares.",
    characteristic: ["Mind"],
    stamina: 7,
    trait: CampingTraitData.Plotting,
    skills: [
        GeneralSkillData.HistoricalLore,
        GeneralSkillData.Lift,
        GeneralSkillData.Navigate,
        GeneralSkillData.Search,
        GeneralSkillData.SleightOfHand
    ],
    die_roll: 52,
    equipment: [
        GeneralGearData.Journal,
        GeneralGearData.Lantern,
        GeneralGearData.MerchantScales,
        GeneralGearData.OilFlask,
        GeneralGearData.QuillInkpot
    ],
    gold: 50
}