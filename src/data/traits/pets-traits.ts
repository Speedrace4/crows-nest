import type { Trait } from "@/models/trait";

export const Buddy: Trait = {
    name: "Buddy",
    description: "As a rest activity, choose a number of pets you own equal to your Mind (minimum 1). You gain a +2 bonus on Mind tests made to interact with those pets until you use the activity again.",
    cost: 500,
    tree: "Pets"
}

export const Tricks: Trait = {
    name: "Tricks",
    description: "While you own a pet, they gain a +1 bonus to one of the following skills: Climb, Endurance, Hide, Jump, Lift, Search, Sneak, or Swim. This trait stacks with Extra Tricks.",
    cost: 500,
    tree: "Pets"
}

export const MountedSpeed: Trait = {
    name: "Mounted Speed",
    description: "While you ride a pet you own, their speed is increased by 1.",
    cost: 500,
    tree: "Pets"
}