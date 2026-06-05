import type { Trait } from "@/models/trait";

export const PushEmBack: Trait = {
    name: "Push 'Em Back",
    description: "When you get a tier 3 result on an attack with a bashing and pummeling weapon, you push the target 1 addtional square. This trait statcks with Further Back.",
    cost: 500,
    tree: "Bashing"
}

export const Destructive: Trait = {
    name: "Destructive",
    description: "You deal double damage to objects with bashing weapon attacks.",
    cost: 500,
    tree: "Bashing"
}

export const TrippingCounter: Trait = {
    name: "Tripping Counter",
    description: "When you counter with a bashing weapon against a creature who got a doom result on the triggering attack, you knock the target prone regardless of their size.",
    cost: 500,
    tree: "Bashing"
}