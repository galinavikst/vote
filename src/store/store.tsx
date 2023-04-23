import { configureStore, combineReducers } from "@reduxjs/toolkit";
import questionFormReducer from "./questionFormSlice";
import optionsFormReducer from "./optionsFormSlice";
import letsVoteBlockReducer from "./letsVoteBlockSlice";

const rootReducer = combineReducers({
  questionForm: questionFormReducer,
  optionsForm: optionsFormReducer,
  letsVoteBlock: letsVoteBlockReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
