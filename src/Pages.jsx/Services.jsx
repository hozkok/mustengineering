import ServiceCard from "../Services-Components/ServiceCard";
import Title from "../Components/Title";
function Services() {
  return (
    <div className="py-44 px-6 space-y-8 bg-backgroundLight">
      <Title>Services</Title>

      <ServiceCard
        serviceName={"Structural Design"}
        serviceDescription={
          "Efficient, code-compliant designs grounded in real-world application."
        }
        iconPath={"/services/services-structuralDesign.png"}
        to={"/services/structural-design"}
      />
      <ServiceCard
        serviceName={"Construction Engineering"}
        serviceDescription={
          "Temporary works and construction logistics designed for real-world conditions."
        }
        iconPath={"/services/services-constructionEngineering.png"}
      />
      <ServiceCard
        serviceName={"Seismic and Wind Engineering"}
        serviceDescription={`Performance-based engineering for structures exposed to dynamic environmental forces.`}
        iconPath={"/services/services-seismicEngineering.png"}
      />
      <ServiceCard
        serviceName={"Tender and Value Engineering"}
        serviceDescription={`Structural optimization that reduces cost and time without compromising performance.`}
        iconPath={"/services/value.png"}
      />
      <ServiceCard
        serviceName={"Design Management"}
        serviceDescription={`Coordinated, controlled delivery of engineering design across teams, timelines, and phases.`}
        iconPath={"/services/services-designManagement.png"}
      />
    </div>
  );
}

export default Services;
