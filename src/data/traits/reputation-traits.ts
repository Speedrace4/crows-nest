import type { Trait } from "@/models/trait";

export const CallDaddy: Trait = {
    name: "Call Daddy",
    description: "Choose a merchant in your village. When you need to roll for an item's availability from that merchant, the AO increases by 5%. You can change your choice of merchant once every cycle.",
    cost: 500,
    tree: "Reputation"
}

export const Discount: Trait = {
    name: "Discount",
    description: "Choose a merchant in your village. You can purchase items in that merchant's shop for 5% cheaper. You can change your choice of merchant once every cycle.",
    cost: 500,
    tree: "Reputation"
}

export const FavoriteCustomer: Trait = {
    name: "Favorite Customer",
    description: "Choose a merchant who crafts items in your village. When that merchant crafts an item for you, they make two crafting rolls a day instead of one. You can change your choice of merchant once every cycle.",
    cost: 500,
    tree: "Reputation"
}