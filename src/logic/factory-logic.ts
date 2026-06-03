import type { Attack } from "@/models/attack";
import type { Characteristic, Feature } from "@/models/creature";

export class FactoryLogic {
    static createAttack = (data: {name: string, melee?: number, ranged?: number, t2: number, t3: number, characteristic: Characteristic, targets?: number, special_t2?: boolean, special_t3?: boolean}): Attack => {
        return {
            name: data.name,
            range: {melee: data.melee ? data.melee : 0, ranged: data.ranged ? data.ranged : 0},
            damage: {t2: data.t2, t3: data.t3, special_t2: data.special_t2 ? data.special_t2 : false, special_t3: data.special_t3 ? data.special_t3 : false},
            characteristic: data.characteristic,
            targets: data.targets ? data.targets : 1
        }
    }

    static createFeature = (name: string, description: string): Feature => {
        return {
            name: name,
            description: description,
        }
    }
}