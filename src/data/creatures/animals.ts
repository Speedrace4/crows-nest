import { FactoryLogic } from "../../logic/factory-logic";
import type { Creature } from "@/models/creature";

export const Bear: Creature = {
    name: "Bear",
    size: "Large",
    type: "Animal",
    power: 6,
    stamina: 30,
    speed: {walk: 6},
    slots: 0,
    characteristics: {agility: 0, mind: -3, strength: 2},
    attacks: [
        FactoryLogic.createAttack({
            name: "Bite",
            melee: 1,
            t2: 4,
            t3: 6,
            characteristic: "Strength"
        }),
        FactoryLogic.createAttack({
            name: "Claws",
            melee: 1,
            t2: 2,
            t3: 3,
            characteristic: "Strength",
            targets: 2
        })
    ],
    features: [
        FactoryLogic.createFeature("No Dim Light Penalty", "Dim light imposes no penalties for this creature.")
    ]
}

export const Cat: Creature = {
    name: "Cat",
    pet: true,
    size: "Tiny",
    type: "Animal",
    power: 0,
    stamina: 4,
    speed: {walk: 5},
    slots: 1,
    characteristics: {agility: 1, mind: -3, strength: 0},
    attacks: [
        FactoryLogic.createAttack({
            name: "Claws",
            melee: 1,
            t2: 2,
            t3: 3,
            characteristic: "Agility"
        })
    ],
    features: [
        FactoryLogic.createFeature("No Dim Light Penalty", "Dim light imposes no penalties for this creature.")
    ]
}

export const Dog: Creature = {
    name: "Dog",
    pet: true,
    size: "Medium",
    type: "Animal",
    power: 2,
    stamina: 9,
    speed: {walk: 7},
    slots: 1,
    characteristics: {agility: 1, mind: -3, strength: 0},
    attacks: [
        FactoryLogic.createAttack({
            name: "Bite",
            melee: 1,
            t2: 2,
            t3: 4,
            characteristic: "Agility"
        })
    ],
    features: [
        FactoryLogic.createFeature("No Dim Light Penalty", "Dim light imposes no penalties for this creature.")
    ]
}

export const Goat: Creature = {
    name: "Goat",
    pet: true,
    size: "Medium",
    type: "Animal",
    power: 2,
    stamina: 8,
    speed: {walk: 5},
    slots: 2,
    characteristics: {agility: 0, mind: -3, strength: 1},
    attacks: [
        FactoryLogic.createAttack({
            name: "Gore",
            melee: 1,
            t2: 2,
            t3: 4,
            characteristic: "Strength"
        })
    ],
    features: [
        FactoryLogic.createFeature("No Dim Light Penalty", "Dim light imposes no penalties for this creature.")
    ]
}

export const Horse: Creature = {
    name: "Horse",
    pet: true,
    size: "Large",
    type: "Animal",
    power: 4,
    stamina: 10,
    speed: {walk: 8},
    slots: 10,
    characteristics: {agility: 0, mind: -3, strength: 1},
    attacks: [
        FactoryLogic.createAttack({
            name: "Hooves",
            melee: 1,
            t2: 3,
            t3: 5,
            characteristic: "Strength"
        })
    ],
    features: []
}

export const Rat: Creature = {
    name: "Rat",
    size: "Tiny",
    type: "Animal",
    power: 0,
    stamina: 2,
    speed: {walk: 4, climb: 4},
    slots: 0,
    characteristics: {agility: 1, mind: -3, strength: 0},
    attacks: [
        FactoryLogic.createAttack({
            name: "Bite",
            melee: 1,
            t2: 1,
            t3: 2,
            characteristic: "Agility"
        })
    ],
    features: [
        FactoryLogic.createFeature("No Dim Light Penalty", "Dim light imposes no penalties for this creature.")
    ]
}

export const Wolf: Creature = {
    name: "Wolf",
    size: "Medium",
    type: "Animal",
    power: 3,
    stamina: 15,
    speed: {walk: 7},
    slots: 0,
    characteristics: {agility: 2, mind: -3, strength: 0},
    attacks: [
        FactoryLogic.createAttack({
            name: "Bite",
            melee: 1,
            t2: 3,
            t3: 4,
            characteristic: "Agility"
        })
    ],
    features: [
        FactoryLogic.createFeature("No Dim Light Penalty", "Dim light imposes no penalties for this creature.")
    ]
}