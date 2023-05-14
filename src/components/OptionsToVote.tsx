import React, { useState } from "react";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { addClickedCount, options } from "../store/optionsFormSlice";
import { setShowPercentage, setShowResults } from "../store/votingPageSlice";

export const OptionsToVote = () => {
  const [voted, setVoted] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);

  const onClickHandler = (index: number) => {
    dispatch(setShowPercentage(false));
    dispatch(addClickedCount(index));
    dispatch(setShowResults(true));
    setTimeout(() => {
      dispatch(setShowPercentage(true));
    }, 1000);
    setVoted(true);
    setClickedIndex(index);
  };

  const list = optionsArr.map((el, index) => {
    const isClicked = index === clickedIndex;

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
            opacity: isClicked ? 1 : voted ? 0.4 : 1,
            transform: isClicked ? "scale(1.1)" : "",
            pointerEvents: voted ? "none" : "auto",
          }}
          disabled={voted}
        >
          {el.text}
        </button>
      </li>
    );
  });

  return <ul className="to_vote_list">{list}</ul>;
};
