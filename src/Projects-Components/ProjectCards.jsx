"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectCards({ projects }) {
  return (
    <div>
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4 py-24 px-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden break-inside-avoid rounded-md"
            initial="initial"
            whileHover="hover"
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 2 }}
              src={project}
              alt=""
              className="w-full h-auto object-cover rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/*
  

*/

/*
  
<div key={i} className="relative">
<img src={project.imgSrc} alt="" className="w-full" />
<motion.div
initial={{ opacity: 0 }}
whileHover={{ opacity: 1 }}
transition={{ duration: 0.5, ease: "easeOut" }}
className="absolute w-full h-full  bg-black/60 flex items-center justify-center text-white text-xl"
>
{project.projectShortName}
</motion.div>
</div>
*/
