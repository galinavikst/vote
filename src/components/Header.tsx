import React from "react";
import "../css/header-footer.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <Link to="/vote">Back home</Link>
      </div>
    </header>
  );
}
