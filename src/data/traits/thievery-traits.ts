import type { Trait } from "@/models/trait";

export const SiezeTheAdvantage: Trait = {
    name: "Sieze the Advantage",
    description: "When you hit with a weapon attack using Agility that has bonuses outside of skills and characteristics, you deal additional damage equal to twice those bonuses.",
    cost: 500,
    tree: "Thievery"
}

export const SafeCracking: Trait = {
    name: "Safe Cracking",
    description: "When you use lock picks on a test made to pick a lock, you can roll the test twice and choose either result.",
    cost: 500,
    tree: "Thievery"
}

export const Stealthy: Trait = {
    name: "Stealthy",
    description: "When make a test to hide or sneak while you are not wearing armor, you can roll the test twice and choose either result.",
    cost: 500,
    tree: "Thievery"
}