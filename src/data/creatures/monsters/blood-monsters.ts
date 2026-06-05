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
        FactoryLogic.createAttack({
            name: "Claws",
            melee: 1,
            t2: 2,
            t3: 3,
            characteristics: ["Agility"]
        })
    ],
    features: [
        FactoryLogic.createFeature("Drop Attack", "This creature treats falls as 10 squares shorter when calculating fall damage. After falling and taking no damage, they gain a +1 bonus on attacks and damage until the end of the turn.")
    ]
}

export const BloodCreatureB: Creature = {
    common_names: ["blood spider", "mouth eyes"],
    description: "An orb of tendrils split by a toothy maw that parts to reveal glowing red eyes, this blood creature clings to surfaces and their enemies.",
    name: "Blood Creature B",
    size: "Small",
    type: "Blood",
    power: 3,
    stamina: 15,
    speed: {walk: 6, climb: 6},
    slots: 0,
    characteristics: {agility: 2, mind: -1, strength: 1},
    attacks: [
        FactoryLogic.createAttack({
            name: "Bite",
            melee: 1,
            t2: 3,
            t3: 4,
            characteristics: ["Agility"]
        }),
        FactoryLogic.createAttack({
            name: "Tendril",
            melee: 1,
            t2: 3,
            t3: 4,
            characteristics: ["Agility"]
        })
    ],
    features: [
        FactoryLogic.createFeature("Tendril Snare", "When this creature gets a tier 3 result on a tendril attack against a Medium or smaller target, the target is grabbed. While the target is grabbed this way, this creature's bite attack deals an addtional 2 dam to them, and this creature can use a maneuver to deal 2 damage to the target.")
    ]
}

export const BloodCreatureC: Creature = {
    common_names: ["blood brute", "tiny arms"],
    description: "A malleable creature that most often resides in somewhat humanoid form, this monster has the power to knock down doors to get at prey but prefers to flow through them.",
    name: "Blood Creature C",
    size: "Large",
    type: "Blood",
    power: 8,
    stamina: 40,
    speed: {walk: 5, climb: 5},
    slots: 0,
    characteristics: {agility: 0, mind: 0, strength: 2},
    attacks: [
        FactoryLogic.createAttack({
            name: "Punch",
            melee: 1,
            t2: 4,
            t3: 8,
            characteristics: ["Strength"]
        }),
        FactoryLogic.createAttack({
            name: "Clot",
            ranged: 10,
            t2: 3,
            t3: 7,
            characteristics: ["Strength"]
        })
    ],
    features: [
        FactoryLogic.createFeature("Malleable", "This creature can fit through spaces as small as 1 inch wide and never needs to squeeze.")
    ]
}