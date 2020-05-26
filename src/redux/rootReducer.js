import { combineReducers } from "redux";

import { translationReducer } from "./translation/reducer";

const rootReducer = combineReducers({
  translation: translationReducer,
});

export default rootReducer;