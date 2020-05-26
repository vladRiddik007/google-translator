import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const InputFields = ({ question, answer, onChange, onClick }) => {
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

const mapStateToProps = (state) => ({
  answer: state.translation.answer,
});

export default connect(mapStateToProps, null)(InputFields);

const InputFieldsStyled = styled.section`

`;
