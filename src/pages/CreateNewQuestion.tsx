import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import OptionsForm from "../components/OptionsForm";
import QuestionForm from "../components/QuestionForm";

//create new question
export default function CreateVotingPage() {
  return (
    <div className="app_wrapper">
      <>
        <QuestionForm />
        <OptionsForm />
      </>
      <Player
        src="https://assets5.lottiefiles.com/packages/lf20_sostbrzv.json"
        className="player_pencil animate__animated animate__backInDown"
        autoplay
        loop
      />
    </div>
  );
}
