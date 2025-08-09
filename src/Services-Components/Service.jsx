"use client";
import Link from "next/link";
import Title from "../Components/Title";
import { motion } from "motion/react";
import { FaArrowLeftLong } from "react-icons/fa6";
function Service({ title, firstText, secondText, firstImgSrc, secondImgSrc }) {
  return (
    <div className="py-44 px-12">
      <Title center={true}>{title}</Title>
      <div className="flex flex-col gap-16 xl:grid xl:justify-center xl:items-center xl:grid-cols-2 xl:gap-4 mt-16">
        <motion.p
          initial={{ opacity: 0, x: "20%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          viewport={{ once: true }}
          className="font-medium text-textColor leading-[1.9] xl:leading-[2.4] lg:px-24"
        >
          {firstText}
        </motion.p>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          src={firstImgSrc}
          alt=""
          className="w-full rounded-md shadow-elevation-high md:w-[32rem] lg:w-[40rem] md:mx-auto"
        />
        <motion.p
          initial={{ opacity: 0, x: "-20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          viewport={{ once: true }}
          className="font-medium text-textColor leading-[1.9] xl:leading-[2.4] xl:order-4 lg:px-24"
        >
          {secondText}
        </motion.p>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          src={secondImgSrc}
          alt=""
          className="w-full shadow-elevation-high rounded-md md:w-[32rem] xl:order-3 lg:w-[40rem] md:mx-auto"
        />
      </div>
    </div>
  );
}

export default Service;
