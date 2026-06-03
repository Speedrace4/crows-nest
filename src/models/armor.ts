import type { ArmorUpgrade } from "@/models/upgrade"

export type ArmorType = Light | Medium | Heavy | Shield

export interface Light {
    name: "Light";
    slots: 2;
    ad: 5;
    price: 50;
}

export interface Medium {
    name: "Medium";
    slots: 3;
    ad: 10;
    price: 150;
}

export interface Heavy {
    name: "Heavy";
    slots: 4;
    ad: 15;
    price: 400;
}

export interface Shield {
    name: "Shield";
    slots: 1;
    ad: 5;
    price: 15;
}

export interface Armor {
    name: string;
    type: ArmorType;
    upgrade: ArmorUpgrade;
}