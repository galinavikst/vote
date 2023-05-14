import React from "react";
import "../css/header-footer.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowResults } from "../store/votingPageSlice";

export default function Header() {
  const dispatch = useDispatch();

  const onclickHandler = () => {
    dispatch(setShowResults(false));
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
