import type { Weapon } from "@/models/weapon";
import { QualityData } from "../quality-data";
import { FactoryLogic } from "@/logic/factory-logic";

export const Hammer : Weapon = {
    name: "Hammer",
    range: {melee: 1, ranged: 5},
    damage: {t2: 2, t3: 4},
    characteristics: ["Strength", "Agility"],
    damageCharacteristics: ["Strength", "Agility"],
    targets: 1,
    price: 10,
    stack: 2,
    slots: 1,
    type: "Bashing",
    qualities: [QualityData.Light, QualityData.Pummeling],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 5,
    })
}

export const Mace : Weapon = {
    name: "Mace",
    range: {melee: 1, ranged: 0},
    damage: {t2: 3, t3: 6},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 12,
    stack: 1,
    slots: 1,
    type: "Bashing",
    qualities: [QualityData.Pummeling],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Knife : Weapon = {
    name: "Knife",
    range: {melee: 1, ranged: 5},
    damage: {t2: 1, t3: 4},
    characteristics: ["Strength", "Agility"],
    damageCharacteristics: ["Strength", "Agility"],
    targets: 1,
    price: 10,
    stack: 2,
    slots: 1,
    type: "Slashing",
    qualities: [QualityData.Light, QualityData.Disengage, QualityData.Parry],
    notes: "Parry 2",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 5,
    })
}

export const Sword : Weapon = {
    name: "Sword",
    range: {melee: 1, ranged: 0},
    damage: {t2: 3, t3: 6},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 12,
    stack: 1,
    slots: 1,
    type: "Slashing",
    qualities: [QualityData.Disengage, QualityData.Parry],
    notes: "Parry 4",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Handaxe : Weapon = {
    name: "Handaxe",
    range: {melee: 1, ranged: 5},
    damage: {t2: 2, t3: 5},
    characteristics: ["Strength", "Agility"],
    damageCharacteristics: ["Strength", "Agility"],
    targets: 1,
    price: 10,
    stack: 2,
    slots: 1,
    type: "Chopping",
    qualities: [QualityData.Dismember, QualityData.Light],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 5,
    })
}

export const Axe : Weapon = {
    name: "Axe",
    range: {melee: 1, ranged: 0},
    damage: {t2: 3, t3: 7},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 12,
    stack: 1,
    slots: 1,
    type: "Chopping",
    qualities: [QualityData.Dismember],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Stiletto : Weapon = {
    name: "Stiletto",
    range: {melee: 1, ranged: 5},
    damage: {t2: 2, t3: 5},
    characteristics: ["Strength", "Agility"],
    damageCharacteristics: ["Strength", "Agility"],
    targets: 1,
    price: 10,
    stack: 2,
    slots: 1,
    type: "Stabbing",
    qualities: [QualityData.Brutal, QualityData.Light],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 5,
    })
}

