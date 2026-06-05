import type { Trait } from "@/models/trait";

export const InterposingArm: Trait = {
    name: "Interposing Arm",
    description: "When you wield a shield with at least 1 AD and a creature makes a weapon attack against a creature adjacent to you, you can use your reaction to cause the damage to apply your shield before the target.",
    cost: 500,
    tree: "Armor"
}

export const Stalwart: Trait = {
    name: "Stalwart",
    description: "While wearing armor, the distance you can be force moved is reduced by 1, and you can’t be knocked prone by tier 1 and 2 attack results or by tier 2 and 3 RR results.",
    cost: 500,
    tree: "Armor"
}

export const StandStrong: Trait = {
    name: "Stand Strong",
    description: "While you wear armor, you gain a +1 bonus on Strength RRs.",
    cost: 500,
    tree: "Armor"
}