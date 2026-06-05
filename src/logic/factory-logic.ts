import type { Attack } from "@/models/attack";
import type { CraftingInfo, CraftingType, ProjectPoints } from "@/models/craftinginfo";
import type { Characteristic, Feature } from "@/models/creature";
import type { MetalWeaponUpgrade } from "@/models/upgrade";

export class FactoryLogic {
    static createAttack = (data: {name: string, melee?: number, ranged?: number, t2: number, t3: number, characteristics: Characteristic[], targets?: number}): Attack => {
        return {
            name: data.name,
            range: {melee: data.melee ? data.melee : 0, ranged: data.ranged ? data.ranged : 0},
            damage: {t2: data.t2, t3: data.t3},
            characteristics: data.characteristics,
            targets: data.targets ? data.targets : 1
        }
    }

    static createFeature = (name: string, description: string): Feature => {
        return {
            name: name,
            description: description,
        }
    }

    static createCraftingInfo = (data: {type: CraftingType, materials: string, craft_mod: number, pp: ProjectPoints}): CraftingInfo => {
        return {
            type: data.type,
            materials: data.materials,
            craft_mod: data.craft_mod,
            pp: data.pp,
        }
    }

    static createMetalWeaponUpgrade = (data: {skill_mod: number, materials: string, goal: number, price: number, t2: number, t3: number}): MetalWeaponUpgrade => {
        return {
            skill_mod: data.skill_mod,
            materials: data.materials,
            goal: data.goal,
            price: data.price,
            t2: data.t2,
            t3: data.t3
        }
    }

    static createCraftInfo = (data: {craft_mod?: number, type: CraftingType, materials: string, base: number, fine?: number, masterwork?: number}): CraftingInfo => {
        return {
            craft_mod: data.craft_mod ? data.craft_mod : 1,
            type: data.type,
            materials: data.materials,
            pp: {
                base: data.base,
                fine: data.fine,
                masterwork: data.masterwork
            }
        }
    }

    static createMetalCraftInfo = (data: {craft_mod?: number, base: number, fine?: number, masterwork?: number}): CraftingInfo => {
        return this.createCraftInfo({
            ...data,
            type: "Blacksmithing",
            materials: "1 iron bar"
        })
    }

    static createWoodCraftInfo = (data: {craft_mod?: number, base: number, fine?: number, masterwork?: number}): CraftingInfo => {
        return this.createCraftInfo({
            ...data,
            type: "Blacksmithing",
            materials: "1 hickory log"
        })
    }

    static createPotionCraftInfo = (data: {craft_mod?: number, base: number, fine?: number, masterwork?: number}): CraftingInfo => {
        return this.createCraftInfo({
            ...data,
            type: "Alchemy",
            materials: "1 vial of any monster's blood",
        })
    }
}