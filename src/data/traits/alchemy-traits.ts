import type { Trait } from "@/models/trait";

export const MidnightOil: Trait = {
    name: "Midnight Oil",
    description: "When you work on crafting an alchemy item as part of the Craft Equipment rest activity, you can make two crafting rolls for the item or make a second crafting roll for a different alchemy item.",
    cost: 500,
    tree: "Alchemy"
}

export const ItBurns: Trait = {
    name: "It Burns",
    description: "Acids and poisons you craft deal additional damage equal to twice your Mind. Bombs you craft deal additional damage equal to your Mind.",
    cost: 500,
    tree: "Alchemy"
}

export const PotentPotion: Trait = {
    name: "Potent Potion",
    description: "Healing potions you craft restore additional Stamina equal to your Mind or remove 1 additional wound if the drinker is already at full Stamina.",
    cost: 500,
    tree: "Alchemy"
}
