import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Header } from "./components/header";
import { getSupportedLanguages, translate } from "./translateServices";
import { History } from "./components/history";
import InputFields from "./components/input-fields";
import * as actions from "./redux/translation/actions";
import { Select } from "./components/select";

const App = ({ setTranslate }) => {
  const localHistory = localStorage.history;
  const [languageCodes, setLanguageCodes] = useState([]);
  const [language, setLanguage] = useState("en");
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState(
    localHistory ? JSON.parse(localHistory) : []
  );

  useEffect(() => {
    getSupportedLanguages().then((res) => getLanguageCodes(res));
    const getLanguageCodes = (languageCodes) => {
      setLanguageCodes(languageCodes);
    };
  }, []);

  const changeHandler = () => {
    const translating = (transQuestion) => {
      if (question !== transQuestion) {
        setHistory((prevHistory) => {
          const res = [...prevHistory, { question, transQuestion }];
          localStorage.setItem("history", JSON.stringify(res));
          return res;
        });
      }
    };

    setTranslate({ question, language });
    translate({question, language}).then((res) => translating(res));
  };

  return (
    <>
      <Header title="translator 2020" />
      <AppBodyStyled>
        <InputFields
          question={question}
          onChange={setQuestion}
          onClick={changeHandler}
        />
        <Select
          language={language}
          onChange={setLanguage}
          languageCodes={languageCodes}
        />
        <History history={history} />
      </AppBodyStyled>
    </>
  );
};

const AppBodyStyled = styled.div`
  display: flex;
  align-items: flex-start;
`;

// const mapStateToProps = (state) => ({
//   answer: state.translation.answer,
// });

export default connect(null, actions)(App);
