import { getPermutations } from "./getPermutations";
import { isValidWord } from "./isValidWord";

export const getValidPermutations = lettersString =>
  getPermutations(lettersString).filter(isValidWord);
