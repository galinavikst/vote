import React from "react";
import { Question } from "./components/Question";
import { OptionsList } from "./components/OptionsList";
import { LetsVoteBlock } from "./components/LetsVoteBlock";

export function VotingPage() {
  return (
    <section className="vote_section">
      <LetsVoteBlock />
    </section>
  );
}
