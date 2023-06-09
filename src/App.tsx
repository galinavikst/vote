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
import ScrollToTop from "./components/ScrollToTop";
import { allClients } from "./data";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/vote" element={<HomePage />} />
          <Route path="/forms" element={<CreateNewQuestion />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/voting-page"
            element={<VotingPage allClients={allClients} />}
          />
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
