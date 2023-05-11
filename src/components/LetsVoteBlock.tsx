import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IOption, options, total } from "../store/optionsFormSlice";
import { Question } from "./Question";
import { getHight, getPercentage, getWidth } from "./servise";
import {
  isPercentage,
  isResult,
  setShowPercentage,
} from "../store/letsVoteBlockSlice";

export function LetsVoteBlock() {
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const totalClick = useSelector(total);
  const toShowPercentage = useSelector(isPercentage);
  const toShowResult = useSelector(isResult);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(setShowPercentage(true));
  //   }, 1000);
  // }, [dispatch, totalClick]);

  // const results = optionsArr.map((el, index) => {
  //   const height = getHight(totalClick, el.clicked);
  //   return (
  //     <div
  //       className="result"
  //       key={index}
  //       style={{
  //         width: getWidth(optionsArr),
  //         background: el.color,
  //         height: height + "px",
  //       }}
  //     >
  //       {toShowPercentage && (
  //         <span className="percentage">{getPercentage(height) + "%"}</span>
  //       )}
  //     </div>
  //   );
  // });

  return (
    <div className="results_block">
      <Question />
      <div className="results">
        {createVotingBlock(
          optionsArr,
          totalClick,
          toShowPercentage,
          toShowResult
        )}
      </div>
    </div>
  );
}

export function createVotingBlock(
  optionsArr: IOption[],
  totalClick: number,
  toShowPercentage: boolean,
  toShowResult: boolean
) {
  const results = optionsArr.map((el, index) => {
    const height = getHight(totalClick, el.clicked);
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
