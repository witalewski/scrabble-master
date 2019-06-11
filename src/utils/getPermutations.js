import { MIN_WORD_LENGTH } from "./constants";

export const getPermutations = lettersString => {
  const saneString = lettersString.substr(0, 7);
  const results = {};
  for (
    let length = saneString.length;
    length >= MIN_WORD_LENGTH;
    length--
  ) {
    const combinations = [];
    const indices = [];

    const run = level => {
      for (let i = 0; i < saneString.length; i++) {
        if (!indices[i]) {
          indices[i] = true;
          combinations[level] = saneString[i];
          if (level < length - 1) {
            run(level + 1);
          } else {
            results[combinations.join("")] = true;
          }
          indices[i] = false;
        }
      }
    };
    run(0);
  }
  return Object.keys(results);
};
