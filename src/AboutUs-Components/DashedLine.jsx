import { motion } from "motion/react";

function DashedLine({
  rotate = 0,
  width = 60,
  className,
  transitionDuration = 1,
  transitionDelay = 0,
  place = "mx-auto",
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: transitionDuration, delay: transitionDelay }}
      className={`${className}`}
    >
      <svg
        width={width}
        height="20"
        viewBox="0 0 220 40"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotate}deg)`, height: "full" }}
        className={`w-1/2 ${place}`}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-titleColor)" />
          </marker>
        </defs>
        <line
          className="animated-dash-arrow"
          x1="0"
          y1="20"
          x2="150"
          y2="20"
          stroke="var(--color-titleColor)"
          strokeWidth="6"
          strokeDasharray="8, 8"
          strokeDashoffset={8}
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </motion.div>
  );
}

export default DashedLine;
