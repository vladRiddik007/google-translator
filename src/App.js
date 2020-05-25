import React, { useState, useEffect } from "react";

import { googleTranslate } from "./utils/googleTranlate";

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
    <div style={{}}>
      <input
        type="text"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        placeholder="Enter text"
      />
      <input type="text" value={answer} readOnly />

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
      <button onClick={changeHandler}>lang</button>
      <div className="history">
        <ol>
          {history.map((item, i) => (
            <li key={i}>
              {item.question} - {item.transQuestion}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
