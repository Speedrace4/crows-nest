import type { Armor } from "./armor";
import type { Characteristic, Creature } from "./creature";
import type { Gear } from "./gear";
import type { Skill } from "./skill";
import type { Trait } from "./trait";

export interface Background {
    name: string;
    description: string;
    characteristic: Characteristic[];
    stamina: number;
    trait: Trait;
    die_roll: number;
    skills: Skill[];
    equipment: Gear[];
    armor?: Armor[];
    pets?: Creature[];
    gold?: number;
}