import type { Characteristic } from "@/models/creature";

export interface Range {
	melee: number;
	ranged: number;
}

export interface Damage {
	t2: number;
    special_t2: boolean;
	t3: number;
    special_t3: boolean;
}

export interface Attack {
	name: string;
    range: Range;
    damage: Damage;
    characteristic: Characteristic;
    targets: number;
}