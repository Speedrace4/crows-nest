import type { Trait } from "@/models/trait";

export const BurnBaby: Trait = {
    name: "Burn Baby",
    description: "When you cast an elemental spell that deals damage to a target, the target takes additional damage equal to your Mind.",
    cost: 500,
    tree: "Elemental"
}

export const HurlTheStorm: Trait = {
    name: "Hurl the Storm",
    description: "When you cast a ranged elemental spell, the spell's range increases a number of squares equal to your Mind.",
    cost: 500,
    tree: "Elemental"
}

export const WaterShield: Trait = {
    name: "Water Shield",
    description: "When you cast an elemental spell, you can harness the magic to surround your body in a water ward and gain AD equal to your Mind. The AD granted by this trait disappears at the end of a rest.",
    cost: 500,
    tree: "Elemental"
}