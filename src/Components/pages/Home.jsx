import React from "react";
import Name from "../utils/Home/Name";
import AboutMe from "../utils/Home/AboutMe";
import Tools from "../utils/Home/Tools";
import Transition from "../animation/Transition";
import ProjectsShowcase from "../utils/Home/ProjectsShowcase";
import Footer from "../utils/Home/Footer";

function Home() {
  return (
    <div>
      <Name />
      <AboutMe />
      <ProjectsShowcase />
      <Tools />
      <Footer />
    </div>
  );
}

export default Transition(Home);
