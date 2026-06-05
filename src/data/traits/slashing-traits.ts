import type { Trait } from "@/models/trait";

export const FinesseTheBlade: Trait = {
    name: "Finesse the Blade",
    description: "You can use Agility instead of Strength when making an attack and dealing damage with a sword.",
    cost: 500,
    tree: "Slashing"
}

export const Quickstep: Trait = {
    name: "Quickstep",
    description: "When you use the Shift maneuver while wielding a slashing weapon, you can move 2 squares instead of 3.",
    cost: 500,
    tree: "Slashing"
}

export const Swordplay: Trait = {
    name: "Swordplay",
    description: "You can add your Strength to the Parry quality of any slashing weapon you wield.",
    cost: 500,
    tree: "Slashing"
}