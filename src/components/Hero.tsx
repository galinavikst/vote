import React from "react";
import { useDispatch } from "react-redux";
import { resetLottieSrc, setPage } from "../store/lottieSlice";
import { setOptions } from "../store/optionsFormSlice";
import { setQuestion } from "../store/questionFormSlice";
import { useNavigate } from "react-router-dom";
import "../css/hero.css";

export default function Hero() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendToQuestionForm = () => {
    dispatch(setOptions([]));
    dispatch(setQuestion(""));
    dispatch(resetLottieSrc()); //reset src to prevent doublicate lottie
    dispatch(setPage("forms"));
    navigate("/forms");
  };

  return (
    <div className="hero_wrapper">
      <h1 className=" animate__animated animate__fadeIn">
        Be the part of decision
      </h1>
      <div className="hero">
        <button className="create_poll_btn" onClick={sendToQuestionForm}>
          create your poll
        </button>
      </div>
    </div>
  );
}
