const status = ["Alive", "Dead", "unknown"];
const species: string[] = [
  "Human", "Alien", "Animal", "Humanoid", "unknown",
  "Poopybutthole", "Mythological Creature", "Cronenberg", "Disease", "Robot"
];
const gender = ["Female", "Male", "Genderless", "unknown"];
const type: string[] = [
  "Alphabetrian", "Amoeba-Person", "Animal", "Bepisian", "Bird-Person", "Boobloosian",
  "Cat", "Cat-Person", "Centaur", "Clone", "Cone-nippled alien", "Cromulon", "Cyborg", "Demon", "Dog",
  "Eat shiter-Person", "Elephant-Person", "Fish-Person", "Flansian", "Game", "Garblovian", "Gazorpian",
  "Gazorpian reproduction robot", "Genetic experiment", "Giant", "Goddess", "Gromflomite", "Hammerhead-Person",
  "Hivemind", "Hole", "Human with antennae", "Human with ants in his eyes", "Human with baby legs",
  "Human with giant head", "Interdimensional gaseous being", "Jellybean", "Korblock", "Krootabulan",
  "Larva alien", "Light bulb-Alien", "Microverse inhabitant", "Miniverse inhabitant", "Mytholog", "Organic gun",
  "Parasite", "Plutonian", "Robot-Crocodile hybrid", "Self-aware arm", "Shapeshifter", "Superhuman",
  "Tentacle alien", "Time God", "Tuskfish", "Vampire", "Zigerion", "Zombodian"
];

export const filterListKeys: Array<"status" | "species" | "gender" | "type"> = ["status", "species", "gender", "type"];

export const filterList = {
  status,
  species,
  gender,
  type
};
