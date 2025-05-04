import React, { useEffect } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Service from "./components/service";
import Process from "./components/process";
import Tech from "./components/tech";
import Careers from "./components/careers";
import FAQ from "./components/faq";
import Team from "./components/team";
import "./index.css";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div>
      <Hero />
      <About />
      <Process />
      <Service />
      <Tech />
      <Careers />
      <FAQ />
      <Team />
    </div>
  );
};

export default App;
