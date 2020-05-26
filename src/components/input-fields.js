import React from "react";
import styled from "styled-components";

export const InputFields = ({ question, answer, onChange, onClick }) => {
  return (
    <InputFieldsStyled>
      <input
        type="text"
        value={question}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Enter text"
      />
      <button onClick={onClick}>Go!</button>
      <input type="text" value={answer} readOnly />
    </InputFieldsStyled>
  );
};

const InputFieldsStyled = styled.section`

`;
