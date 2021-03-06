import React from "react";
import { LettersInputStyled } from "./LettersInputStyled";

export const LettersInput = ({ onChange, value }) => (
  <LettersInputStyled
    type="text"
    placeholder="Type in your letters, e.g. AWESOME"
    onChange={onChange}
    value={value}
  />
);
