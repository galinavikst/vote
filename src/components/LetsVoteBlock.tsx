import React from "react";
import { useSelector } from "react-redux";
import { options, total } from "../store/optionsFormSlice";
import { Question } from "./Question";
import { getHight, getWidth } from "./servise";

export function LetsVoteBlock() {
  const optionsArr = useSelector(options);
  const totalClick = useSelector(total);
  console.log(totalClick);

  const results = optionsArr.map((el, index) => {
    return (
      <div
        key={index}
        style={{
          width: getWidth(optionsArr),
          background: el.color,
          height: getHight(totalClick, el.clicked),
          transition: "height 1s ease-in-out",
        }}
        className="result"
      ></div>
    );
  });

  return (
    <div className="results_block">
      <Question />
      <div className="results">{results}</div>
    </div>
  );
}
