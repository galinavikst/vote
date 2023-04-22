import React from "react";
import { options } from "../store/optionsFormSlice";
import { useSelector } from "react-redux";
import { inputQuestionValue } from "../store/questionFormSlice";

export function OptionsList() {
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
        {optionsArr[i] ? (
          <span className="option_text">{optionsArr[i].text}</span>
        ) : (
          "Your option"
        )}
      </li>
    );
  }

  return <>{question && <ul className="options_list">{list}</ul>}</>;
}
