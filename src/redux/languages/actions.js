import types from "./types";
import { translate } from "../../translateServices";

const { SET_ANSWER, SET_ANSWER_SUCCESS, SET_ANSWER_ERROR } = types;

const setAnswerStarted = () => ({
  type: SET_ANSWER,
});

const setAnswerSuccess = (payload) => {
  return {
    type: SET_ANSWER_SUCCESS,
    payload,
  };
};

const setAnswerError = () => {
  return {
    type: SET_ANSWER_ERROR,
  };
};

export const setTranslate = (payload) => (dispatch) => {
  dispatch(setAnswerStarted());
  return translate(payload)
    .then((data) => {
      dispatch(setAnswerSuccess(data));
    })
    .catch(() => {
      dispatch(setAnswerError());
      console.log("error");
    });
};
