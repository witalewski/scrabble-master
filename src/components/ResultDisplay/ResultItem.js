import React from "react";
import { ResultItemStyled } from "./ResultItemStyled";

export const ResultItem = ({word}) => (
  <ResultItemStyled href={`https://en.wiktionary.org/wiki/${word}`}>
    {word}
  </ResultItemStyled>
);
