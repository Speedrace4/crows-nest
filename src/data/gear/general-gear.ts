import { FactoryLogic } from "@/logic/factory-logic";
import type { Gear } from "@/models/gear";

export const HolySymbol : Gear = {
    name: "Holy Symbol",
    description: "A symbol of your god. Can be worn in the neck slot, but isn’t magic.",
    price: 15,
    stack: 2,
}

export const Torch : Gear = {
    name: "Torch",
    price: 2,
    stack: 2,
    crafting_info: FactoryLogic.createCraftingInfo({
        type: "Alchemy",
        craft_mod: 1,
        materials: "1 hickory log",
        pp: {
            base: 5,
            fine: 20,
            masterwork: 50
        }
    })
}

export const OilFlask : Gear = {
    name: "Oil Flask",
    description: "Pint of oil. Consume to refuel a lantern.",
    price: 5,
    stack: 2,
    crafting_info: FactoryLogic.createCraftingInfo({
        type: "Alchemy",
        craft_mod: 1,
        materials: "1 of any small or larger creature's fat",
        pp: {
            base: 5
        }
    })
}

export const Lantern : Gear = {
    name: "Lantern",
    description: "Pint of oil. Consume to refuel a lantern.",
    price: 25,
    stack: 2
}

export const AnimalFeed : Gear = {
    name: "Animal Feed",
    description: "A day's worth of food for a pet. Must be consumed during a rest to get the benefit of resting.",
    price: 1,
    stack: 6
}

export const Ration : Gear = {
    name: "Ration",
    description: "A day's worth of food. Can be consumed to avoid starvation and get the benefits of a rest.",
    price: 2,
    stack: 6
}

export const HeartyRation : Gear = {
    name: "Hearty Ration",
    description: "When you consume this ration during a rest, you remove 1 additional wound.",
    price: 5,
    stack: 6
}

export const Rope : Gear = {
    name: "Rope",
    description: "50 feet of rope. If secured, no test is required to climb.",
    price: 2,
    stack: 1,
    fine: {
        price: 500,
        description: "100 feet of strong, light rope."
    },
    masterwork: {
        price: 1000,
        description: "150 feet of strong, light rope."
    },
}

export const BallBearings : Gear = {
    name: "Ball Bearings",
    description: "A bag of 1,000.",
    price: 5,
    stack: 2
}

export const Bedroll : Gear = {
    name: "Bedroll",
    description: "You must rest on a bedroll if you don't have a bed available.",
    price: 5,
    stack: 1
}

export const BlacksmithTools : Gear = {
    name: "Blacksmith's Tools",
    description: "Required to make crafting rolls for blacksmithing items.",
    price: 15,
    stack: 1,
    fine: {
        price: 500,
        description: "Blacksmithing crafting rolls gain a +1 bonus."
    },
    masterwork: {
        price: 1000,
        description: "Blacksmithing crafting rolls gain a +2 bonus."
    },
}

export const AlchemistTools : Gear = {
    name: "Alchemist's Tools",
    description: "Required to make crafting rolls for alchemy items.",
    price: 15,
    stack: 1,
    fine: {
        price: 500,
        description: "Alchemy crafting rolls gain a +1 bonus."
    },
    masterwork: {
        price: 1000,
        description: "Alchemy crafting rolls gain a +2 bonus."
    },
}

export const Bucket : Gear = {
    name: "Bucket",
    description: "Can hold up to 3 gallons of liquid.",
    price: 2,
    stack: 1
}

export const Caltrops : Gear = {
    name: "Caltrops",
    description: "A bag of 1,000.",
    price: 2,
    stack: 1
}

export const CardDeck : Gear = {
    name: "Card Deck",
    description: "Standard deck of 54 playing cards, including 2 jokers.",
    price: 1,
    stack: 5
}

export const Chain : Gear = {
    name: "Chain",
    description: "A 10-foot length of iron chain.",
    price: 5,
    stack: 1,
    crafting_info: FactoryLogic.createCraftInfo({
        type: "Blacksmithing",
        materials: "1 iron bar",
        base: 5,
    })
}

export const Chalk : Gear = {
    name: "Chalk",
    description: "A piece of chalk, available in blue, white, and yellow.",
    price: 1,
    stack: 5
}

export const CoinPurse : Gear = {
    name: "Coin Purse",
    description: "Holds up to 500 coins.",
    price: 1,
    stack: 1,
    fine: {
        price: 500,
        description: "Holds up to 750 coins."
    },
    masterwork: {
        price: 1000,
        description: "Holds up to 1,000 coins."
    },
}

