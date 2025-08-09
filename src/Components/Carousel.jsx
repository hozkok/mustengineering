import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

export default function Carousel({ strArray }) {
  const [strIndex, setStrIndex] = useState(0);
  // const [direction, setDirection] = useState(0);
  console.log(strArray);
  function showNext() {
    // setDirection(1);
    setStrIndex((index) => {
      if (index === strArray.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }
  function showPrevious() {
    // setDirection(-1);
    setStrIndex((index) => {
      if (index === 0) return strArray.length - 1;

      return index - 1;
    });
  }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setStrIndex((index) => (index + 1) % strArray.length);
  //   }, autoPlayInterval);

  //   return () => clearInterval(timer); // Cleanup on unmount
  // }, [strArray.length, autoPlayInterval]);
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, y: -200 },
  };
  // ilk div in height ları
  return (
    <div className="relative h-[40rem] lg:h-[25rem] w-full sm:px-16 md:px-24">
      <button
        onClick={showPrevious}
        className="absolute -left-8 top-1/2 text-textColor cursor-pointer sm:left-4 "
      >
        <BsArrowLeftSquareFill size={30} />
      </button>
      <div className="w-full h-full rounded-md bg-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={strIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full"
          >
            {strArray[strIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={showNext}
        className="absolute -right-8 top-1/2 text-textColor cursor-pointer sm:right-4"
      >
        <BsArrowRightSquareFill size={30} />
      </button>
    </div>
  );
}
