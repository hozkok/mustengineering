"use client";

import AppLayout from "@/src/Components/AppLayout";
import Title from "@/src/Components/Title";
import ServiceCard from "@/src/Services-Components/ServiceCard";

function Services() {
  return (
    <AppLayout>
      <div className="py-36 px-6 space-y-8 md:space-y-12 bg-gradient-to-br from-[#151008] to-background">
        <Title center={true} className={""}>
          Services
        </Title>

        <ServiceCard
          serviceName={"Structural Design"}
          serviceDescription={
            "Concept to detailed design for large and complex projects"
          }
          iconPath={"/services/services-structuralDesign.png"}
          to={"/services/structural-design"}
          imgSrc={"services/structuralDesign.png"}
        />
        <ServiceCard
          serviceName={"Construction Engineering"}
          serviceDescription={
            "Buildability assessments, construction staging, erection sequencing"
          }
          iconPath={"/services/services-constructionEngineering.png"}
          to={"/services/construction-engineering"}
          imgSrc={"services/constructionEngineering.png"}
        />
        <ServiceCard
          serviceName={"Seismic and Wind Engineering"}
          serviceDescription={`Performance-based seismic design compliant with Turkish, American, Eurocodes, GOST and British Standards`}
          iconPath={"/services/services-seismicEngineering.png"}
          to={"/services/seismic&wind-engineering"}
          imgSrc={"services/seismic-windEng.png"}
        />
        <ServiceCard
          serviceName={"Tender and Value Engineering"}
          serviceDescription={`Tender phase support, value optimization studies`}
          iconPath={"/services/value.png"}
          to={"/services/tender&value-engineering"}
          imgSrc={"services/tender-valueEngineering.png"}
        />
        <ServiceCard
          serviceName={"Design Management"}
          serviceDescription={`RFI management, submittals, site coordination`}
          iconPath={"/services/services-designManagement.png"}
          to={"/services/design-management"}
          imgSrc={"services/designManagement.jpg"}
        />
      </div>
    </AppLayout>
  );
}

export default Services;
