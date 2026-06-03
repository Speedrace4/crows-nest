import type { Attack } from "@/models/attack";
import type { Characteristic, Feature } from "@/models/creature";

export class FactoryLogic {
    static createAttack = (name: string, melee: number, ranged: number, t2: number, t3: number, characteristic: Characteristic, special_t2: boolean = false, special_t3: boolean = false): Attack => {
        return {
            name: name,
            range: {melee: melee, ranged: ranged},
            damage: {t2: t2, t3: t3, special_t2: special_t2, special_t3: special_t3},
            characteristic: characteristic
        }
    }

    static createFeature = (name: string, description: string): Feature => {
        return {
            name: name,
            description: description,
        }
    }
}