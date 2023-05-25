import { createSlice } from "@reduxjs/toolkit";
import { lottiePencil } from "../components/Lottie";

interface ILottieState {
  lottieSrc: string;
  page: string;
}

interface ILottieSlice {
  lottie: ILottieState;
}

export const lottieSlice = createSlice({
  name: "lottie",
  initialState: {
    lottieSrc: lottiePencil.idea,
    page: "",
  },
  reducers: {
    setLottieSrc(state, action) {
      state.lottieSrc = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    resetLottieSrc(state) {
      state.lottieSrc = "";
    },
  },
});

export const { setLottieSrc, setPage, resetLottieSrc } = lottieSlice.actions;
export const lottieSrcValue = (state: ILottieSlice) => state.lottie.lottieSrc;
export const lottiePage = (state: ILottieSlice) => state.lottie.page;

export default lottieSlice.reducer;
