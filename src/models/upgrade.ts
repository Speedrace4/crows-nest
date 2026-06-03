export interface Upgrade {
    price: number;
    skill_mod: number;
    materials: string;
    goal: number;
}

export interface ArmorUpgrade extends Upgrade {
    ad: number;
}

export interface MetalWeaponUpgrade extends Upgrade {
    t2: number;
    t3: number;
}

export interface WoodWeaponUpgrade extends Upgrade {
    range: number;
}