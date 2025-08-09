import AppLayout from "@/src/Components/AppLayout";
import Service from "@/src/Services-Components/Service";

export default function DesignManagement() {
  return (
    <AppLayout>
      <Service
        title={"Design Management"}
        firstText={`Design Management at MustEng ensures that every design element aligns with project goals, timelines, and constructability. We coordinate multidisciplinary teams, manage technical workflows, and resolve design issues before they reach the site. Our proactive approach reduces delays, cost overruns, and scope gaps. With structured oversight, we turn complex designs into coordinated, buildable solutions.`}
        firstImgSrc={"/services/structural-design/structural-design1.jpg"}
        secondText={`MustEng leads the design process with clarity, control, and contractor-focused insight. We manage the interfaces between architecture, engineering, and construction to ensure designs are accurate, timely, and aligned with the realities of the site. Through rigorous coordination and issue tracking, we keep projects on target and teams informed. Our focus is simple: deliver designs that work in the real world.
`}
        secondImgSrc={"/services/structural-design/structural-design2.jpg"}
      />
    </AppLayout>
  );
}
