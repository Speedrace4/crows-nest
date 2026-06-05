import type { Trait } from "@/models/trait";

export const AxeHurler: Trait = {
    name: "Axe Hurler",
    description: "While you wield a handaxe, it's non-melee range increases by 2 squares. This bonus stacks with Mighty Arm.",
    cost: 500,
    tree: "Chopping"
}

export const HoneTheBlade: Trait = {
    name: "Hone the Blade",
    description: "As a rest activity, you can sharpen the blade of up to two chopping weapons. These weapons gain a +1 damage bonus that lasts until you get a tier 1 result on an attack with the weapon or you finish a rest.",
    cost: 500,
    tree: "Chopping"
}

export const ChopEmDown: Trait = {
    name: "Chop 'Em Down",
    description: "When you roll on the Dismember table after scoring a crit with a chopping weapon, roll twice and choose the result.",
    cost: 500,
    tree: "Chopping"
}