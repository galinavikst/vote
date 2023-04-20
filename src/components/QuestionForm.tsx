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
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div>
            <label htmlFor="questionInput">Create your question</label>
            <input
              id="questionInput"
              type="text"
              {...register("questionInput", { required: true })}
              placeholder="type here"
            />
            {errors.questionInput && (
              <span className="error"> This field is required</span>
            )}
          </div>
          <button>Save</button>
        </form>
      )}
    </>
  );
}
