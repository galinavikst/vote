import { configureStore, combineReducers } from "@reduxjs/toolkit";
import questionFormReducer from "./questionFormSlice";

const rootReducer = combineReducers({
  questionForm: questionFormReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
