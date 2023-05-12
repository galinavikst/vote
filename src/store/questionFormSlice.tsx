import { createSlice } from "@reduxjs/toolkit";

interface IFormState {
  inputQuestionValue: "";
}

interface IQuestionFormSlice {
  questionForm: IFormState;
}

export const questionFormSlice = createSlice({
  name: "questionForm",
  initialState: {
    inputQuestionValue: "",
  },
  reducers: {
    setQuestion(state, action) {
      state.inputQuestionValue = action.payload;
    },
  },
});

export const { setQuestion } = questionFormSlice.actions;
export const inputQuestionValue = (state: IQuestionFormSlice) =>
  state.questionForm.inputQuestionValue;

export default questionFormSlice.reducer;
