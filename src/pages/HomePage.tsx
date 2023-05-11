import React from "react";
import { useNavigate } from "react-router-dom";
import { allClients } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion } from "../store/questionFormSlice";
import {
  IOption,
  options,
  setOptions,
  total,
  updateTotalClicks,
} from "../store/optionsFormSlice";
import { createVotingBlock } from "../components/LetsVoteBlock";
import { isPercentage, isResult } from "../store/letsVoteBlockSlice";

interface IQuestion {
  question: string;
  options: IOption[];
}
interface IDataItem {
  name: string;
  email: string;
  password: string;
  questions: IQuestion[];
}

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const totalClick = useSelector(total);
  const toShowPercentage = useSelector(isPercentage);
  const toShowResult = useSelector(isResult);

  const sendToQuestionForm = () => {
    navigate("/forms");
  };

  const goVote = (item: IQuestion) => {
    const clicks = item.options.reduce((acc, el) => {
      return acc + el.clicked;
    }, 0);
    dispatch(updateTotalClicks(clicks));
    dispatch(setQuestion(item.question));
    dispatch(setOptions(item.options));
    createVotingBlock(optionsArr, totalClick, toShowPercentage, toShowResult);
    navigate("/voting-page");
  };

  const questions = allClients.flatMap((el, index) => {
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
