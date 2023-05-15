import { useNavigate } from "react-router-dom";
import { allClients } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion } from "../store/questionFormSlice";
import { IOption, options, setOptions } from "../store/optionsFormSlice";
import createVotingBlock from "../components/servise";
import { isPercentage, isResult } from "../store/votingPageSlice";
import { useState } from "react";

interface IQuestion {
  question: string;
  options: IOption[];
}

export default function HomePage() {
  const [seachInputValue, setSeachInputValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const toShowPercentage = useSelector(isPercentage);
  const toShowResult = useSelector(isResult);

  const sendToQuestionForm = () => {
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
    <div>
      <button onClick={sendToQuestionForm}>create your own question</button>
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
  );
}

//handle the correct execution of questions on the page based on the search input
function isHighlightedQuestionItems(
  item: IQuestion,
  seachInputValue: string,
  goVoteFn: (item: IQuestion) => void
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
    </li>
  );
}
