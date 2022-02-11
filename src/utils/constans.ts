const status = ["Alive", "Dead", "unknown"];
const species: string[] = [];
const gender = ["Female", "Male", "Genderless", "unknown"];
const type: string[] = [];

export const filterListKeys: Array<"status" | "species" | "gender" | "type"> = ["status","species", "gender", "type"];

export const filterList = {
  status,
  species,
  gender,
  type
};
