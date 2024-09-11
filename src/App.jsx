import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import React from "react";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
