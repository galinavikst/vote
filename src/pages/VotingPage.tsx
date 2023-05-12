import React from "react";
import { LetsVoteBlock } from "../components/LetsVoteBlock";
import { OptionsToVote } from "../components/OptionsToVote";
import { useSelector } from "react-redux";
import { options } from "../store/optionsFormSlice";
import "../css/voting-page.css";
import { getTotalClicks } from "../components/servise";

export function VotingPage() {
  //const totalVotes = useSelector(total);
  const optionsArr = useSelector(options);

  return (
    <>
      <section className="vote_section">
        <p className="total_votes">
          {getTotalClicks(optionsArr)} people have voted in this poll
        </p>
        <LetsVoteBlock />
        <OptionsToVote />
      </section>
    </>
  );
}
