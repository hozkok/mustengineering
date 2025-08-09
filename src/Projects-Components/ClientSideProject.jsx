"use client";

import { motion } from "framer-motion";

export default function ClientSideProject({ project }) {
  return (
    <div className="py-36 lg:py-44 flex flex-col justify-center items-center px-12 bg-gradient-to-br from-backgroundGradient to-background">
      <h1 className="text-titleColor text-lg lg:text-2xl text-center font-semibold mb-12">
        {project.projectFullName}
      </h1>
      <img
        src={project.imgSrc}
        alt=""
        className="w-full rounded-md lg:w-3/5 shadow-elevation-golden mb-12"
      />
      <p className="font-semibold leading-[1.7] lg:w-3/5 text-textColor mb-12">
        {project.description}
      </p>
      <div className="flex flex-col items-center justify-center lg:gap-16 gap-6">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          src={project.img2Src}
          alt=""
          className="rounded-md lg:w-3/5 shadow-elevation-golden"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          src={project.img3Src}
          alt=""
          className="rounded-md lg:w-3/5 shadow-elevation-golden"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          src={project.img4Src}
          alt=""
          className="rounded-md lg:w-3/5 shadow-elevation-golden"
        />
      </div>
    </div>
  );
}
