import { createSlice } from "@reduxjs/toolkit";
import { IOption } from "../data";

interface IOptionFormState {
  options: IOption[];
  inputValue: string;
}

interface IOptionsFormSlice {
  optionsForm: IOptionFormState;
}

const optionsFormSlice = createSlice({
  name: "optionsForm",
  initialState: {
    options: [] as IOption[],
    inputValue: "",
  },
  reducers: {
    setOptions(state, action) {
      state.options = action.payload;
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
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export const {
  setOptions,
  addClickedCount,
  deleteOption,
  deleteAllOptions,
  setInputValue,
} = optionsFormSlice.actions;
export const options = (state: IOptionsFormSlice) => state.optionsForm.options;
export const inputOptionValue = (state: IOptionsFormSlice) =>
  state.optionsForm.inputValue;
export default optionsFormSlice.reducer;
