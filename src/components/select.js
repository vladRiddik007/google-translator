import React from "react";
import styled from "styled-components";

export const Select = ({ language, onChange, languageCodes }) => (
  <SelectStyled
    value={language}
    onChange={(event) => onChange(event.target.value)}
  >
    {languageCodes.map((lang) => (
      <option key={lang.language} value={lang.language}>
        {lang.name}
      </option>
    ))}
  </SelectStyled>
);

const SelectStyled = styled.select``;
