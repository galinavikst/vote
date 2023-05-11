import React from "react";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addClickedCount,
  options,
  updateTotalClicks,
} from "../store/optionsFormSlice";
import { setShowPercentage, setShowResults } from "../store/letsVoteBlockSlice";

export const OptionsToVote = () => {
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);

  const onClickHandler = (index: number) => {
    const clicks = optionsArr.reduce((acc, el) => {
      return acc + el.clicked;
    }, 0);
    dispatch(setShowPercentage(false));
    dispatch(addClickedCount(index));
    dispatch(updateTotalClicks(clicks));
    dispatch(setShowResults(true));
    setTimeout(() => {
      dispatch(setShowPercentage(true));
    }, 1000);
  };

  const list = optionsArr.map((el, index) => {
    return (
      <li
        className="option_to_vote_item animate__animated animate__flipInX animate__delay-1s"
        key={index}
      >
        <button
          onClick={() => onClickHandler(index)}
          className="option_btn"
          style={{
            background: el.color,
          }}
        >
          {el.text}
        </button>
      </li>
    );
  });

  return <ul className="to_vote_list">{list}</ul>;
};
