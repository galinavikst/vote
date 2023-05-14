import React from "react";
import { useNavigate } from "react-router-dom";
import { allClients } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { inputQuestionValue, setQuestion } from "../store/questionFormSlice";
import { IOption, options, setOptions } from "../store/optionsFormSlice";
import createVotingBlock from "../components/servise";
import { isPercentage, isResult } from "../store/votingPageSlice";

interface IQuestion {
  question: string;
  options: IOption[];
}

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const toShowPercentage = useSelector(isPercentage);
  const toShowResult = useSelector(isResult);
  const question = useSelector(inputQuestionValue);

  const sendToQuestionForm = () => {
    console.log(question);
    dispatch(setOptions([]));
    dispatch(setQuestion(""));
    navigate("/forms");
  };

  const goVote = (item: IQuestion) => {
    dispatch(setQuestion(item.question));
    dispatch(setOptions(item.options));
    createVotingBlock(optionsArr, toShowPercentage, toShowResult);
    navigate("/voting-page");
  };

  const questions = allClients.flatMap((el) => {
    return el.questions.map((item) => {
      return (
        <li key={item.question} onClick={() => goVote(item)}>
          {item.question}
        </li>
      );
    });
  });

  return (
    <div>
      <p>Home</p>
      <button onClick={sendToQuestionForm}>create your own question</button>
      <ol>{questions}</ol>
    </div>
  );
}
