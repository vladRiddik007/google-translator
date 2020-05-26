import types from "./types";

const initialState = {
  loading: false,
  error: false,
  languageCodes: [],
  language: "en",
};

export const translationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LANGUAGES:
      return { ...state, loading: true };
    case types.GET_LANGUAGES_SUCCESS:
      return { ...state, languageCodes: action.payload, loading: false };
    case types.GET_LANGUAGES_ERROR:
      return { ...state, error: true, loading: false };

    case types.SET_LANGUAGE:
      return { ...state, language: action.payload };

    default: {
      return {
        ...state,
      };
    }
  }
};
