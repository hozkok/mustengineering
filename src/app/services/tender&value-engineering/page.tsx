import AppLayout from "@/src/Components/AppLayout";
import Service from "@/src/Services-Components/Service";

export default function TenderAndValueEngineering() {
  return (
    <AppLayout>
      <Service
        title={"Tender and Value Engineering"}
        firstText={`MustEng supports tender phases with technical clarity and strategic insight, helping contractors win and deliver with confidence. We provide early-stage structural input, design optimizations, and cost-saving alternatives that preserve project intent. Our Value Engineering process identifies smarter materials, simpler systems, and construction-friendly solutions. The result: competitive bids and fewer surprises during execution.`}
        firstImgSrc={"/services/structural-design/structural-design1.jpg"}
        secondText={`Tender and Value Engineering at MustEng is about balancing ambition with efficiency. We collaborate closely with contractors to refine designs, improve constructability, and reduce costs — all without sacrificing performance. By identifying high-impact optimizations early, we help secure projects and streamline delivery. It's engineering that adds value from day one.
`}
        secondImgSrc={"/services/structural-design/structural-design2.jpg"}
      />
    </AppLayout>
  );
}