export const Compass : Gear = {
    name: "Compass",
    description: "When you make a test related to the guide travel role and carry a compass, the test gains a +1 bonus.",
    price: 10,
    stack: 3,
    fine: {
        price: 1000,
        description: "The bonus rises to +2."
    },
    masterwork: {
        price: 2000,
        description: "The bonus rises to +3."
    },
}

export const CookUtensils : Gear = {
    name: "Cook's Utensils",
    description: "Required for some special rest activities as part of the Travel trait tree.",
    price: 15,
    stack: 1
}

export const Crowbar : Gear = {
    name: "Crowbar",
    description: "An iron bar that can be used in prying.",
    price: 10,
    stack: 1,
    fine: {
        price: 750,
        description: "Gives a +1 bonus on tests that use the crowbar."
    },
    masterwork: {
        price: 1500,
        description: "Gives a +2 bonus on tests that use the crowbar."
    },
}

export const EnchanterTools : Gear = {
    name: "Enchanter's Tools",
    description: "Required to make crafting rolls for enchanting items.",
    price: 15,
    stack: 1,
    fine: {
        price: 500,
        description: "Enchanting crafting rolls gain a +1 bonus."
    },
    masterwork: {
        price: 1000,
        description: "Enchanting crafting rolls gain a +2 bonus."
    },
}

export const GrapplingHook : Gear = {
    name: "Grappling Hook",
    description: "Can be added to rope to create an item that takes up 2 slots. Makes hurling and securing rope easier.",
    price: 10,
    stack: 1
}

export const HealingPotion : Gear = {
    name: "Healing Potion",
    description: "Maneuver: Consume to regain 1d6 Stamina or remove 1 wound if Stamina is already at maximum.",
    price: 100,
    stack: 5,
    crafting_info: FactoryLogic.createPotionCraftInfo({
        base: 20,
    })
}

export const Journal : Gear = {
    name: "Journal",
    description: "A bound journal of 200 pages that are blank. Don't worry, you'll fill them!",
    price: 2,
    stack: 1
}

export const LockpickSet : Gear = {
    name: "Lockpick Set",
    description: "Without this, you take a -1 penalty on tests made to pick locks.",
    price: 25,
    stack: 1,
    fine: {
        price: 750,
        description: "Grants a +1 bonus on tests to pick locks."
    },
    masterwork: {
        price: 1500,
        description: "Grants a +2 bonus on tests to pick locks."
    },
    crafting_info: FactoryLogic.createCraftInfo({
        type: "Blacksmithing",
        materials: "1 iron bar",
        base: 10,
        fine: 150,
        masterwork: 300
    })
}

export const Lorebook : Gear = {
    name: "Lorebook",
    description: "This book relates to a lore skill. Study this book as a rest activity and gain a +1 bonus to that skill that lasts until your next rest.",
    price: 50,
    stack: 1,
    fine: {
        price: 1000,
        description: "The bonus rises to +2."
    },
    masterwork: {
        price: 2000,
        description: "The bonus rises to +3."
    }
}

export const MagnifyingGlass : Gear = {
    name: "Magnifying Glass",
    description: "Can be used to better inspect the minute visual details of nearby creatures and objects.",
    price: 100,
    stack: 2
}

export const MerchantScales : Gear = {
    name: "Merchant's Scales",
    description: "Used to determine the weight of Tiny objects and creatures that sit still.",
    price: 50,
    stack: 1
}

export const Mirror : Gear = {
    name: "Mirror",
    description: "A hand mirror, useful for looking around corners and at your own mug.",
    price: 100,
    stack: 2
}

export const MusicalInstrument : Gear = {
    name: "Musical Instrument",
    description: "This is a portable musical instrument, like a lute, lyre, mandolin, drum, or fife. When to play it, it must occupy both your hand slots.",
    price: 100,
    stack: 1
}

export const Padlock : Gear = {
    name: "Padlock",
    description: "Iron padlock. Includes a key.",
    price: 25,
    stack: 3,
    fine: {
        price: 750,
        description: "Tests to pick or break the lock take a -1 penalty."
    },
    masterwork: {
        price: 1500,
        description: "Tests to pick or break the lock take a -2 penalty."
    },
    crafting_info: FactoryLogic.createCraftInfo({
        type: "Blacksmithing",
        materials: "1 iron bar",
        base: 10,
        fine: 150,
        masterwork: 300
    })
}

export const Pitons : Gear = {
    name: "Pitons",
    description: "Iron spikes used to secure ropes. Come in multiples of 10.",
    price: 5,
    stack: 2,
    crafting_info: FactoryLogic.createCraftInfo({
        type: "Blacksmithing",
        materials: "1 iron bar",
        base: 5
    })
}

