import { motion } from "motion/react";

function DoubleDashedLine({ rotate = 0, width = 60, className, height = 20 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 220 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <defs>
          {/* Right-pointing arrowhead */}
          <marker
            id="arrowhead-end"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#e6e6ff" />
          </marker>

          {/* Left-pointing arrowhead */}
          <marker
            id="arrowhead-start"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="10 0, 0 3.5, 10 7" fill="#e6e6ff" />
          </marker>
        </defs>

        <line
          x1="60"
          y1="20"
          x2="150"
          y2="20"
          stroke="#e6e6ff"
          strokeWidth="6"
          strokeDasharray="12, 8"
          markerStart="url(#arrowhead-start)"
          markerEnd="url(#arrowhead-end)"
        />
      </svg>
    </motion.div>
  );
}

export default DoubleDashedLine;
