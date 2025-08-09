import Title from "../Components/Title";

function AboutUsNew() {
  return (
    <div className="pt-44 xl:pt-56 flex flex-col xl:flex-row xl:mb-24 mb-12 justify-center items-center">
      <div className="text-textColor px-6 space-y-10">
        <p className="text-center">
          <span className="text-titleColor font-semibold text-lg">
            Who We Are:
          </span>{" "}
          Structural Engineering with Precision, Practicality and Partnership
        </p>
        <p className="italic text-center">
          Founded to bridge engineering excellence with contractor needs,
          specializes in structural solutions for complex, large-scale projects.
        </p>

        <p className="text-center">
          <span className="text-titleColor font-semibold text-lg">
            Our Philosophy:
          </span>{" "}
          "Design as if you are on site yourself."
        </p>
        <div className="flex flex-col items-center justify-center gap-3">
          <Title smaller={true} center={true}>
            Our Experience:
          </Title>
          <ul className="space-y-4 w-full text-center">
            <li>Airport Terminal Structures</li>
            <li>Civil Works, Roads, Bridges</li>
            <li>Industrial and Energy Facilities</li>
            <li>Architecturally Complex Public Structures</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <Title smaller={true} center={true}>
            Key Strengths:
          </Title>
          <ul className="space-y-4 w-full text-center">
            <li>Contractor-Centric Mindset</li>
            <li>Value Engineering Expertise</li>
            <li>Real-World Design Management</li>
            <li>Advanced Structural Engineering</li>
          </ul>
        </div>
        <p className="text-center">
          <span className="text-titleColor font-semibold text-lg">
            Our Vision:
          </span>{" "}
          "To be the structural engineering partner that contractors trust from
          vision to execution."
        </p>
      </div>

      <img
        src="aboutUs.png"
        alt=""
        className="p-8 lg:p-0 xl:w-1/3 lg:shadow-elevation-high rounded-md sm:w-3/4 md:w-2/4"
      />
    </div>
  );
}

export default AboutUsNew;
