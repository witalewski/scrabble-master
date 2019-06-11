import Typo from "typo-js";

const dictionary = new Typo("en_US", false, false, { dictionaryPath: "dictionaries" });

export const isValidWord = dictionary.check.bind(dictionary);