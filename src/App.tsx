import React from "react";
import "animate.css";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import NotFound from "./pages/notFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateNewQuestion from "./pages/CreateNewQuestion";
import { VotingPage } from "./pages/VotingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/vote" element={<HomePage />} />
          <Route path="/forms" element={<CreateNewQuestion />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/voting-page" element={<VotingPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
