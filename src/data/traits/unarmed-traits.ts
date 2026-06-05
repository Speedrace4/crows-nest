import type { Trait } from "@/models/trait";

export const ThrowStuff: Trait = {
    name: "Throw Stuff",
    description: "When you use an improvised weapon that occupies 1 slot, it has a range of melee 1/range 5.",
    cost: 500,
    tree: "Unarmed"
}

export const PackAPunch: Trait = {
    name: "Pack a Punch",
    description: "When you get a tier 3 result with an unarmed or improvised weapon attack, the attack deals additional damage equal to your Agility or Strength.",
    cost: 500,
    tree: "Unarmed"
}

export const ExtraPush: Trait = {
    name: "Extra Push",
    description: "While you have at least 1 hand slot free and push a target with the Knockback maneuver, you can push them 1 additional square.",
    cost: 500,
    tree: "Unarmed"
}