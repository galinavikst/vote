import React from "react";
import { Question } from "./Question";
import { useSelector } from "react-redux";
import { inputQuestionValue } from "../store/questionFormSlice";

export default function OptionsForm() {
  const question = useSelector(inputQuestionValue);

  const inputs = [];

  for (let i = 0; i < 5; i += 1) {
    inputs.push(
      <li key={inputs.length}>
        <input type="text" />
      </li>
    );
  }

  return (
    <>
      {question && (
        <form>
          <Question />
          <div>
            <ul>{inputs}</ul>
          </div>
          <button>Save</button>
        </form>
      )}
    </>
  );
}
