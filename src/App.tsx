import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import QuestionForm from "./components/QuestionForm";
import OptionsForm from "./components/OptionsForm";
import { VotingPage } from "./VotingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <QuestionForm />
        <OptionsForm />
        <Routes>
          <Route path="/voting-page" element={<VotingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
