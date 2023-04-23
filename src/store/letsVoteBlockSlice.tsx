import { createSlice } from "@reduxjs/toolkit";

interface ILetsVoteBlockState {
  showPercentage: boolean;
}

interface ILetsVoteBlockSlice {
  letsVoteBlock: ILetsVoteBlockState;
}

const letsVoteBlockSlice = createSlice({
  name: "letsVoteBlock",
  initialState: {
    showPercentage: false,
  },
  reducers: {
    setShowPercentage(state, action) {
      state.showPercentage = action.payload;
    },
  },
});

export const { setShowPercentage } = letsVoteBlockSlice.actions;
export const isPercentage = (state: ILetsVoteBlockSlice) =>
  state.letsVoteBlock.showPercentage;

export default letsVoteBlockSlice.reducer;
