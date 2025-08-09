import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function Deneme() {
  const [deneme, setDeneme] = useState(true);
  return (
    <div>
      <div className="h-[70rem] mt-[8rem] bg-orange-300">
        <AnimatePresence>
          {deneme && (
            <motion.div
              initial={{ x: 300, y: 500, backgroundColor: "#fff" }}
              animate={{
                x: 900,
                y: 70,
                backgroundColor: ["#ca8462", "#F4AD59", "#fff"],
              }}
              transition={{ duration: 10 }}
              exit={{ x: 30, y: 30 }}
              className="h-32 w-32 bg-red-300 rounded-full"
            ></motion.div>
          )}
        </AnimatePresence>
        <button onClick={() => setDeneme(!deneme)}>asd</button>
      </div>
    </div>
  );
}

export default Deneme;
