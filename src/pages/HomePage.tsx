import React from "react";
import { useNavigate } from "react-router-dom";
import { allClients } from "../data";

export default function HomePage() {
  const navigate = useNavigate();
  const questions = allClients.flatMap((el, index) => {
    return el.questions.map((item) => {
      return <li key={item.question}>{item.question}</li>;
    });
  });

  const sendToForms = () => {
    navigate("/forms");
  };

  return (
    <div>
      <p>Home</p>
      <button onClick={sendToForms}>create your own question</button>
      <ol>{questions}</ol>
    </div>
  );
}
