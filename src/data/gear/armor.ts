import type { Armor } from "@/models/armor";


export const LightArmor : Armor = {
    type: "Light",
    slots: 2,
    ad: 5,
    price: 50
}

export const MediumArmor : Armor = {
    type: "Medium",
    slots: 3,
    ad: 10,
    price: 150
}

export const HeavyArmor : Armor = {
    type: "Heavy",
    slots: 4,
    ad: 15,
    price: 400
}

export const Shield : Armor = {
    type: "Shield",
    slots: 1,
    ad: 5,
    price: 15
}