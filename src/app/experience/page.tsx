"use client";
import AppLayout from "@/src/Components/AppLayout";
import Footer from "@/src/Components/Footer";
import BackgroundCollage from "@/src/Components/ImageCollage";
import Nav from "@/src/Components/Nav";
import Title from "@/src/Components/Title";
import ProjectCards from "@/src/Projects-Components/ProjectCards";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const images = Array.from(
  { length: 35 },
  (_, i) => `collage/Picture${i + 1}.webp`
);
export default function Experience() {
  return (
    <AppLayout>
      <>
        {/* <BackgroundCollage /> */}

        <div className="pt-44 px-6  flex flex-col gap-12 text-textColor">
          <div className="flex flex-col gap-6">
            <Title center={true} smaller={true}>
              Sector Expertise
            </Title>
            <ol className="list-disc marker:text-titleColor marker:text-lg place-self-center px-10 space-y-2 leading-[1.7] py-4 lg:gap-8 font-medium xl:leading-[1.9]  lg:text-lg">
              <li>Airport Terminal Superstructures</li>
              <li>Aircraft Hangars</li>
              <li>Civil Works, Roads and Bridges</li>
              <li>Infrastructure and Public Works</li>
              <li>Energy and Industrial Facilities</li>
              <li>Special Structures (Amphitheaters, Stadiums, Mosques)</li>
            </ol>
          </div>
          {/* <div className="flex flex-col gap-6">
          <Title center={true} className={"text-xl"}>
            Engineering Stories
          </Title>
          <ol className="list-disc marker:text-titleColor marker:text-xl place-self-center px-10 space-y-2 leading-[1.7] py-4 lg:gap-12 font-medium xl:text-xl xl:leading-[1.9]  lg:text-lg">
            <li>Mustafa Itri Mosque: From unbuildable to fabrication ready.</li>
            <li>MAPA Hangars: Structural and seismic optimization</li>
          </ol>
        </div> */}
          <ProjectCards projects={images} />
          <div className="flex flex-col px-12 pb-16">
            <Title smallest center={true}>
              Confidential Projects Disclaimer
            </Title>
            <p className="leading-[1.7] py-4  lg:gap-12 font-medium lg:px-80 xl:leading-[1.9] text-xs  lg:text-xs">
              Some of MustEng's most significant contributions have been
              delivered under strict confidentiality agreements. For this
              reason, certain projects referenced or implied on this website
              have been anonymized to honor our commitments. While project
              names, visuals or client identities may be withheld, the
              structural engineering expertise, problem-solving capabilities and
              design leadership described remain representative of our work
              across high-profile developments in the Middle East, Europe and
              Asia.
            </p>
          </div>
        </div>
      </>
    </AppLayout>
  );
}

// export default function Experience() {
//   let [activeTab, setActiveTab] = useState(projects[0].id);

//   return (
//     <AppLayout>
//       <div className="py-36">
//         <div className="mb-12 xl:mb-24">
//           <Title center={true} className={""}>
//             Complex Projects, Constructable Solutions
//           </Title>
//           <h1 className="text-textColor text-xl xl:text-2xl italic text-center px-4">
//             Explore how we turn engineering expertise into built reality.
//           </h1>
//         </div>
//         <ProjectCards projects={projects} />
//       </div>
//     </AppLayout>
//   );
// }
