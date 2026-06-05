import * as Animals from "./creatures/animals"
import * as BloodCreatures from "./creatures/monsters/blood-monsters"
import * as UniqueCreatures from "./creatures/monsters/unique-monsters"

export class AnimalData {
    static Bear = Animals.Bear;
    static Cat = Animals.Cat;
    static Dog = Animals.Dog;
    static Goat = Animals.Goat;
    static Horse = Animals.Horse;
    static Rat = Animals.Rat;
    static Wolf = Animals.Wolf;
}

export class BloodCreatureData {
    static BloodCreatureA = BloodCreatures.BloodCreatureA;
    static BloodCreatureB = BloodCreatures.BloodCreatureB;
    static BloodCreatureC = BloodCreatures.BloodCreatureC;
}

export class UniqueCreatureData {
    static RingCollector = UniqueCreatures.RingCollector;
}