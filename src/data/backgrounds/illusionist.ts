import type { Background } from "@/models/background";
import { IllusionTraitData } from "../trait-data";
import { GeneralSkillData, SpellcastingSkillData } from "../skill-data";
import { GeneralGearData, SpellbookData } from "../gear-data";

export const Illusionist: Background = {
    name: "Illusionist",
    description: "You studied illusion magic either on your own or with a teacher.",
    characteristic: ["Mind"],
    stamina: 5,
    trait: IllusionTraitData.LastingIllusion,
    skills: [
        GeneralSkillData.Hide,
        GeneralSkillData.MagicLore,
        GeneralSkillData.MonsterLore,
        GeneralSkillData.PickLock,
        GeneralSkillData.Search,
        GeneralSkillData.Sneak,
        SpellcastingSkillData.Illusion
    ],
    die_roll: 45,
    equipment: [
        GeneralGearData.CardDeck,
        GeneralGearData.Whistle,
        SpellbookData.Cacophany,
        SpellbookData.Light,
        SpellbookData.MinorPhantasm,
    ]
}