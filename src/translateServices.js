const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
const googleTranslate = require("google-translate")(apiKey);

export const getSupportedLanguages = () => {
  return new Promise((res, rej) => {
    googleTranslate.getSupportedLanguages("ru", function (err, languageCodes) {
      if (err) rej(err);
      res(languageCodes);
    });
  });
};
export const translate = (payload) => {
  return new Promise((res, rej) => {
    googleTranslate.translate(payload.question, payload.language, function (
      err,
      translation
    ) {
      if (err) rej(err);
      res(translation.translatedText);
    });
  });
};
