import { useState } from "react";
import { Link, NavLink } from "react-router";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "motion/react";
import Strengths from "../Homepage-Components/Strengths";
import FeaturedProjects from "../Homepage-Components/FeaturedProjects";
import Services from "../Homepage-Components/Services";
import WhoWeAre from "../Homepage-Components/WhoWeAre";
import HeroSection from "../Homepage-Components/HeroSection";
function HomePage() {
  const [backgroundState, setBackgroundState] = useState(1);

  console.log(backgroundState);

  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <Services />
      <FeaturedProjects />
      <Strengths />
    </>
  );
}
// sm:w-1/2 md:w-1/2 lg:w-1/2  xl:w-1/2
export default HomePage;
