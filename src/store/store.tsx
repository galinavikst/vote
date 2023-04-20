import { configureStore, combineReducers } from "@reduxjs/toolkit";
import questionFormReducer from "./questionFormSlice";
import optionsFormReducer from "./optionsFormSlice";
import optionsListReducer from "./optionsListSlice";

const rootReducer = combineReducers({
  questionForm: questionFormReducer,
  optionsForm: optionsFormReducer,
  optionsList: optionsListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
