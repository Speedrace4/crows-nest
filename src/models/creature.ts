import type { Attack } from "@/models/attack";

export type CreatureSize = "Tiny" | "Small" | "Medium" | "Large" | "Holy ****"

export type CreatureType = "Animal" | "Blood" | "Demon" | "Holy" | "Undead"

export type Characteristic = "Agility" | "Mind" | "Strength"

export interface Characteristics {
    agility: number;
    mind: number;
    strength: number;
}

export interface Speed {
    walk: number;
    swim?: number;
    climb?: number;
    fly?: number;
}

export interface Feature {
    name: string;
    description: string;
}

export interface Creature {
    name: string;
    description: string;
    size: CreatureSize;
    type: CreatureType;
    power: number;
    stamina: number;
    speed: Speed;
    slots: number;
    characteristics: Characteristics;
    attacks: Attack[];
    features: Feature[];
    common_names: string[];
}