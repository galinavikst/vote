import React from "react";
import { Question } from "./Question";

export default function OptionsForm() {
  const inputs = [];

  for (let i = 0; i < 5; i += 1) {
    inputs.push(
      <li key={inputs.length}>
        <input type="text" />
      </li>
    );
  }

  return (
    <form>
      <Question />
      <div>
        <ul>{inputs}</ul>
      </div>
      <button>Save</button>
    </form>
  );
}
