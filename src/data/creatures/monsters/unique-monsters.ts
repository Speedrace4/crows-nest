import { FactoryLogic } from "../../../logic/factory-logic";
import type { Creature } from "@/models/creature";

export const RingCollector: Creature = {
    description: "The Ring Collector is a creature gifted with supernatural strength and speed who is obsessed with finding and collecting magic rings. They invaded and wiped out several villages during the Necromancer War in pursuit of rings.\nThe Ring Collector is Namlin, a farmer who lost his family to a fire during the war. He knew of a legendary ring that could bring people back from the dead and went about finding as many magic rings as he could. Each warped him. One even erased his memory, but not his obsession to find magic rings, and so now he has no purpose beyond the hunt.",
    name: "Ring Collector",
    size: "Medium",
    type: "Unique",
    power: 20,
    stamina: 100,
    speed: {walk: 7},
    slots: 0,
    characteristics: {agility: 4, mind: 4, strength: 3},
    attacks: [
        FactoryLogic.createAttack({
            name: "Kneel",
            ranged: 10,
            t2: 8,
            t3: 14,
            characteristics: ["Agility"]
        }),
        FactoryLogic.createAttack({
            name: "Sword",
            melee: 1,
            t2: 7,
            t3: 12,
            characteristics: ["Strength"]
        }),
        FactoryLogic.createAttack({
            name: "Kneel",
            melee: 1,
            t2: 4,
            t3: 8,
            characteristics: ["Agility"],
            targets: 2
        })
    ],
    features: [
        FactoryLogic.createFeature("Literally Kneel", "When this creature gets a tier 3 result with a Kneel attack, the target falls prone."),
        FactoryLogic.createFeature("Exploding Sword", "When this creature's sword attack kills a creature, the target explodes and deals 1d6 dam to each creature within 1 square."),
        FactoryLogic.createFeature("Extra Action", "This creature can take one additional action or maneuver on their combat turn."),
        FactoryLogic.createFeature("Vanish (1/Rest)", "This creature can teleport up to 50 miles to a location they have visited before regardless of line of effect."),
        FactoryLogic.createFeature("Ring Sense", "This creature knows the exact location of any magic ring within 20 squares of them regardless of line of effect.")
    ]
}