import type { Quality } from "@/models/quality"

export const Bashing : Quality = {
    name: "Bashing",
    description: ""
}

export const Brutal: Quality = {
    name: "Brutal",
    description: "When you get a crit on an attack with this weapon, you deal twice as much damage with the attack as your normally would."
}

export const Cumbersome: Quality = {
    name: "Cumbersome",
    description: "The weapon only occupies 1 slot on your backpack or belt but requires 2 hand slots to wield."
}

export const Disengage: Quality = {
    name: "Disengage",
    description: "When you take the Shift maneuver while wielding this weapon, you can move 1 additional square as part of the maneuver. If you wield two weapons with this quality, the benefits stack."
}

export const Dismember: Quality = {
    name: "Dismember",
    description: "When you score a crit on an attack made with this weapon, it removes one of the target's limbs. Roll on the Dismember table to determine the limb removed."
}

export const Light: Quality = {
    name: "Light",
    description: "When you hit with a melee attack while weilding two light weapons, you deal additonal damage equal to the unused weapon's tier 2 result (without the inclusion of your Agility or Strength as part of the damage). While a hand slot is empty, it counts as a light weapon that can be used to make unarmed strikes."
}

export const Parry: Quality = {
    name: "Parry",
    description: "While you wield this weapon, you can use it to absorb damage as if it were a shield. The weapon has AD equivalent to X. When the weapon’s AD is 0, it takes a -1 damage penalty. You can repair the weapon as if it were a shield using the Repair Armor rest activity."
}

export const Pummeling: Quality = {
    name: "Pummeling",
    description: "When you get a tier 3 result with an attack made with this weapon against a creature who is your size or smaller, you can push them 1 square. When you get a crit on an attack with this weapon, you can knock a target of your size or smaller prone."
}

export const Reload: Quality = {
    name: "Reload",
    description: "You must use a maneuver to load 1 piece of ammunition into this weapon before it can be used to attack. After being used to attack, it must be loaded again before it can be used to make another attack."
}