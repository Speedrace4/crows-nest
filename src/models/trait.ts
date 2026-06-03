export type TraitTree = "Alchemy" | "Alteration" | "Archery" | "Armor" | "Bashing" | "Benefaction" | "Blacksmithing" | "Camping" | "Chopping" | "Conjuration" | "Elemental" | "Enchantment" | "Illusion" | "Knowledge" | "Leverage" | "Necromancy" | "Pets" | "Reputation" | "Slashing" | "Stabbing" | "Thievery" | "Travel" | "Unarmed"

export interface Trait {
    name: string;
    description: string;
    cost: number;
    tree: TraitTree;
}