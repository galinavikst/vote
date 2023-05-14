import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import OptionsForm from "../components/OptionsForm";
import QuestionForm from "../components/QuestionForm";
import { useSelector } from "react-redux";
import { options } from "../store/optionsFormSlice";

//create new question
export default function CreateNewQuestion() {
  const lottiePencil = {
    idea: "https://assets5.lottiefiles.com/packages/lf20_sostbrzv.json",
    sleepy: "https://assets5.lottiefiles.com/packages/lf20_kkkelbun.json",
    happy: "https://assets5.lottiefiles.com/packages/lf20_oc9peor8.json",
    thinking: "https://assets5.lottiefiles.com/packages/lf20_qyAboZXPX9.json",
    strong: "https://assets5.lottiefiles.com/packages/lf20_lgyb3olf.json",
  };

  const [lottieSrc, setLottieSrc] = useState(lottiePencil.idea);
  const optionsArr = useSelector(options);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLottieSrc(lottiePencil.sleepy);
    }, 10000); // change image src after 10 seconds of inactivity

    // clear timeout on component unmount or user activity
    const resetTimeout = () => {
      clearTimeout(timeoutId);
      setLottieSrc(lottiePencil.idea);
      timeoutId = setTimeout(() => {
        setLottieSrc(lottiePencil.sleepy);
      }, 10000);
    };
    document.addEventListener("mousemove", resetTimeout);
    document.addEventListener("keypress", resetTimeout);
    document.addEventListener("click", resetTimeout);

    //remove the event listeners and clear the timeout when the component unmounts
    // (by returning clean up function from ustEffect)
    return () => {
      document.removeEventListener("mousemove", resetTimeout);
      document.removeEventListener("keypress", resetTimeout);
      document.removeEventListener("click", resetTimeout);
      clearTimeout(timeoutId);
    };
  });

  return (
    <div className="app_wrapper">
      <>
        <QuestionForm />
        <OptionsForm />
      </>
      <Player
        src={optionsArr.length >= 2 ? lottiePencil.strong : lottieSrc}
        className="player_pencil animate__animated animate__backInDown"
        autoplay
        loop
      />
    </div>
  );
}
