import React from "react";
import "animate.css";
import { inputQuestionValue } from "../store/questionFormSlice";
import { useSelector } from "react-redux";

export function Question() {
  const question = useSelector(inputQuestionValue);
  return (
    <h2 className="animate__animated animate__animated animate__fadeInLeft">
      {question}
    </h2>
  );
}
