import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import ExcerciseDetailsPage from "./pages/exercise/[exercise]";

const App = () => {
  return (
    <Router>
      <div className="bg-zinc-900 min-h-screen text-white">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exercises/:id/details"
          element={<ExcerciseDetailsPage />}
          />
      </Routes>
          </div>
    </Router>
  );
};

export default App;
