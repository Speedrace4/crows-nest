import type { Trait } from "@/models/trait";

export const MaterialTransfer: Trait = {
    name: "Material Transfer",
    description: "As a rest activity, choose two armor or weapon items you can touch, such as iron heavy armor and a steel sword. The materials used in each item are magically swapped.",
    cost: 500,
    tree: "Enchantment"
}

export const HandsForTools: Trait = {
    name: "Hands for Tools",
    description: "You don't need tools to make crafting rolls for alchemy, blacksmithing, or enchanting items.",
    cost: 500,
    tree: "Enchantment"
}

export const TwiceEnchanted: Trait = {
    name: "Twice Enchanted",
    description: "When you work on crafting an enchanting item as part of the Craft Equipment rest activity, you can make two crafting rolls for the item or make a second crafting roll for a different enchanting item.",
    cost: 500,
    tree: "Enchantment"
}