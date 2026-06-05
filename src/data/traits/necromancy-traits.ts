import type { Trait } from "@/models/trait";

export const SoulAbsorption: Trait = {
    name: "Soul Absorption",
    description: "When you cast a necromancy spell that kills a creature, you gain AD equal to your Mind. This AD disappears when you finish a rest.",
    cost: 500,
    tree: "Necromancy"
}

export const DistantNecromancy: Trait = {
    name: "Distant Necromancy",
    description: "When you cast a ranged necromancy spell, the spell's range increases a number of squares equal to your Mind.",
    cost: 500,
    tree: "Necromancy"
}

export const UndeadFortitude: Trait = {
    name: "Undead Fortitude",
    description: "When you cast a necromancy spell, you don't need to breathe and can't suffocate until the end of the DT. If you are already under this effect, you can choose a willing ally within 5 squares of you to have it.",
    cost: 500,
    tree: "Necromancy"
}
