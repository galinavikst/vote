import React from "react";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { addClickedCount, options } from "../store/optionsFormSlice";
import { setShowPercentage, setShowResults } from "../store/votingPageSlice";

export const OptionsToVote = () => {
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);

  const onClickHandler = (index: number) => {
    dispatch(setShowPercentage(false));
    dispatch(addClickedCount(index));
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
