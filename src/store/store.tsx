import { configureStore, combineReducers } from "@reduxjs/toolkit";
import questionFormReducer from "./questionFormSlice";
import optionsFormReducer from "./optionsFormSlice";
import letsVoteBlockReducer from "./votingPageSlice";
import lottieReducer from "./lottieSlice";

const rootReducer = combineReducers({
  questionForm: questionFormReducer,
  optionsForm: optionsFormReducer,
  letsVoteBlock: letsVoteBlockReducer,
  lottie: lottieReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
