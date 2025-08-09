// function ProjectCard({ title, description, imgSrc }) {
//   return (
//     <div className="grid grid-cols-10 border-2 border-background">
//       <img
//         src={imgSrc}
//         className="w-full h-full object-cover col-span-4 block"
//       />

//       <div className="flex flex-col col-span-6 border-l-2 border-background ">
//         <h1 className=" border-b-2 border-background text-xl font-semibold text-center py-3 px-3">
//           {title}
//         </h1>
//         <div className="flex flex-col  flex-1 text-lg p-4">
//           <p>{description}</p>
//         </div>
//         <button className="self-end py-2 px-4 bg-background text-lightTextColor place-self-end">
//           See more...
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;

import { motion } from "motion/react";
import { Link } from "react-router";

function ProjectCard({ title, description, imgSrc }) {
  return (
    <>
      <motion.div
        initial={{ translateX: "-100%" }}
        whileInView={{ translateX: "0" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:grid md:grid-cols-10 rounded-md  md:h-[16rem] xl:h-[20rem] w-full lg:w-3/4  2xl:justify-center 2xl:items-center "
      >
        <img
          src={imgSrc}
          className="object-cover border-background bg-background rounded-t-md md:rounded-l-md md:rounded-t-none md:h-[15.8rem] xl:h-[19.8rem] w-full col-span-4 block "
        />

        <div className="flex flex-col rounded-b-md  md:h-[15.8rem] xl:h-[19.8rem] md:col-span-6 border-background bg-background ">
          <h1 className="underline-offset-2 border-background text-xl font-bold text-center py-3 px-3">
            {title}
          </h1>
          <div className="w-3/4 h-0.5 bg-black mx-auto mt-1"></div>
          <div className="h-full text-lg p-4 overflow-auto break-words">
            <p className="font-medium text-md text-center">{description}</p>
          </div>
          {/* <button
            className="sm:self-end border-2 cursor-pointer py-2 px-4 bg-backgroundLight rounded-tl-md 
          rounded-br-md text-buttonColor font-semibold sm:place-self-end text-sm md:text-md lg:text-lg xl:text-xl hover:bg-hoverState
           hover:text-textColor hover:border-buttonColor transition-all duration-400"
          >
            See more...
          </button> */}
        </div>
      </motion.div>
    </>
  );
}

export default ProjectCard;
