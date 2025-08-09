import { motion } from "motion/react";
const StraightArrow = ({ rotateAnimation = false }) => {
  if (rotateAnimation) {
    return (
      <motion.div
        initial={{ rotate: 90 }}
        whileInView={{ rotate: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        viewport={{ once: true }}
      >
        <svg
          viewBox="0 0 220 80"
          className="w-18 h-4 lg:w-56 lg:h-16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="10,10 160,10 200,40 160,70 10,70 30,40"
            className="fill-textColor stroke-titleColor stroke-[6]"
          />
        </svg>
      </motion.div>
    );
  }

  return (
    <motion.div>
      <svg
        viewBox="0 0 220 80"
        className="w-16 h-16 lg:w-56 lg:h-16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="10,10 160,10 200,40 160,70 10,70 30,40"
          className="fill-textColor stroke-titleColor stroke-[6]"
        />
      </svg>
    </motion.div>
  );
};
export default StraightArrow;
