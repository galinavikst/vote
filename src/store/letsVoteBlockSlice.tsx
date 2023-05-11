import { createSlice } from "@reduxjs/toolkit";

interface ILetsVoteBlockState {
  showPercentage: boolean;
  showResults: boolean;
}

interface ILetsVoteBlockSlice {
  letsVoteBlock: ILetsVoteBlockState;
}

const letsVoteBlockSlice = createSlice({
  name: "letsVoteBlock",
  initialState: {
    showPercentage: true,
    showResults: false,
  },
  reducers: {
    setShowPercentage(state, action) {
      state.showPercentage = action.payload;
    },
    setShowResults(state, action) {
      state.showResults = action.payload;
    },
  },
});

export const { setShowPercentage, setShowResults } = letsVoteBlockSlice.actions;
export const isPercentage = (state: ILetsVoteBlockSlice) =>
  state.letsVoteBlock.showPercentage;
export const isResult = (state: ILetsVoteBlockSlice) =>
  state.letsVoteBlock.showResults;

export default letsVoteBlockSlice.reducer;
