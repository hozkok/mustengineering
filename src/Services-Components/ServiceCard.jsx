"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import "../app/globals.css";
function ServiceCard({
  serviceName,
  serviceDescription,
  iconPath,
  to,
  imgSrc,
}) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className=" bg-background h-[20rem] w- lg:h-full xl:w-3/4 xl:h-full xl:mx-auto  relative shadow-elevation-high rounded-md border lg:grid lg:grid-cols-2 border-titleColor"
    >
      {/* <motion.div
        initial={{ height: "100%", opacity: 0 }}
        whileHover={{ height: "100%", opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute hidden bottom-0 left-0 w-full bg-black bg-opacity-70 md:flex items-center justify-center text-white"
      >
        <div>Overlay Content</div>
      </motion.div> */}
      {/* <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full md:hidden bg-black rounded-md bg-opacity-70 flex items-center justify-center text-white"
          >
            <div>Overlay Content</div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <div>
        <div className="p-4 flex items-center gap-8 md:gap-10">
          <div className="bg-backgroundLight w-12 h-12  rounded-full flex items-center justify-center sm:h-16 sm:w-16 lg:w-14 lg:h-14">
            <img
              src={iconPath}
              alt=""
              className="w-10 h-10 object-contain sm:h-12 sm:w-12 lg:w-10 lg:h-10"
            />
          </div>

          <h1 className="text-titleColor text-md sm:text-lg font-semibold md:text-xl">
            {serviceName}
          </h1>
        </div>
        <p className="text-textColor px-12 lg:ml-16 lg:mt-2  md:mt-2">
          {serviceDescription}
        </p>
      </div>
      <div className="hidden lg:block">
        <img
          src={imgSrc}
          alt=""
          className="h-[16rem] w-[24rem] ml-auto rounded-r-md"
        />
      </div>
      {/* <Link href={to}>
        <button
          className="text-center bg-backgroundLight border-t border-r border-borderColor absolute 
        bottom-[0%] left-[0%] text-buttonColor hover:text-textColor hover:bg-hoverState rounded-tr-md rounded-bl-md cursor-pointer  
        transition-all duration-200 lg:text-lg lg:py-3 lg:px-6  2xl:py-3 2xl:px-6 py-2 px-4"
        >
          Learn More
        </button>
      </Link> */}
    </motion.div>
  );
}

export default ServiceCard;

/* 
 <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 flex items-center justify-center text-white"
          >
            <div>Overlay Content</div>
          </motion.div>
        )}
      </AnimatePresence>

*/
