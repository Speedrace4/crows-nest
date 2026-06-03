import { FactoryLogic } from "../../../logic/factory-logic";
import type { Creature } from "@/models/creature";

export const BloodCreatureA: Creature = {
    common_names: ["creep", "red drool", "spindleclaw"],
    description: "These blood creatures hunt in packs, dropping from above onto prey. They drool bright red saliva when food is near.",
    name: "Blood Creature A",
    size: "Small",
    type: "Blood",
    power: 1,
    stamina: 5,
    speed: {walk: 6, climb: 6},
    slots: 0,
    characteristics: {agility: 1, mind: -2, strength: 0},
    attacks: [
        FactoryLogic.createAttack("Claws", 1, 0, 2, 3, "Agility")
    ],
    features: [
        FactoryLogic.createFeature("Drop Attack", "This creature treats falls as 10 squares shorter when calculating fall damage. After falling and taking no damage, they gain a +1 bonus on attacks and damage until the end of the turn.")
    ]
}