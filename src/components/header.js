import React from "react";
import styled from "styled-components";

export const Header = ({ title, backgroundColor }) => {
  return (
    <HeaderStyled backgroundColor={backgroundColor}>
      <h1>{title}</h1>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: ${({ backgroundColor }) => backgroundColor || "#f1f1f1"};
`;
