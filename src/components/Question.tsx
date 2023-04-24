import React from "react";
import { inputQuestionValue } from "../store/questionFormSlice";
import { useSelector } from "react-redux";

export function Question() {
  const question = useSelector(inputQuestionValue);
  return <h2>{question}</h2>;
}
