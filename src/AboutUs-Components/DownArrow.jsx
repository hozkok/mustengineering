import StraightArrow from "./StraightArrow";
import { motion } from "motion/react";

function DownArrow({
  className = "",
  animationDelay = 0,
  animationDuration = 1,
}) {
  return (
    <motion.div
      initial={{ opacity: 1, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: animationDuration,
        delay: animationDelay,
        when: "beforeChildren",
      }}
      viewport={{ once: true }}
      className={`rotate-90 ${className}`}
    >
      <StraightArrow />
    </motion.div>
  );
}

export default DownArrow;
