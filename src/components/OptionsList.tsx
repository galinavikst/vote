import React from "react";
import { deleteOption, options } from "../store/optionsFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { inputQuestionValue } from "../store/questionFormSlice";

export function OptionsList() {
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const question = useSelector(inputQuestionValue);

  const handleDeleteBtn = (index: number) => {
    dispatch(deleteOption(index));
  };

  const list = Array.from({ length: 5 }).map((_el, index) => {
    return (
      <li
        key={"option" + index}
        style={
          optionsArr[index]
            ? {
                opacity: 1,
                color: optionsArr[index].color,
              }
            : { opacity: 0.2 }
        }
      >
        {optionsArr[index] ? (
          <span>
            <span className="option_text">{optionsArr[index].text}</span>
            <button
              className="delete_btn"
              onClick={() => handleDeleteBtn(index)}
            >
              X
            </button>
          </span>
        ) : (
          "Your option"
        )}
      </li>
    );
  });
  return <>{question && <ul className="options_list">{list}</ul>}</>;
}
