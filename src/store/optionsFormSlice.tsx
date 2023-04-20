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
}

interface IOptionsFormSlice {
  optionsForm: IOptionFormState;
}

const optionsFormSlice = createSlice({
  name: "optionsForm",
  initialState: {
    options: [] as IOption[],
    totalClicks: 0,
  },
  reducers: {
    setOptions(state, action) {
      state.options = [...state.options, action.payload];
    },
    addClickedCount(state, action) {
      const index = action.payload;
      state.options[index].clicked += 1;
    },
    updateTotalClicks(state) {
      state.totalClicks += 1;
    },
  },
});

export const { setOptions, addClickedCount, updateTotalClicks } =
  optionsFormSlice.actions;
export const options = (state: IOptionsFormSlice) => state.optionsForm.options;
export const total = (state: IOptionsFormSlice) =>
  state.optionsForm.totalClicks;
export default optionsFormSlice.reducer;
