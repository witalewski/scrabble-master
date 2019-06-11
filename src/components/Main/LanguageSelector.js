import React from "react";
import { LanguageSelectorStyled } from "./LanguageSelectorStyled";

export const LanguageSelector = ({ onChange }) => (
  <LanguageSelectorStyled onChange={onChange}>
    <option value="en_US">English (US)</option>
    <option value="pl_PL">Polish</option>
  </LanguageSelectorStyled>
);
