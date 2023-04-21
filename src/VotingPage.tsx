import React from "react";
import { LetsVoteBlock } from "./components/LetsVoteBlock";
import { OptionsToVote } from "./components/OptionsToVote";
import { useSelector } from "react-redux";
import { isRedyToVote } from "./store/optionsFormSlice";

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
