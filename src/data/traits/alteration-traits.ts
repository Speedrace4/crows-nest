import type { Trait } from "@/models/trait";

export const LastingAlteration: Trait = {
    name: "Lasting Alteration",
    description: "When you cast an alteration spell with a duration listed in UD, add an addtioinal 1 UD to the duration.",
    cost: 500,
    tree: "Alteration"
}

export const GrowScales: Trait = {
    name: "Grow Scales",
    description: "When you cast an alteration spell, you can harness the magic to grow temporary scales on your body and gain AD equal to your Mind. The AD granted by this trait disappears at the end of a rest.",
    cost: 500,
    tree: "Alteration"
}

export const AlterationStone: Trait = {
    name: "Alteration Stone",
    description: "As a rest activity, you can create an alteration stone (which has an equipment card). This stone disappears if you create a new one.",
    cost: 500,
    tree: "Alteration"
}