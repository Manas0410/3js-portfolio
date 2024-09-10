import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import React from "react";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
