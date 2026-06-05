import type { Trait } from "@/models/trait";

export const LastingConjuration: Trait = {
    name: "Lasting Conjuration",
    description: "When you cast a conjuration spell with a duration listed in UD, add an addtioinal 1 UD to the duration.",
    cost: 500,
    tree: "Conjuration"
}

export const Jumper: Trait = {
    name: "Jumper",
    description: "When you cast a conjuration spell that teleports a target, you can teleport the target an additional number of squares equal to your Mind. This trait stacks with Long Distance Jump.",
    cost: 500,
    tree: "Conjuration"
}

export const SummoningWard: Trait = {
    name: "Summoning Ward",
    description: "Creatures you summon with conjuration spells have AD equal to their power.",
    cost: 500,
    tree: "Conjuration"
}