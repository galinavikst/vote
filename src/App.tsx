import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import QuestionForm from "./components/QuestionForm";
import OptionsForm from "./components/OptionsForm";
import { VotingPage } from "./VotingPage";
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vote" element={<CreateVotingPage />} />
        <Route path="/voting-page" element={<VotingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function CreateVotingPage() {
  return (
    <div className="app_wrapper">
      <>
        <QuestionForm />
        <OptionsForm />
      </>
      <Player
        src="https://assets5.lottiefiles.com/packages/lf20_sostbrzv.json"
        className="player_pencil"
        autoplay
        loop
      />
    </div>
  );
}

export default App;
