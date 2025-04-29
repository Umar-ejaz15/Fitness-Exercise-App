import React from "react";
import Hero from "./components/Hero";
import Searching from "./components/Searching";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Searching />
    </div>
  );
};

export default Home;
