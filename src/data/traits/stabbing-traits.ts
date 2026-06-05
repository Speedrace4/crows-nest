import type { Trait } from "@/models/trait";

export const Javelin: Trait = {
    name: "Javelin",
    description: "You can make a ranged attack with a spear with a range of range 5.",
    cost: 500,
    tree: "Stabbing"
}

export const BuryThePoint: Trait = {
    name: "Bury the Point",
    description: "When you hit a creature with a melee stabbing weapon attack, you can deal twice as much damage as you normally would, but the weapon becomes useless until you use a rest activity to fix it.",
    cost: 500,
    tree: "Stabbing"
}

export const Stabathon: Trait = {
    name: "Stabathon",
    description: "When you score a crit with a stabbing weapon, any other attacks you make one the same turn gain a +2 bonus.",
    cost: 500,
    tree: "Stabbing"
}