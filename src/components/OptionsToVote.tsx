import React from "react";
import { useEffect, useState } from "react";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { addClickedCount, options } from "../store/optionsFormSlice";
import {
  setIsVotedInThisPoll,
  setShowPercentage,
  setShowResults,
} from "../store/votingPageSlice";
import { inputQuestionValue } from "../store/questionFormSlice";
import { allClients } from "../data";

export const OptionsToVote = () => {
  const [voted, setVoted] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const question = useSelector(inputQuestionValue);

  const onClickHandler = (index: number) => {
    dispatch(setShowPercentage(false));
    dispatch(addClickedCount(index));
    dispatch(setShowResults(true));
    setTimeout(() => {
      dispatch(setShowPercentage(true));
    }, 1000);
    setVoted(true);
    setClickedIndex(index);
    dispatch(setIsVotedInThisPoll(true));

    // Find the voted question in allClients and update votedOption
    allClients.forEach((client) => {
      client.questions.forEach((obj) => {
        if (obj.id === question) {
          obj.votedOption = index;
          obj.totalClicks += 1;
          const optionsCopy = [...obj.options]; // Create a copy of the options array
          optionsCopy[index] = {
            ...optionsCopy[index], // Create a copy of the selected option
            clicked: optionsCopy[index].clicked + 1, // Modify the clicked property
          };

          obj.options = optionsCopy; // Update the original options array with the modified copy
        }
      });
    });
  };

  // Check if any option is voted before
  useEffect(() => {
    const votedBeforeIndex = () => {
      let index = -1;
      allClients.forEach((client) => {
        client.questions.forEach((obj) => {
          if (obj.id === question && obj.votedOption >= 0) {
            index = obj.votedOption;
            setVoted(true);
          }
        });
      });
      return index;
    };

    setClickedIndex(votedBeforeIndex());
  }, [question]);

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
