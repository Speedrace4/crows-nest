import type { Trait } from "@/models/trait";

export const HeartyMeals: Trait = {
    name: "Hearty Meals",
    description: "As a rest activity, you can turn a normal ration into something more if you have cook's utensils. The ration becomes a hearty ration (which has an equipment card).",
    cost: 500,
    tree: "Camping"
}

export const Plotting: Trait = {
    name: "Plotting",
    description: "As a rest activity, choose up to three pieces of equipment you can touch. The first time you or an ally uses this equipment as part of a test before the end of your next rest, they gain a +2 bonus on the roll.",
    cost: 500,
    tree: "Camping"
}

export const SongOfRest: Trait = {
    name: "Song of Rest",
    description: "As a rest activity, you can play a song on an instrument. At the end of the rest, each ally who rested with you is blessed.",
    cost: 500,
    tree: "Camping"
}