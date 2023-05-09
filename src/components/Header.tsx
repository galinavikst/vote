import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/vote">Back home</Link>
    </header>
  );
}
