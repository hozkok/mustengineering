import CoFounders from "@/src/AboutUs-Components/CoFounders";
import DesignProcedure from "@/src/AboutUs-Components/DesignProcedure";
import WeAreMustEng from "@/src/AboutUs-Components/WeAreMustEng";
import WhatWeDo from "@/src/AboutUs-Components/WhatWeDo";
import WorkFlow from "@/src/AboutUs-Components/WorkFlow";
import "../globals.css";
import AppLayout from "@/src/Components/AppLayout";
import Title from "@/src/Components/Title";
import AboutUsNew from "@/src/AboutUs-Components/AboutUsNew";

function AboutUs() {
  return (
    <AppLayout>
      <div className="">
        <AboutUsNew />
        {/* <WeAreMustEng /> */}
        {/* <WhatWeDo />
        <DesignProcedure />
        <WorkFlow /> */}
        {/* <CoFounders /> */}
      </div>
    </AppLayout>
  );
}

export default AboutUs;
