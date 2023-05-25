import React, { useEffect, useState } from "react";
import { OptionsToVote } from "../components/OptionsToVote";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../store/optionsFormSlice";
import "../css/voting-page.css";
import "../css/media.css";
import createVotingBlock, { getTotalClicks } from "../components/servise";
import { Question } from "../components/Question";
import {
  isPercentage,
  isResult,
  setShowPercentage,
  setShowResults,
} from "../store/votingPageSlice";
import { inputQuestionValue } from "../store/questionFormSlice";
import { IClient } from "../data";

export function VotingPage({ allClients }: { allClients: IClient[] }) {
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const toShowPercentage = useSelector(isPercentage);
  const toShowResult = useSelector(isResult);
  const question = useSelector(inputQuestionValue);

  // Calculate initial totalClicks based on allClients
  const objClicks = () => {
    let clicks;
    allClients.forEach((client: IClient) => {
      client.questions.forEach((obj) => {
        if (obj.id === question) {
          clicks = obj.totalClicks;
        }
      });
    });
    return clicks;
  };
  console.log(objClicks());

  const [totalClicks, setTotalClicks] = useState<number | undefined>(
    objClicks()
  );

  // Find the voted question in allClients and set ShowResult, ShowPercentage, totalClicks if user has voted on it
  useEffect(() => {
    allClients.forEach((client: IClient) => {
      client.questions.forEach((obj) => {
        if (obj.id === question && obj.votedOption >= 0) {
          dispatch(setShowPercentage(true));
          dispatch(setShowResults(true));
          setTotalClicks(obj.totalClicks);
        }
      });
    });
  }, [allClients, dispatch, question, totalClicks]);

  console.log(optionsArr);

  return (
    <>
      <section className="vote_section">
        <p className="total_votes">
          {toShowPercentage ? getTotalClicks(optionsArr) : totalClicks} people
          have voted in this poll
        </p>
        <div className="results_block">
          <Question />
          <div className="results">
            {createVotingBlock(optionsArr, toShowPercentage, toShowResult)}
          </div>
        </div>
        <OptionsToVote />
      </section>
    </>
  );
}
