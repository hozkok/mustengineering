import AppLayout from "@/src/Components/AppLayout";
import Service from "@/src/Services-Components/Service";

export default function SeismicAndWindEngineering() {
  return (
    <AppLayout>
      <Service
        title={"Seismic and Wind Engineering"}
        firstText={`MustEng provides advanced Seismic and Wind Engineering solutions tailored to structural resilience and regional demands. We analyze building behavior under extreme loads and design systems that meet or exceed safety codes. Our team uses performance-based design to optimize both safety and cost without compromising constructability. Whether it’s high winds or seismic zones, we build confidence into every structure.
`}
        firstImgSrc={"/services/structural-design/structural-design1.jpg"}
        secondText={`Structural integrity under dynamic forces is a core MustEng specialty. We evaluate wind and earthquake loads with precision, using the latest modeling tools and region-specific standards. Our solutions are not just code-compliant — they’re constructible, efficient, and tailored to real-world risks. With our expertise, critical structures stand strong under nature’s toughest tests.
`}
        secondImgSrc={"/services/structural-design/structural-design2.jpg"}
      />
    </AppLayout>
  );
}
