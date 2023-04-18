import React from "react";
import { options } from "../store/optionsFormSlice";
import { useSelector } from "react-redux";
import { inputQuestionValue } from "../store/questionFormSlice";

export function OptionsList() {
  const optionsArr = useSelector(options);
  const question = useSelector(inputQuestionValue);

  const list = [];
  for (let i = 0; i < 5; i++) {
    list.push(
      <li key={"option" + i}>
        <input
          type="radio"
          name="option"
          id={"option" + i}
          disabled={!optionsArr[i]}
        />
        <label htmlFor={"option" + i}>
          {optionsArr[i] || "your option can be here"}
        </label>
      </li>
    );
  }

  return (
    <>
      {question && (
        <div>
          <ul>{list}</ul>
          <button>Let's vote!</button>
        </div>
      )}
    </>
  );
}
