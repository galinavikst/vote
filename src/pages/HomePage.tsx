import React from "react";
import { useNavigate } from "react-router-dom";
import { IQuestions, allClients } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion } from "../store/questionFormSlice";
import { options, setOptions } from "../store/optionsFormSlice";
import createVotingBlock from "../components/servise";
import { isPercentage, isResult } from "../store/votingPageSlice";
import { useEffect, useState } from "react";
import { LottieSet } from "../components/Lottie";
import { lottiePage, setPage } from "../store/lottieSlice";
import Hero from "../components/Hero";
import "../css/poll-home.css";

export default function HomePage() {
  const [seachInputValue, setSeachInputValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const toShowPercentage = useSelector(isPercentage);
  const toShowResult = useSelector(isResult);
  const page = useSelector(lottiePage);

  useEffect(() => {
    dispatch(setPage("home"));
  }, [dispatch, page]);

  const goVote = (item: IQuestions) => {
    dispatch(setQuestion(item.question));
    dispatch(setOptions(item.options));
    createVotingBlock(optionsArr, toShowPercentage, toShowResult);
    navigate("/voting-page");
    dispatch(setPage("voting-page"));
  };

  const handleOnChange = (inputValue: string) => {
    setSeachInputValue(inputValue);
  };

  const questions = allClients.flatMap((el) => {
    return el.questions.map((item) => {
      if (
        item.question.toLowerCase().indexOf(seachInputValue.toLowerCase()) ===
        -1
      )
        return null; //if there is no matches beetween searchInput and questions

      return isHighlightedQuestionItems(item, seachInputValue, goVote);
    });
  });

  return (
    <>
      <Hero />
      <div id="poll" className="app_wrapper home">
        <h2>Find Your Desired Poll</h2>
        <div className="app_wrapper lookup">
          <div className="lookup_wrapper">
            <form>
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => handleOnChange(e.target.value)}
                value={seachInputValue}
              />
            </form>
            <ol>{questions}</ol>
          </div>
          <LottieSet />
        </div>
      </div>
    </>
  );
}

//handle the correct execution of questions on the page based on the search input
function isHighlightedQuestionItems(
  item: IQuestions,
  seachInputValue: string,
  goVoteFn: (item: IQuestions) => void
) {
  const regex = new RegExp(`(${seachInputValue})`, "gi"); // global, case insensitive
  const partsArr = item.question.split(regex);

  return (
    <li key={item.question} onClick={() => goVoteFn(item)}>
      {seachInputValue
        ? partsArr.map((part, index) =>
            regex.test(part) ? (
              <span key={index} className="highlighted">
                {part}
              </span>
            ) : (
              <span key={index}>{part}</span>
            )
          )
        : item.question}
      <span className="pop_up">{item.totalClicks} people voted</span>
    </li>
  );
}
