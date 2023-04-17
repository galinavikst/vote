import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setQuestion } from "../store/questionFormSlice";

type IQuestionINput = {
  questionInput: string;
};

export default function QuestionForm() {
  const dispatch = useDispatch();
  //const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IQuestionINput>();

  const handleOnSubmit = (data: IQuestionINput) => {
    const newQuestion = data.questionInput;
    dispatch(setQuestion(newQuestion));
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        <label htmlFor="questionInput">Create your question</label>
        <input
          id="questionInput"
          type="text"
          {...register("questionInput", { required: true })}
          placeholder="type here"
        />
        {errors.questionInput && <span> This field is required</span>}
      </div>
      <button>Save</button>
    </form>
  );
}
