import React from "react";
import QuestionForm from "./components/QuestionForm";
import OptionsForm from "./components/OptionsForm";
import { VotingPage } from "./VotingPage";

function App() {
  return (
    <div className="App">
      <QuestionForm />
      <OptionsForm />
      <VotingPage />
    </div>
  );
}

export default App;
