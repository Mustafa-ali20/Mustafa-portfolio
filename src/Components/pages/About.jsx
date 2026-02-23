import Transition from "../animation/Transition";
import Intro from "../utils/About/Intro";
import AnimatedIntro from "../utils/About/AnimatedIntro";
import Footer from "../utils/Shared/Footer";
import FinishingIntro from "../utils/About/FininshingIntro";
import TechnologyArsenal from "../utils/About/TechnologyArsenal";

function About() {
  return (
    <div>
      <Intro />
      <div className="mt-30 lg:mt-0"><AnimatedIntro /></div>
      
      <FinishingIntro />
      <TechnologyArsenal />
      <div className="mt-30">
        <Footer />
      </div>
    </div>
  );
}

export default Transition(About);
