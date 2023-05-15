import React from "react";
import "../css/header-footer.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowResults } from "../store/votingPageSlice";
import { resetLottieSrc, setPage } from "../store/lottieSlice";
import { setOptions } from "../store/optionsFormSlice";

export default function Header() {
  const dispatch = useDispatch();

  const onclickHandler = () => {
    dispatch(resetLottieSrc()); //reset src to prevent doublicate lottie
    dispatch(setPage("home"));
    dispatch(setShowResults(false));
    dispatch(setOptions([]));
  };

  return (
    <header>
      <div className="wrapper">
        <Link onClick={onclickHandler} to="/vote">
          Back home
        </Link>
      </div>
    </header>
  );
}
