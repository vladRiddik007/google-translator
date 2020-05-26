import React, { useState, useEffect } from "react";
import { Header } from "./components/header";

import { googleTranslate } from "./utils/googleTranlate";
import { History } from "./components/history";
import { InputFields } from "./components/input-fields";
import styled from "styled-components";

const App = () => {
  const localHistory = localStorage.history;
  const [languageCodes, setLanguageCodes] = useState([]);
  const [language, setLanguage] = useState("en");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState(
    localHistory ? JSON.parse(localHistory) : []
  );

  useEffect(() => {
    googleTranslate.getSupportedLanguages("ru", function (err, languageCodes) {
      getLanguageCodes(languageCodes);
    });
    const getLanguageCodes = (languageCodes) => {
      setLanguageCodes(languageCodes);
    };
  }, []);

  const changeHandler = () => {
    const translating = (transQuestion) => {
      if (question !== transQuestion) {
        setAnswer(transQuestion);
        setHistory((prevHistory) => {
          const res = [...prevHistory, { question, transQuestion }];
          localStorage.setItem("history", JSON.stringify(res));
          return res;
        });
      }
    };

    googleTranslate.translate(question, language, function (err, translation) {
      translating(translation.translatedText);
    });
  };

  return (
    <>
      <Header title="translator 2020" />
      <AppBodyStyled>
        <InputFields
          question={question}
          answer={answer}
          onChange={setQuestion}
          onClick={changeHandler}
        />
        {/* <input
        type="text"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        placeholder="Enter text"
      />
      <button onClick={changeHandler}>Go!</button>
      <input type="text" value={answer} readOnly /> */}

        <select
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          {languageCodes.map((lang) => (
            <option key={lang.language} value={lang.language}>
              {lang.name}
            </option>
          ))}
        </select>
        <History history={history} />
      </AppBodyStyled>
    </>
  );
};

export default App;

const AppBodyStyled = styled.body`
  display: flex;
  align-items: flex-start;
`;
