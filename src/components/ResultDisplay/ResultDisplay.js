import React from "react";
import {
  ResultDisplayStyled,
  EmptyResultDisplayStyled,
  LettersDisplayStyled
} from "./ResultDisplayStyled";
import { ResultItem } from "./ResultItem";
import { MIN_WORD_LENGTH } from "utils/constants";

export const ResultDisplay = ({ letters, permutations }) =>
  permutations.length ? (
    <ResultDisplayStyled>
      Permutations of <LettersDisplayStyled>{letters}</LettersDisplayStyled>{" "}
      which are valid English words:{" "}
      {permutations.map((word, i) => (
        <span key={word}>
          <ResultItem word={word} />
          {i < permutations.length - 1 && ", "}
        </span>
      ))}
    </ResultDisplayStyled>
  ) : (
    <EmptyResultDisplayStyled>
      There are no permutations of{" "}
      <LettersDisplayStyled>{letters}</LettersDisplayStyled> which are longer
      than {MIN_WORD_LENGTH - 1} and valid English words.
    </EmptyResultDisplayStyled>
  );