export const PoisonVial : Gear = {
    name: "Poison Vial",
    description: "Maneuver: Apply to a weapon or 1 ammo. Next time it deals damage to a creature before DT’s end, they make a Strength RR.",
    price: 10,
    stack: 5,
    crafting_info: FactoryLogic.createPotionCraftInfo({
        base: 5,
    })
}

export const StrongPoison : Gear = {
    name: "Strong Poison",
    description: "Maneuver: Apply to a weapon or 1 ammo. Next time it deals damage to a creature before DT’s end, they make a Strength RR.",
    price: 250,
    stack: 5,
    crafting_info: FactoryLogic.createPotionCraftInfo({
        base: 50,
    })
}

export const Pot : Gear = {
    name: "Pot",
    description: "Iron pot for cooking. Makes great scrambled eggs and soup!",
    price: 5,
    stack: 1,
    crafting_info: FactoryLogic.createMetalCraftInfo({
        base: 5,
    })
}

export const RagePotion : Gear = {
    name: "Rage Potion",
    description: "Maneuver: Consume to gain +5 AD and deal additional 2 damage with melee attacks. Lasts as long as you keep making attacks against creatures each round.",
    price: 250,
    stack: 5,
    crafting_info: FactoryLogic.createPotionCraftInfo({
        base: 50,
    })
}

export const Spyglass : Gear = {
    name: "Spyglass",
    description: "Can be used to make things appear 3 times closer.",
    price: 100,
    stack: 2,
    fine: {
        price: 500,
        description: "Makes things appear 6 times closer."
    },
    masterwork: {
        price: 1000,
        description: "Makes things appear 10 times closer."
    },
}

export const String : Gear = {
    name: "String",
    description: "1,000 feet of string.",
    price: 1,
    stack: 1
}

export const Whistle : Gear = {
    name: "Whistle",
    description: "Maneuver: You create a loud noise that can be heard from 20 squares away.",
    price: 5,
    stack: 5
}

export const Bell : Gear = {
    name: "Bell",
    description: "Bell (to be added)",
    price: 5,
    stack: 5
}


export const FireBomb : Gear = {
    name: "Fire Bomb",
    description: "Action: You throw the bomb up to 10 squares. It explodes in a 3 cube. Each creature in the cube must make an Agility RR.",
    price: 250,
    stack: 2,
    crafting_info: FactoryLogic.createCraftInfo({
        type: "Alchemy",
        materials: "1 monster heart",
        base: 50,
    })
}

export const SpeedPotion : Gear = {
    name: "Speed Potion",
    description: "Maneuver: Consume to increase your speed by 1.\nDuration: 1 UD",
    price: 100,
    stack: 5,
    crafting_info: FactoryLogic.createPotionCraftInfo({
        base: 20,
    })
}

export const AcidVial : Gear = {
    name: "Acid Vial",
    description: "Maneuver: Pouring the vial onto a surface destroys up to 1 cubic foot of mundane matter.\nAction: You can make a ranged 5 attack with it using Agility.",
    price: 10,
    stack: 5,
    crafting_info: FactoryLogic.createPotionCraftInfo({
        base: 5,
    })
}

export const StrongAcidVial : Gear = {
    name: "Strong Acid Vial",
    description: "Maneuver: Pouring the vial onto a surface destroys up to 5 cubic foot of mundane matter.\nAction: You can make a ranged 5 attack with it using Agility.",
    price: 250,
    stack: 5,
    crafting_info: FactoryLogic.createPotionCraftInfo({
        base: 50,
    })
}

export const QuillInkpot : Gear = {
    name: "Quill & Inkpot",
    description: "Used to write stuff down.",
    price: 5,
    stack: 5
}

export const Tent : Gear = {
    name: "Tent",
    description: "Canvas tent that sleeps up to 3 humans comfortably.",
    price: 100,
    slots: 2,
    stack: 1,
}

export const Ladder : Gear = {
    name: "Ladder",
    description: "A collapsible ladder.\nManeuver: The ladder expands 10 feet.",
    price: 30,
    slots: 2,
    stack: 1,
    fine: {
        price: 500,
        description: "The ladder expands 20 feet."
    },
    masterwork: {
        price: 1000,
        description: "The ladder expands 30 feet."
    },
}

export const TenFootPole : Gear = {
    name: "Ten-Foot Pole",
    description: "A 10-foot-long wooden pole. For poking. Also prodding!",
    price: 5,
    slots: 2,
    stack: 1
}