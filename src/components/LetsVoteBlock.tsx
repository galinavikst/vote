import React from "react";
import { useSelector } from "react-redux";
import { IOption, options } from "../store/optionsFormSlice";
import { Question } from "./Question";
import { getHight, getPercentage, getTotalClicks, getWidth } from "./servise";
import { isPercentage, isResult } from "../store/letsVoteBlockSlice";

export function LetsVoteBlock() {
  const optionsArr = useSelector(options);
  const toShowPercentage = useSelector(isPercentage);
  const toShowResult = useSelector(isResult);

  return (
    <div className="results_block">
      <Question />
      <div className="results">
        {createVotingBlock(optionsArr, toShowPercentage, toShowResult)}
      </div>
    </div>
  );
}

export function createVotingBlock(
  optionsArr: IOption[],
  toShowPercentage: boolean,
  toShowResult: boolean
) {
  const clicks = getTotalClicks(optionsArr);

  const results = optionsArr.map((el, index) => {
    const height = getHight(clicks, el.clicked);
    console.log(clicks, optionsArr, el.clicked);

    return (
      <div
        className="result"
        key={index}
        style={{
          width: getWidth(optionsArr),
          background: el.color,
          height: toShowResult ? height + "px" : "5px",
        }}
      >
        {toShowPercentage && (
          <span className="percentage">
            {toShowResult ? getPercentage(height) + "%" : "0%"}
          </span>
        )}
      </div>
    );
  });

  return results;
}
