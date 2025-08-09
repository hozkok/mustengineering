import ProjectCard from "../Components/ProjectCard";
import Title from "../Components/Title";
import Link from "next/link";
function FeaturedProjects() {
  return (
    <section className="p-8 flex flex-col gap-12 h-full bg-gradient-to-br from-[#151008] to-[#222831] text-lightTextColor pb-24">
      {/* <h1 className="text-3xl font-semibold text-center p-12 text-titleColor xl:text-4xl">
        Featured Projects
      </h1> */}
      <Title center={true}>Featured Projects</Title>
      <div className="flex flex-col justify-center items-center gap-8 xl:gap-24 md:gap-12">
        <ProjectCard
          title={`Kuwait International Airport Project – Carpark Approach Roads and Bridges`}
          description={""}
          imgSrc={"/featuredProjects/project1.jpg"}
        />
        <ProjectCard
          title={`TRT Mustafa Itri Mosque`}
          description={``}
          imgSrc={"/featuredProjects/project2.jpg"}
        />
        <ProjectCard
          title={`NEOM - Mirage Visitors Center`}
          description={""}
          imgSrc={"/featuredProjects/project3.jpg"}
        />
      </div>
      {/* <Link href={"/projects"} className="text-center">
        <button
          className="text-center bg-background text-buttonColor rounded-md cursor-pointer 
        hover:bg-hoverState hover:text-textColor transition-all duration-200 xl:text-2xl  2xl:text-2xl 2xl:py-3 2xl:px-6 py-2 px-4"
        >
          See All Projects
        </button>
      </Link> */}
    </section>
  );
}

export default FeaturedProjects;
