import types from "./types";

const initialState = {
  loading: false,
  error: false,
  answer: "",
};

export const translationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ANSWER:
      return { ...state, loading: true };
    case types.SET_ANSWER_SUCCESS:
      return { ...state, answer: action.payload, loading: false };
    case types.SET_ANSWER_ERROR:
      return { ...state, error: true, loading: false };

    default: {
      return {
        ...state,
      };
    }
  }
};
