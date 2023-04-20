import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addClickedCount,
  options,
  updateTotalClicks,
} from "../store/optionsFormSlice";
import { getWidth } from "./servise";

export const OptionsToVote = () => {
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);

  const onClickHandler = (index: number) => {
    dispatch(addClickedCount(index));
    dispatch(updateTotalClicks());
  };

  const list = optionsArr.map((el, index) => {
    return (
      <li
        style={{ width: getWidth(optionsArr) }}
        className="option_to_vote_item"
        key={index}
      >
        <button
          onClick={() => onClickHandler(index)}
          className="option_btn"
          style={{
            background: el.color,
          }}
        >
          {index + 1}
        </button>
        <p className="option_to_vote_text">{el.text}</p>
      </li>
    );
  });

  return <ul className="to_vote_list">{list}</ul>;
};
