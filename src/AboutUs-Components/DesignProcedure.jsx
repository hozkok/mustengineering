"use client";
import React from "react";
import { motion } from "motion/react";
import StraightArrow from "./StraightArrow";
import DownArrow from "./DownArrow";
import Title from "../Components/Title";
import DesignProcedureItem from "./DesignProcedureItem";

// h-[50rem] xsm:h-[60rem] lg:h-[48rem] section height
// h-[40rem] sm:h-[50rem] section ın altındaki div height
function DesignProcedure() {
  return (
    <section className=" px-8 py-12  bg-gradient-to-br from-[#151008] to-background text-textColor">
      <Title center={true}>Design Procedure / Value Engineering</Title>
      <div className="">
        {/*  */}
        {/* FULL SCREEN ANIMATED PART */}
        {/*  */}
        <div className="gap-12 overflow-hidden justify-center hidden lg:flex lg:flex-col xl:flex items-center lg:pt-24 xl:pt-40">
          <div className="">
            <motion.div className="flex gap-24">
              <DesignProcedureItem rotate={true}>
                Pre-Design LOD100 Schematic Design LOD200
              </DesignProcedureItem>

              <DesignProcedureItem rotate={true}>
                Design Development LOD3000
              </DesignProcedureItem>

              <DesignProcedureItem rotate={true}>
                Construction Engineering LOD350
              </DesignProcedureItem>

              <DesignProcedureItem rotate={true}>
                Construction Stage LOD400
              </DesignProcedureItem>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold"
          >
            Starting All Phases At Once
          </motion.h1>
        </div>
        <div className="flex flex-col gap-18 xsm:gap-20 h-fit  items-center px-6 pt-8 lg:hidden justify-center overflow-hidden sm:pt-12 md:p-24 ">
          <div className="flex flex-col gap-4 xsm:gap-16 items-center justify-center w-full h-full">
            {/*  */}
            {/* MOBILE ANIMATED PART */}
            {/*  */}
            <DesignProcedureItem>
              Pre-Design LOD100 Schematic Design LOD200
            </DesignProcedureItem>
            <DesignProcedureItem>
              Design Development LOD3000
            </DesignProcedureItem>
            <DesignProcedureItem>
              Construction Engineering LOD350
            </DesignProcedureItem>
            <DesignProcedureItem>Construction Stage LOD400</DesignProcedureItem>
          </div>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, repeat: 0 }}
            viewport={{ once: true }}
            className="text-xl pl-6 font-semibold self-start"
          >
            Starting All Phases At Once
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

export default DesignProcedure;
