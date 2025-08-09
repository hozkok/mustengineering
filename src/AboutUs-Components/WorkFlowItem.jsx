import { delay } from "motion";
import DashedLine from "./DashedLine";
import { motion } from "motion/react";

function WorkFlowItem({
  paragraph,
  img1Src,
  animationXPosition,
  animationDelay = 0,
  rotateAngle,
  DashedLineClassNames,
  img2Src = false,
  shiftedTo = "",
  img2ClassNames = "",
  img1ClassNames = "",
  paragShiftedTo = "",
  products = false,
}) {
  if (products) {
    return (
      <div className="flex flex-col gap-12 mt-6">
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
      </div>
    );
  }
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: animationXPosition }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: animationDelay }}
        className="lg:flex lg:gap-8"
      >
        {img2Src && (
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            src={img2Src}
            alt=""
            className={`absolute w-[3rem] xsm:w-[4rem] ${img2ClassNames} `}
          />
        )}
        <p
          className={`hidden lg:block leading-[1.7] font-medium ${paragShiftedTo}`}
        >
          {paragraph}
        </p>
        <img
          src={img1Src}
          alt=""
          className={`${img1ClassNames} ${shiftedTo} w-4/5 md:w-3/5 lg:w-3/6 rounded-md `}
        />
      </motion.div>
      <DashedLine
        rotate={rotateAngle}
        width={6}
        className={`${DashedLineClassNames} absolute w-full `}
      />
    </div>
  );
}
//sm:right-[81%] md:right-[61%] lg:right-[51%] lg:top-[76%] xl:top-[82%]  img2ClassNames

//bottom-[-50%] xsm:bottom-[-45%] sm:bottom-[-34%] xl:bottom-[-26%] dashedLineClassNames
export default WorkFlowItem;
