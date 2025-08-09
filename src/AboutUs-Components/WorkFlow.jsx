"use client";

import Title from "../Components/Title";
import DashedLine from "./DashedLine";
import DoubleDashedLine from "./DoubleDashedLine";
import { motion } from "motion/react";
import WorkFlowItem from "./WorkFlowItem";

function WorkFlow() {
  return (
    <section className="bg-gradient-to-bl from-background to-[#151008] lg:h-[180rem] h-[135rem] xsm:h-[145rem] sm:h-[165rem] md:h-[164rem] xl:h-[205rem] text-lightTextColor py-16">
      <div className="flex flex-col gap-12 justify-center items-center">
        <Title center={true}>
          Complex Architectural Structures Design Workflow
        </Title>
        <section className="flex flex-col h-full w-[22rem] xsm:w-[26rem] xl:w-[70rem] sm:w-[33rem] md:w-[40rem] lg:w-[55rem]  gap-36 overflow-hidden">
          <WorkFlowItem
            paragraph={` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur fuga aperiam tempora odit facilis consequuntur, quis
                iure modi numquam repellat quae in esse. Facere perspiciatis ea
                voluptatibus porro, voluptates quis.`}
            img1Src={"/designProcedure/aboutus-step1-new.png"}
            rotateAngle={45}
            animationXPosition={-300}
            shiftedTo={"mr-auto"}
            DashedLineClassNames={
              "bottom-[-50%] xsm:bottom-[-45%] sm:bottom-[-34%] xl:bottom-[-26%]"
            }
            paragShiftedTo={"order-last"}
          />
          <WorkFlowItem
            paragraph={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                molestias repellendus laborum similique quibusdam quae. Quod
                similique quis minima, asperiores aliquam dolore libero officiis
                necessitatibus ad, quasi quo illum consequatur.`}
            rotateAngle={135}
            img1Src={"/designProcedure/aboutus-step2-new-grasshopper.jpg"}
            img2Src={"/designProcedure/grasshopper-logo-transparent.png"}
            animationXPosition={300}
            animationDelay={0.4}
            shiftedTo={"ml-auto"}
            img2ClassNames="right-[83%] sm:right-[81%] md:right-[61%] lg:right-[51%] lg:top-[76%] xl:top-[82%]"
            DashedLineClassNames={
              "bottom-[-45%] xsm:bottom-[-38%] sm:bottom-[-29%] xl:bottom-[-22%]"
            }
            paragShiftedTo="order-first"
          />

          <WorkFlowItem
            paragraph={` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                sunt voluptas, nihil corporis molestias, quidem asperiores rem
                veniam in ipsum doloremque officia accusantium sint mollitia,
                nesciunt adipisci dolor cumque sapiente.`}
            rotateAngle={45}
            animationXPosition={-300}
            animationDelay={0.6}
            shiftedTo={"mr-auto"}
            img1Src={"/designProcedure/aboutus-step4.PNG"}
            img2Src={"/designProcedure/rhino-logo-new.png"}
            img2ClassNames="left-[83%] sm:left-[81%] md:left-[61%] lg:left-[51%] lg:top-[71%] xl:top-[77%]"
            DashedLineClassNames={
              "bottom-[-57%] xsm:bottom-[-45%] sm:bottom-[-37%] xl:bottom-[-28%]"
            }
            paragShiftedTo="order-last lg:absolute lg:left-[52%] lg:top-[0%]"
          />

          <WorkFlowItem
            paragraph={` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                sunt voluptas, nihil corporis molestias, quidem asperiores rem
                veniam in ipsum doloremque officia accusantium sint mollitia,
                nesciunt adipisci dolor cumque sapiente.`}
            rotateAngle={110}
            animationXPosition={300}
            animationDelay={0.8}
            shiftedTo={"ml-auto"}
            img1Src={"/designProcedure/aboutus-step5.PNG"}
            DashedLineClassNames={
              "bottom-[-55%] left-[5%] xsm:bottom-[-48%] xsm:left-[8%] lg:bottom-[-33%] lg:left-[10%] sm:bottom-[-37%] xl:bottom-[-28%]"
            }
          />

          <WorkFlowItem
            rotateAngle={90}
            animationXPosition={300}
            animationDelay={0.8}
            shiftedTo={"mx-auto"}
            img1Src={"/designProcedure/aboutus-step6.PNG"}
            DashedLineClassNames={
              "bottom-[-115%] xsm:bottom-[-105%] sm:bottom-[-85%] md:bottom-[-89%] lg:bottom-[-73%] xl:bottom-[-58%] 2xl:bottom-[-61%]"
            }
            img1ClassNames="w-3/4 mx-auto lg:w-3/5 rounded-md"
          />
          <WorkFlowItem products={true} />
        </section>
      </div>
    </section>
  );
}

export default WorkFlow;

/* <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:flex lg:gap-8"
            >
              <img
                src="/designProcedure/aboutus-step1-new.png"
                alt=""
                className="w-4/5 mr-auto md:w-3/5 lg:w-3/6 rounded-md"
              />
              <p className="hidden lg:block leading-[1.7] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur fuga aperiam tempora odit facilis consequuntur, quis
                iure modi numquam repellat quae in esse. Facere perspiciatis ea
                voluptatibus porro, voluptates quis.
              </p>
            </motion.div>
            <DashedLine
              rotate={45}
              width={6}
              className={
                "absolute w-full bottom-[-50%] xsm:bottom-[-45%] sm:bottom-[-34%] xl:bottom-[-26%]"
              }
            />
          </div> */

/* <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:flex lg:gap-8"
            >
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                src="/designProcedure/grasshopper-logo-transparent.png"
                alt=""
                className="absolute w-[3rem] xsm:w-[4rem] sm:right-[81%] md:right-[61%] lg:right-[51%] lg:top-[76%] xl:top-[82%]"
              />
              <p className="hidden lg:block leading-[1.7] font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                molestias repellendus laborum similique quibusdam quae. Quod
                similique quis minima, asperiores aliquam dolore libero officiis
                necessitatibus ad, quasi quo illum consequatur.
              </p>

              <img
                src="/designProcedure/aboutus-step2-new-grasshopper.jpg"
                alt=""
                className="w-4/5 ml-auto md:w-3/5 lg:w-3/6 rounded-md"
              />
            </motion.div>
            <DashedLine
              rotate={135}
              width={6}
              transitionDelay={0.4}
              className={
                "absolute w-full bottom-[-50%] xsm:bottom-[-38%] sm:bottom-[-29%] xl:bottom-[-22%]"
              }
            />
          </div> */

/* 
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="xl:flex xl:gap-8"
            >
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                src="/designProcedure/rhino-logo-new.png"
                alt=""
                className="w-[3rem] xsm:w-[4rem] absolute right-[0%] sm:left-[81%] md:left-[61%] lg:left-[51%] lg:top-[71%] xl:top-[77%]"
              />

              <img
                src="/designProcedure/aboutus-step4.PNG"
                className="w-4/5 mr-auto md:w-3/5 lg:w-3/6 rounded-md"
                alt=""
              />
              <p className="hidden lg:block lg:absolute lg:left-[52%] lg:top-[0%] font-medium leading-[1.7]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                sunt voluptas, nihil corporis molestias, quidem asperiores rem
                veniam in ipsum doloremque officia accusantium sint mollitia,
                nesciunt adipisci dolor cumque sapiente.
              </p>
            </motion.div>
            <DashedLine
              rotate={45}
              width={60}
              transitionDelay={0.6}
              className={
                "absolute w-full bottom-[-50%] xsm:bottom-[-45%] sm:bottom-[-37%] xl:bottom-[-28%]"
              }
            />
          </div> */

/* <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="lg:flex lg:gap-8"
            >
              <p className="hidden lg:block leading-[1.7] font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                molestias repellendus laborum similique quibusdam quae. Quod
                similique quis minima, asperiores aliquam dolore libero officiis
                necessitatibus ad, quasi quo illum consequatur.
              </p>
              <img
                src="/designProcedure/aboutus-step5.PNG"
                className="w-3/4 ml-auto md:w-3/5 lg:w-3/6 rounded-md"
                alt=""
              />
            </motion.div>
            <DashedLine
              rotate={115}
              width={60}
              className={
                "absolute w-full bottom-[-60%] left-[10%] xsm:bottom-[-48%] xsm:left-[8%] sm:bottom-[-37%] xl:bottom-[-28%]"
              }
              transitionDelay={0.8}
            />
          </div> */

/* <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative"
            >
              <img
                src="/designProcedure/aboutus-step6.PNG"
                className="w-3/4 mx-auto lg:w-3/5 rounded-md"
                alt=""
              />
            </motion.div>
            <DashedLine
              rotate={90}
              width={60}
              className={
                "absolute w-full bottom-[-130%] xsm:bottom-[-105%] sm:bottom-[-85%] md:bottom-[-68%] lg:bottom-[-63%] xl:bottom-[-51%]"
              }
              transitionDelay={0.8}
            />
          </div> */

/* <div className="flex flex-col gap-12 mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className=""
            >
              <img
                src="/designProcedure/aboutus-step6.PNG"
                className="w-3/4 mx-auto lg:w-3/5 rounded-md"
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className=""
            >
              <img
                src="/designProcedure/aboutus-step6.PNG"
                className="w-3/4 mx-auto lg:w-3/5 rounded-md"
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className=""
            >
              <img
                src="/designProcedure/aboutus-step6.PNG"
                className="w-3/4 mx-auto lg:w-3/5 rounded-md"
                alt=""
              />
            </motion.div>
          </div> */
