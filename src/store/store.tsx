import { configureStore, combineReducers } from "@reduxjs/toolkit";
import questionFormReducer from "./questionFormSlice";
import optionsFormReducer from "./optionsFormSlice";

const rootReducer = combineReducers({
  questionForm: questionFormReducer,
  optionsForm: optionsFormReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
