import { createSlice } from "@reduxjs/toolkit";

interface ILetsVoteBlockState {
  showPercentage: boolean;
  showResults: boolean;
  isVotedInThisPoll: boolean;
}

interface ILetsVoteBlockSlice {
  letsVoteBlock: ILetsVoteBlockState;
}

const votingPageSlice = createSlice({
  name: "letsVoteBlock",
  initialState: {
    showPercentage: true,
    showResults: false,
    isVotedInThisPoll: false,
  },
  reducers: {
    setShowPercentage(state, action) {
      state.showPercentage = action.payload;
    },
    setShowResults(state, action) {
      state.showResults = action.payload;
    },
    setIsVotedInThisPoll(state, action) {
      state.isVotedInThisPoll = action.payload;
    },
  },
});

export const { setShowPercentage, setShowResults, setIsVotedInThisPoll } =
  votingPageSlice.actions;
export const isPercentage = (state: ILetsVoteBlockSlice) =>
  state.letsVoteBlock.showPercentage;
export const isResult = (state: ILetsVoteBlockSlice) =>
  state.letsVoteBlock.showResults;

export default votingPageSlice.reducer;
