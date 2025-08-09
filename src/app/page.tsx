"use client";

import "../index.css";
import App from "../App";
import AppLayout from "../Components/AppLayout";
import HeroSection from "../Homepage-Components/HeroSection";
import WhoWeAre from "../Homepage-Components/WhoWeAre";
import Services from "../Homepage-Components/Services";
import FeaturedProjects from "../Homepage-Components/FeaturedProjects";
import Strengths from "../Homepage-Components/Strengths";

//export function generateStaticParams() {
//  return [{ slug: [''] }]
//}

export default function Page() {
  return (
    <AppLayout>
      <>
        <HeroSection />
        <WhoWeAre />
        <Services />
        <FeaturedProjects />
        <Strengths />
      </>
    </AppLayout>
  );
}
