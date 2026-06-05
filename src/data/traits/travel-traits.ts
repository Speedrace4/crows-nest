import type { Trait } from "@/models/trait";

export const ISpy: Trait = {
    name: "I Spy",
    description: "When you make a test related to the scout travel role while carrying a spyglass, you can roll the test twice and choose either result.",
    cost: 500,
    tree: "Travel"
}

export const Orienteering: Trait = {
    name: "Orienteering",
    description: "When you make a test related to the guide travel role while carrying a compass, you can roll the test twice and choose either result.",
    cost: 500,
    tree: "Travel"
}

export const ForagingExpert: Trait = {
    name: "Foraging Expert",
    description: "When you make a test related to the forager travel roll and gain at least 1 ration, you gain 1 additional ration. This trait stacks with Food Finder.",
    cost: 500,
    tree: "Travel"
}