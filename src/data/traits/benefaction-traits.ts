import type { Trait } from "@/models/trait";

export const EnhancedHealing: Trait = {
    name: "Enhanced Healing",
    description: "When you cast a benefaction spell that restores Stamina to a target, the target regains additional Stamina equal to your Mind.",
    cost: 500,
    tree: "Benefaction"
}

export const FirstResponder: Trait = {
    name: "First Responder",
    description: "When you have a benefaction spell that can restore Stamina to a creature equipped and a creature within the spell’s range take damage, you can use your reaction to cast the spell, targeting that creature.",
    cost: 500,
    tree: "Benefaction"
}

export const LastingBenefaction: Trait = {
    name: "Lasting Benefaction",
    description: "When you cast an benefaction spell with a duration listed in UD, add an addtioinal 1 UD to the duration.",
    cost: 500,
    tree: "Benefaction"
}