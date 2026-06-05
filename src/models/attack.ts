import type { Characteristic } from "@/models/creature";

export interface Range {
	melee: number;
	ranged: number;
}

export interface Damage {
	t2: number;
	t3: number;
}

export interface Attack {
	name: string;
    range: Range;
    damage: Damage;
    characteristics: Characteristic[];
    targets: number;
    damageCharacteristics?: Characteristic[];
}