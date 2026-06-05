import type { Trait } from "@/models/trait";

export const Cram: Trait = {
    name: "Cram",
    description: "When you read a lore book as a rest activity, you can read a second lore book as part of the same activity.",
    cost: 500,
    tree: "Knowledge"
}

export const Schematics: Trait = {
    name: "Schematics",
    description: "You can sketch a room with a journal, quill, and inkpot. As a rest activity, you can study the sketch. You gain a +2 bonus on tests made to interact with the room. It lasts until you finish a rest.",
    cost: 500,
    tree: "Knowledge"
}

export const ImprovisedEquipment: Trait = {
    name: "Improvised Equipment",
    description: "As a rest activity, you create an object that can be used as any mundane item. After using the object once to complete a task (per the Ref), it is destroyed. If the item has a duration, it's duration becomes 1 DT.",
    cost: 500,
    tree: "Knowledge"
}