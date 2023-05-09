import React from "react";
import { LetsVoteBlock } from "../components/LetsVoteBlock";
import { OptionsToVote } from "../components/OptionsToVote";
import { useSelector } from "react-redux";
import { isRedyToVote, total } from "../store/optionsFormSlice";
import "../css/voting-page.css";

export function VotingPage() {
  const letsVoteClicked = useSelector(isRedyToVote);
  const totalVotes = useSelector(total);
  return (
    <>
      {letsVoteClicked && (
        <section className="vote_section">
          <p className="total_votes">
            {totalVotes} people have voted in this poll
          </p>
          <LetsVoteBlock />
          <OptionsToVote />
        </section>
      )}
    </>
  );
}
