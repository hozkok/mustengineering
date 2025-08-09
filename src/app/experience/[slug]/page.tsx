import AppLayout from "@/src/Components/AppLayout";
import { projects } from "@/src/Data/projects";
import ClientSideProject from "@/src/Projects-Components/ClientSideProject";
import { motion } from "framer-motion";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// const projects = [
//   {
//     id: 1,
//     slug: "lusail-multipurpose-hall",
//     projectShortName: "Lusail Multipurpose Hall",
//     projectFullName: "Lusail Multipurpose Hall, Doha, Qatar",
//     imgSrc: "/experience/lusail/experience-lusail.jpg",
//     img2Src: "/experience/lusail/experience-lusail-2.jpg",
//     img3Src: "/experience/lusail/experience-lusail-3.jpg",
//     img4Src: "/experience/lusail/experience-lusail-4.jpg",
//     description:
//       "Single layer diagrid roof with 140m span was designed with a 1/340 thickness over span ratio. Structural design, and detailing of a sports hall roof and miscellaneous steels (5.000tons).",
//   },
//   {
//     id: 2,
//     slug: "thy-habom-project",
//     projectShortName: "THY Habom Project",
//     projectFullName: "THY Technic Habom Project, Istanbul, Turkey",
//     imgSrc: "/experience/thy/experience-thy.jpg",
//     img2Src: "/experience/thy/experience-thy-2.jfif",
//     img3Src: "/experience/thy/experience-thy-3.jpg",
//     img4Src: "/experience/thy/experience-thy-4.jpg",
//     description: "Placeholder Description for Project 2",
//   },
//   {
//     id: 3,
//     slug: "haramain-train-station",
//     projectShortName: "Haramain Train Station",
//     projectFullName: "Haramain Train Station, Medina, Saudi Arabia",
//     imgSrc: "/experience/haramain/experience-haramain.jpg",
//     img2Src: "/experience/haramain/experience-haramain-2.jpg",
//     img3Src: "/experience/haramain/experience-haramain-3.jpg",
//     img4Src: "/experience/haramain/experience-haramain-4.jpg",
//     description: "Placeholder Description for Project 3",
//   },
//   {
//     id: 4,
//     slug: "silkway-airlines-aircraft-maintenance-hangar",
//     projectShortName: "Silkway Airlines Aircraft Maintenance Hangar",
//     projectFullName:
//       "Silkway Airlines Aircraft Maintenance Hangar, Baku, Azerbaijan",

//     imgSrc: "/experience/silkway/experience-silkway.jpg",
//     img2Src: "/experience/silkway/experience-silkway-2.jfif",
//     img3Src: "/experience/silkway/experience-silkway-3.jfif",
//     img4Src: "/experience/haramain/experience-haramain.jpg",
//     description: "Placeholder Description for Project 4",
//   },
//   {
//     id: 5,
//     slug: "pulkova-international-airport",
//     projectShortName: "Pulkova International Airport",
//     projectFullName: "Pulkova International Airport, St.Petersburg, Russia",
//     imgSrc: "/experience/pulkova/experience-pulkova.jpg",
//     img2Src: "/experience/haramain/experience-haramain.jpg",
//     img3Src: "/experience/haramain/experience-haramain.jpg",
//     img4Src: "/experience/haramain/experience-haramain.jpg",
//     description: "Placeholder Description for Project 5",
//   },
// ];

export default function Project({ params }) {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>; // You could throw notFound() too
  }
  return (
    <AppLayout>
      <ClientSideProject project={project} />
    </AppLayout>
  );
}
