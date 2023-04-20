import React from "react";
import { Question } from "./Question";
import { useDispatch, useSelector } from "react-redux";
import { inputQuestionValue } from "../store/questionFormSlice";
import { useForm } from "react-hook-form";
import { options, setOptions } from "../store/optionsFormSlice";
import { OptionsList } from "./OptionsList";
import { getRandomColor } from "./servise";
import { isRedyToVote } from "../store/optionsListSlice";

type IOptionInput = {
  optionInput: string;
};

export default function OptionsForm() {
  const question = useSelector(inputQuestionValue);
  const letsVoteClicked = useSelector(isRedyToVote);
  const optionsArr = useSelector(options);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOptionInput>();

  // const inputs = [];
  // for (let i = 0; i < 5; i += 1) {
  //   const isRequired = i < 2;
  //   inputs.push(
  //     <li key={i}>
  //       <input
  //         type="text"
  //         {...register(`options${i}`, { required: isRequired })}
  //       />
  //       {errors.options && <span> This field is required</span>}
  //     </li>
  //   );
  // }

  const submitHandler = (data: IOptionInput) => {
    const newOption = {
      id: data.optionInput,
      text: data.optionInput,
      color: getRandomColor(),
      clicked: 0,
    };

    dispatch(setOptions(newOption));
  };

  return (
    <>
      {question && !letsVoteClicked && (
        <form onSubmit={handleSubmit(submitHandler)}>
          <Question />
          <div>
            <label htmlFor="optionInput">Create your options (max 5)</label>
            <input
              id="optionInput"
              type="text"
              placeholder="type here"
              {...register("optionInput", { required: true })}
            />
            {optionsArr.length < 2 && errors.optionInput && (
              <span className="error"> Required at least 2 options</span>
            )}
          </div>
          <button disabled={optionsArr.length >= 5}>Save</button>
          <OptionsList />
        </form>
      )}
    </>
  );
}
