import React from "react";
import { LetsVoteBlock } from "./components/LetsVoteBlock";
import { OptionsToVote } from "./components/OptionsToVote";
import { isRedyToVote } from "./store/optionsListSlice";
import { useSelector } from "react-redux";

export function VotingPage() {
  const letsVoteClicked = useSelector(isRedyToVote);
  return (
    <>
      {letsVoteClicked && (
        <section className="vote_section">
          <LetsVoteBlock />
          <OptionsToVote />
        </section>
      )}
    </>
  );
}
