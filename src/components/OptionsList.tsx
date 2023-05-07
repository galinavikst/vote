import React from "react";
import {
  deleteOption,
  options,
  setInputValue,
} from "../store/optionsFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { inputQuestionValue } from "../store/questionFormSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

export function OptionsList() {
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const question = useSelector(inputQuestionValue);

  const handleDeleteBtn = (index: number) => {
    dispatch(deleteOption(index));
  };

  const handleEditBtn = (index: number, text: string) => {
    dispatch(setInputValue(text));
    handleDeleteBtn(index);
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
            <div className="icons_wrapper">
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="xs"
                className="delete_edit_icons"
                onClick={() => handleEditBtn(index, optionsArr[index].text)}
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                size="xs"
                className="delete_edit_icons"
                onClick={() => handleDeleteBtn(index)}
              />
            </div>
          </span>
        ) : (
          "Your option"
        )}
      </li>
    );
  });
  return <>{question && <ul className="options_list">{list}</ul>}</>;
}
