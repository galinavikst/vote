import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IOptionFormState {
  options: string[];
}

interface IOptionsFormSlice {
  optionsForm: IOptionFormState;
}

const optionsFormSlice = createSlice({
  name: "optionsForm",
  initialState: {
    options: [] as string[],
  },
  reducers: {
    setOptions(state, action) {
      state.options = [...state.options, action.payload];
    },
  },
});

export const { setOptions } = optionsFormSlice.actions;
export const options = (state: IOptionsFormSlice) => state.optionsForm.options;
export default optionsFormSlice.reducer;
