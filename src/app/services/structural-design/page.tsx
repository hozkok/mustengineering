import AppLayout from "@/src/Components/AppLayout";
import Service from "@/src/Services-Components/Service";

export default function StructuralDesign() {
  return (
    <AppLayout>
      <Service
        title={"Structural Design"}
        firstText={
          "Structural Design is the foundation of safe, efficient, and buildable structures. At MustEng, we approach every project with precision, ensuring that designs meet real-world construction demands. Our engineers combine advanced analysis with a contractor’s mindset to minimize risk and optimize materials. From concept to construction, we deliver designs that are as practical as they are resilient."
        }
        firstImgSrc={"/services/structural-design/structural-design1.jpg"}
        secondText={
          "Structural Design at MustEng means aligning innovation with execution. We engineer systems that not only perform under pressure but also support ease of construction and long-term durability. With deep expertise in complex and large-scale structures, we tailor every design to meet specific project and site challenges. The result is a reliable framework that supports vision, value, and viability."
        }
        secondImgSrc={"/services/structural-design/structural-design2.jpg"}
      />
    </AppLayout>
  );
}
