import AppLayout from "@/src/Components/AppLayout";
import Service from "@/src/Services-Components/Service";

export default function ConstructionEngineering() {
  return (
    <AppLayout>
      <Service
        title={"Construction Engineering"}
        firstText={
          "Construction Engineering bridges the gap between design intent and on-site execution. At MustEng, we engineer construction processes that improve efficiency, safety, and buildability. From temporary works to construction staging and sequencing, our team supports contractors in navigating complex site conditions. We provide real-time, practical solutions that keep projects moving forward with confidence."
        }
        firstImgSrc={"/services/structural-design/structural-design1.jpg"}
        secondText={`At MustEng, Construction Engineering is about making the build happen — safely, smartly, and on schedule. We work closely with construction teams to solve field challenges through engineered methods, detailed planning, and temporary works design. Our experience spans everything from crane foundation design to excavation support and formwork systems. With every detail, we aim to reduce risk and enable seamless execution in the field.`}
        secondImgSrc={"/services/structural-design/structural-design2.jpg"}
      />
    </AppLayout>
  );
}
