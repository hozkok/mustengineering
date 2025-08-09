import { motion } from "motion/react";
import StraightArrow from "./StraightArrow";
import DownArrow from "./DownArrow";

function DesignProcedureItem({ children, rotate = false }) {
  if (rotate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-12 lg:gap-20 w-36 items-center"
      >
        <StraightArrow rotateAnimation={true} />
        <p className="font-semibold text-lg">{children}</p>
      </motion.div>
    );
  }
  return (
    <div className="flex gap-4 w-full  items-center">
      <DownArrow className={"self-start"} />
      <motion.p
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, repeat: 0 }}
        viewport={{ once: true }}
        className="col-span-3 font-semibold text-md lg:text-lg h-full"
      >
        {children}
      </motion.p>
    </div>
  );
}

export default DesignProcedureItem;
