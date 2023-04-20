import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IOptionsListState {
  readyToVote: boolean;
}

interface IoptionsListSlice {
  optionsList: IOptionsListState;
}

const optionsListSlice = createSlice({
  name: "optionsList",
  initialState: {
    readyToVote: false,
  },
  reducers: {
    setReadyToVote(state, action) {
      state.readyToVote = action.payload;
    },
  },
});

export const isRedyToVote = (state: IoptionsListSlice) =>
  state.optionsList.readyToVote;
export const { setReadyToVote } = optionsListSlice.actions;
export default optionsListSlice.reducer;
