import Typo from "typo-js";

const dictionary = new Typo("en_US", false, false, { dictionaryPath: "http://localhost:3000/dictionaries" });

export const isValidWord = dictionary.check.bind(dictionary);