export const Spear : Weapon = {
    name: "Spear",
    range: {melee: 1, ranged: 0},
    damage: {t2: 3, t3: 7},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 12,
    stack: 1,
    slots: 1,
    type: "Stabbing",
    qualities: [QualityData.Brutal],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Flail : Weapon = {
    name: "Flail",
    range: {melee: 2, ranged: 0},
    damage: {t2: 3, t3: 6},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 15,
    stack: 1,
    slots: 2,
    type: "Bashing",
    qualities: [QualityData.Pummeling],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Maul : Weapon = {
    name: "Maul",
    range: {melee: 1, ranged: 0},
    damage: {t2: 4, t3: 8},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 15,
    stack: 1,
    slots: 2,
    type: "Bashing",
    qualities: [QualityData.Pummeling],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Glaive : Weapon = {
    name: "Glaive",
    range: {melee: 2, ranged: 0},
    damage: {t2: 3, t3: 6},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 15,
    stack: 1,
    slots: 2,
    type: "Slashing",
    qualities: [QualityData.Disengage, QualityData.Parry],
    notes: "Parry 6",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Greatsword : Weapon = {
    name: "Greatsword",
    range: {melee: 1, ranged: 0},
    damage: {t2: 4, t3: 8},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 15,
    stack: 1,
    slots: 2,
    type: "Slashing",
    qualities: [QualityData.Disengage, QualityData.Parry],
    notes: "Parry 6",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Halberd : Weapon = {
    name: "Halberd",
    range: {melee: 2, ranged: 0},
    damage: {t2: 3, t3: 7},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 15,
    stack: 1,
    slots: 2,
    type: "Chopping",
    qualities: [QualityData.Dismember],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Greataxe : Weapon = {
    name: "Greataxe",
    range: {melee: 1, ranged: 0},
    damage: {t2: 4, t3: 9},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 15,
    stack: 1,
    slots: 2,
    type: "Chopping",
    qualities: [QualityData.Dismember],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Pike : Weapon = {
    name: "Pike",
    range: {melee: 2, ranged: 0},
    damage: {t2: 3, t3: 7},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 15,
    stack: 1,
    slots: 2,
    type: "Stabbing",
    qualities: [QualityData.Brutal],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Warpick : Weapon = {
    name: "Warpick",
    range: {melee: 1, ranged: 0},
    damage: {t2: 4, t3: 9},
    characteristics: ["Strength"],
    damageCharacteristics: ["Strength"],
    targets: 1,
    price: 15,
    stack: 1,
    slots: 2,
    type: "Stabbing",
    qualities: [QualityData.Brutal],
    notes: "",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 10,
    })
}

export const Shortbow : Weapon = {
    name: "Shortbow",
    range: {melee: 0, ranged: 10},
    damage: {t2: 1, t3: 2},
    characteristics: ["Agility"],
    damageCharacteristics: ["Agility"],
    targets: 1,
    price: 10,
    stack: 1,
    slots: 1,
    type: "Bow",
    qualities: [QualityData.Cumbersome],
    notes: "",
    craft_info: FactoryLogic.createWoodCraftInfo({
        base: 5,
    })
}

export const Longbow : Weapon = {
    name: "Longbow",
    range: {melee: 0, ranged: 20},
    damage: {t2: 2, t3: 3},
    characteristics: ["Agility"],
    damageCharacteristics: ["Agility"],
    targets: 1,
    price: 12,
    stack: 1,
    slots: 2,
    type: "Bow",
    qualities: [],
    notes: "",
    craft_info: FactoryLogic.createWoodCraftInfo({
        base: 10,
    })
}

export const Crossbow : Weapon = {
    name: "Longbow",
    range: {melee: 0, ranged: 15},
    damage: {t2: 3, t3: 6},
    characteristics: ["Agility"],
    damageCharacteristics: ["Agility"],
    targets: 1,
    price: 15,
    stack: 1,
    slots: 2,
    type: "Bow",
    qualities: [QualityData.Reload],
    notes: "",
    craft_info: FactoryLogic.createWoodCraftInfo({
        base: 10,
    })
}

export const QuiverOf20Arrows : Weapon = {
    name: "Quiver Of 20 Arrows",
    range: {melee: 0, ranged: 0},
    damage: {t2: 0, t3: 0},
    characteristics: [],
    damageCharacteristics: [],
    targets: 1,
    price: 5,
    stack: 1,
    slots: 1,
    type: "Bow",
    qualities: [],
    notes: "Ammunition for shortbows and longbows",
    craft_info: FactoryLogic.createWoodCraftInfo({
        base: 5,
    })
}

export const Pickaxe : Weapon = {
    name: "Pickaxe",
    range: {melee: 0, ranged: 0},
    damage: {t2: 0, t3: 0},
    characteristics: [],
    damageCharacteristics: [],
    targets: 1,
    price: 5,
    stack: 1,
    slots: 1,
    type: "Stabbing",
    qualities: [],
    notes: "TO BE ADDED",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 5,
    })
}

export const Shovel : Weapon = {
    name: "Shovel",
    range: {melee: 0, ranged: 0},
    damage: {t2: 0, t3: 0},
    characteristics: [],
    damageCharacteristics: [],
    targets: 1,
    price: 5,
    stack: 1,
    slots: 1,
    type: "Bashing",
    qualities: [],
    notes: "TO BE ADDED",
    craft_info: FactoryLogic.createMetalCraftInfo({
        base: 5,
    })
}