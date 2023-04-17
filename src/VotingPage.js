import React from "react";
import { Question } from "./components/Question";

export function VotingPage() {
  return (
    <section>
      <Question />
      <div className="results_block">
        <div className="result">result</div>
        <div className="result">result</div>
      </div>
      <ul>
        <li>
          <input type="radio" />
          <label>option 1 is here</label>
        </li>
        <li>
          <input type="radio" />
          <label>option 1 is here</label>
        </li>
      </ul>
    </section>
  );
}
