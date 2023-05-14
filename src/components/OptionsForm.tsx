import React, { useEffect } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { Question } from "./Question";
import { useDispatch, useSelector } from "react-redux";
import { inputQuestionValue, setQuestion } from "../store/questionFormSlice";
import { useForm } from "react-hook-form";
import {
  options,
  setOptions,
  deleteAllOptions,
  inputOptionValue,
  setInputValue,
} from "../store/optionsFormSlice";
import { OptionsList } from "./OptionsList";
import { getRandomColor } from "./servise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "../css/options-form.css";
import { allClients } from "../data";

type IOptionInput = {
  optionInput: string;
};

export default function OptionsForm() {
  const dispatch = useDispatch();
  const question = useSelector(inputQuestionValue);
  const optionsArr = useSelector(options);
  const inputValue = useSelector(inputOptionValue);

  const { register, handleSubmit, resetField, setValue, setFocus } =
    useForm<IOptionInput>();

  useEffect(() => {
    setValue("optionInput", inputValue);
    setFocus("optionInput");
  }, [inputValue, setValue, setFocus]);

  const submitHandler = (data: IOptionInput) => {
    const newOption = {
      id: data.optionInput,
      text: data.optionInput,
      color: getRandomColor(),
      clicked: 0,
    };
    const newOptionsArr = [...optionsArr, newOption];
    dispatch(setOptions(newOptionsArr));
    resetField("optionInput"); //reset input after submiting
  };

  const onClickHandler = () => {
    allClients.push({
      name: "",
      email: "",
      password: "",
      questions: [
        {
          question: question,
          options: optionsArr,
        },
      ],
    });
    console.log(allClients);
  };

  const handleEditBtn = () => {
    dispatch(setQuestion(""));
  };

  const handleDeleteBtn = () => {
    dispatch(deleteAllOptions());
    dispatch(setInputValue(""));
    handleEditBtn();
  };

  return (
    <>
      {question && (
        <div className="options_form_wrapper">
          <div className="question_icons_wrapper">
            <Question />
            <div className="icons_wrapper">
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="xs"
                onClick={handleEditBtn}
                className="delete_edit_icons"
              />
              <FontAwesomeIcon
                className="delete_edit_icons"
                icon={faTrashCan}
                size="xs"
                onClick={handleDeleteBtn}
              />
            </div>
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
                    pattern: /^[^\s].*/, // no spaces in the begining
                    maxLength: 100,
                    value: inputValue,
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
              disabled={optionsArr.length < 2}
            >
              Get ready to vote!
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
