import type { Trait } from "@/models/trait";

export const OneMoreSpell: Trait = {
    name: "One More Spell",
    description: "You can cast a spell from a spellbook that has no UD remaining. If you do, the spellbook is destroyed after casting the spell.",
    cost: 500,
    tree: "Leverage"
}

export const MoreForLess: Trait = {
    name: "More for Less",
    description: "When you roll a UD for a piece of mundane equipment that has only 1 die remaining at the start of rolling the item's dice, then you can only lose the UD on a result of 1.",
    cost: 500,
    tree: "Leverage"
}

export const LastingLight: Trait = {
    name: "Lasting Light",
    description: "When you carry a mundane light source, its UD maximum increases by 1.",
    cost: 500,
    tree: "Leverage"
}