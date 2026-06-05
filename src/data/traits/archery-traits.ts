import type { Trait } from "@/models/trait";

export const PointBlank: Trait = {
    name: "Point Blank",
    description: "When you make a ranged attack with a bow, you don't suffer the -1 penalty for having an enemy within 1 square of you.",
    cost: 500,
    tree: "Archery"
}

export const RangeFinder: Trait = {
    name: "Range Finder",
    description: "While you wield a bow weapon, it's range increases by 2 squares. This bonus stacks with Greater Range.",
    cost: 500,
    tree: "Archery"
}

export const PronePosition: Trait = {
    name: "Prone Position",
    description: "If you are prone, you gain a +1 bonus on attacks made with crossbows.",
    cost: 500,
    tree: "Archery"
}