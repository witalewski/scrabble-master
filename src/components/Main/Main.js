import React, { useState } from "react";
import { MainStyled } from "./MainStyled";
import { LettersInput } from "components/LettersInput/LettersInput";
import { ResultDisplay } from "components/ResultDisplay/ResultDisplay";
import { getValidPermutations } from "utils/getValidPermutations";
import { MIN_WORD_LENGTH } from "utils/constants";

export const Main = () => {
  const [letters, setLetters] = useState("AWESOME");
  const permutations = getValidPermutations(letters.toLowerCase());
  return (
    <MainStyled>
      <LettersInput
        onChange={({ target: { value } }) =>
          value.length >= MIN_WORD_LENGTH && setLetters(value.toUpperCase())
        }
      />
      <ResultDisplay
        letters={letters.substr(0, 7)}
        permutations={permutations}
      />
    </MainStyled>
  );
};
