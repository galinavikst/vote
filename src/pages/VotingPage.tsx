import React from "react";
import { OptionsToVote } from "../components/OptionsToVote";
import { useSelector } from "react-redux";
import { options } from "../store/optionsFormSlice";
import "../css/voting-page.css";
import "../css/media.css";
import createVotingBlock, { getTotalClicks } from "../components/servise";
import { Question } from "../components/Question";
import { isPercentage, isResult } from "../store/votingPageSlice";

export function VotingPage() {
  const optionsArr = useSelector(options);
  const toShowPercentage = useSelector(isPercentage);
  const toShowResult = useSelector(isResult);

  return (
    <>
      <section className="vote_section">
        <p className="total_votes">
          {getTotalClicks(optionsArr)} people have voted in this poll
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
