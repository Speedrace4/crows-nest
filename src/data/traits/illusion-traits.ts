import type { Trait } from "@/models/trait";

export const LastingIllusion: Trait = {
    name: "Lasting Illusion",
    description: "When you cast an illusion spell with a duration listed in UD, add an addtioinal 1 UD to the duration.",
    cost: 500,
    tree: "Illusion"
}

export const LongDistanceIllusion: Trait = {
    name: "Long-Distance Illusion",
    description: "When you cast a ranged illusion spell, the spell's range increases a number of squares equal to your Mind.",
    cost: 500,
    tree: "Illusion"
}

export const FreeLight: Trait = {
    name: "Free Light",
    description: "When you cast an illusion spell, you can choose to have an object held or carried by your or a willing ally glow with 0/5 light until the end of the DT.",
    cost: 500,
    tree: "Illusion"
}