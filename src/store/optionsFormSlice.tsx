import { createSlice } from "@reduxjs/toolkit";

export interface IOption {
  id: string;
  color: string;
  text: string;
  clicked: number;
}

interface IOptionFormState {
  options: IOption[];
  totalClicks: number;
  readyToVote: boolean;
  inputValue: string;
}

interface IOptionsFormSlice {
  optionsForm: IOptionFormState;
}

const optionsFormSlice = createSlice({
  name: "optionsForm",
  initialState: {
    options: [] as IOption[],
    totalClicks: 0,
    readyToVote: false,
    inputValue: "",
  },
  reducers: {
    setOptions(state, action) {
      state.options = [...state.options, action.payload];
    },
    deleteOption: (state, action) => {
      state.options = state.options.filter(
        (_el, index) => index !== action.payload
      );
    },
    deleteAllOptions: (state) => {
      state.options = [];
    },
    addClickedCount(state, action) {
      const index = action.payload;
      state.options[index].clicked += 1;
    },
    updateTotalClicks(state) {
      state.totalClicks += 1;
    },
    setReadyToVote(state, action) {
      state.readyToVote = action.payload;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export const isRedyToVote = (state: IOptionsFormSlice) =>
  state.optionsForm.readyToVote;
export const {
  setOptions,
  setReadyToVote,
  addClickedCount,
  updateTotalClicks,
  deleteOption,
  deleteAllOptions,
  setInputValue,
} = optionsFormSlice.actions;
export const options = (state: IOptionsFormSlice) => state.optionsForm.options;
export const total = (state: IOptionsFormSlice) =>
  state.optionsForm.totalClicks;
export const inputOptionValue = (state: IOptionsFormSlice) =>
  state.optionsForm.inputValue;
export default optionsFormSlice.reducer;
