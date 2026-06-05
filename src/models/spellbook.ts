import type { Gear } from "./gear";

export type SpellDiscipline = "Alteration" | "Benefaction" | "Conjuration" | "Elemental" | "Illusion" | "Necromancy"

export interface Spellbook extends Gear {
    rank: number;
    discipline: SpellDiscipline;
}