import React from "react";
import "animate.css";
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
  const dispatch = useDispatch();
  const question = useSelector(inputQuestionValue);
  const letsVoteClicked = useSelector(isRedyToVote);
  const optionsArr = useSelector(options);

  const { register, handleSubmit, resetField } = useForm<IOptionInput>();

  const submitHandler = (data: IOptionInput) => {
    const newOption = {
      id: data.optionInput,
      text: data.optionInput,
      color: getRandomColor(),
      clicked: 0,
    };
    dispatch(setOptions(newOption));
    resetField("optionInput"); //reset input after submiting
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
                  {...register("optionInput", {
                    required: true,
                    pattern: /^[^\s].*[^\s]$/, // no spaces in the end and begining
                    maxLength: 100,
                  })}
                />
                <button
                  className="save_button"
                  disabled={optionsArr.length >= 5}
                >
                  SAVE
                </button>
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
