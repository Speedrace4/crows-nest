import type { Trait } from "@/models/trait";

export const DoubleDuty: Trait = {
    name: "Double Duty",
    description: "When you work on crafting a blacksmithing item as part of the Craft Equipment rest activity, you can make two crafting rolls for the item or make a second crafting roll for a different blacksmithing item.",
    cost: 500,
    tree: "Blacksmithing"
}

export const ArmorExpert: Trait = {
    name: "Armor Expert",
    description: "When you make a crafting roll for an armor item, double the result to determine the number of crafting points added to the project.",
    cost: 500,
    tree: "Blacksmithing"
}

export const WeaponExpert: Trait = {
    name: "Weapon Expert",
    description: "When you make a crafting roll for a weapon item, double the result to determine the number of crafting points added to the project.",
    cost: 500,
    tree: "Blacksmithing"
}