import React from "react";
import { useSelector } from "react-redux";
import { options } from "../store/optionsFormSlice";
import { Question } from "./Question";

export function LetsVoteBlock() {
  const optionsArr = useSelector(options);
  return (
    <div className="results_block">
      <Question />
      <div className="results">
        <div className="result"></div>
        <div className="result"></div>
      </div>
    </div>
  );
}
