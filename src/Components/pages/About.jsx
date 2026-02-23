import React, { useState, useEffect } from "react";
import { Waypoints, Calendar, ArrowUpRight } from "lucide-react";
import Transition from "../animation/Transition";
import Intro from "../utils/About/Intro";
import AnimatedIntro from "../utils/About/AnimatedIntro";
import Footer from "../utils/Shared/Footer";
import FinishingIntro from "../utils/About/FininshingIntro";

function About() {
  return (
    <div>
      <Intro />
      <AnimatedIntro />
      <FinishingIntro />
      <div className="mt-30">
        <Footer />
      </div>
    </div>
  );
}

export default Transition(About);
