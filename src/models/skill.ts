export type SkillType = "General" | "Spellcasting" | "Weapon"

export interface Skill {
    name: string;
    description: string;
    type: SkillType;
}