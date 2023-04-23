import React from "react";
import { Link } from "react-router-dom";
import { Question } from "./Question";
import { useDispatch, useSelector } from "react-redux";
import { inputQuestionValue, setQuestion } from "../store/questionFormSlice";
import { useForm } from "react-hook-form";
import {
  isRedyToVote,
  setReadyToVote,
  options,
  setOptions,
} from "../store/optionsFormSlice";
import { OptionsList } from "./OptionsList";
import { getRandomColor } from "./servise";

type IOptionInput = {
  optionInput: string;
};

export default function OptionsForm() {
  const question = useSelector(inputQuestionValue);
  const letsVoteClicked = useSelector(isRedyToVote);
  const optionsArr = useSelector(options);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<IOptionInput>();

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

  const onClickHandler = () => {
    dispatch(setReadyToVote(true));
  };

  const handleDeleteBtn = () => {
    dispatch(setQuestion(""));
  };

  return (
    <>
      {question && !letsVoteClicked && (
        <div className="options_form_wrapper">
          <div className="question_delete_btn_wrapper">
            <Question />
            <button className="delete_btn" onClick={handleDeleteBtn}>
              X
            </button>
          </div>
          <form className="options_form" onSubmit={handleSubmit(submitHandler)}>
            <div className="input_label_wrapper">
              <label htmlFor="optionInput">Create your options (min 2):</label>
              <div className="input_btn_wrapper">
                <input
                  id="optionInput"
                  type="text"
                  placeholder="type here"
                  {...register("optionInput", { required: true })}
                />
                <button disabled={optionsArr.length >= 5}>Save</button>
              </div>
            </div>
          </form>
          <OptionsList />
          <Link to="/voting-page">
            <button
              className="lets_vote_btn"
              type="button"
              onClick={onClickHandler}
              disabled={optionsArr.length < 2 && true}
            >
              Let's vote!
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
