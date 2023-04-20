import React from "react";
import { options } from "../store/optionsFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { inputQuestionValue } from "../store/questionFormSlice";
import { setReadyToVote } from "../store/optionsListSlice";

export function OptionsList() {
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const question = useSelector(inputQuestionValue);

  const list = [];
  for (let i = 0; i < 5; i++) {
    console.log(optionsArr[i]);
    list.push(
      <li
        key={"option" + i}
        style={
          optionsArr[i]
            ? { opacity: 1, listStyle: "inside", color: optionsArr[i].color }
            : { opacity: 0.3 }
        }
      >
        {optionsArr[i] ? optionsArr[i].text : "your option can be here"}
      </li>
    );
  }

  const onClickHandler = () => {
    dispatch(setReadyToVote(true));
  };

  return (
    <>
      {question && (
        <div>
          <ul className="options_list">{list}</ul>
          <button
            type="button"
            onClick={onClickHandler}
            disabled={optionsArr.length < 2 && true}
          >
            Let's vote!
          </button>
        </div>
      )}
    </>
  );
}
