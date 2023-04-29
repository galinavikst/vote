import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { inputQuestionValue, setQuestion } from "../store/questionFormSlice";

type IQuestionInput = {
  questionInput: string;
};

export default function QuestionForm() {
  const dispatch = useDispatch();
  const question = useSelector(inputQuestionValue);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IQuestionInput>();

  const handleOnSubmit = (data: IQuestionInput) => {
    const newQuestion = data.questionInput;
    dispatch(setQuestion(newQuestion));
  };

  return (
    <>
      {!question && (
        <form className="question_form" onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="input_label_wrapper">
            <label htmlFor="questionInput">Create your question:</label>
            <div className="input_btn_wrapper">
              <input
                id="questionInput"
                type="text"
                {...register("questionInput", {
                  required: true,
                  pattern: /^[^\s].*[^\s]$/, // no spaces in the end and begining
                  maxLength: 100,
                })}
                placeholder="type here"
              />
              {errors.questionInput && (
                <span className="error"> *This field is required</span>
              )}
              <button className="save_button">SAVE</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
