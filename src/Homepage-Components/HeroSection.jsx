import { motion } from "motion/react";
import Link from "next/link";
import { NavLink } from "react-router";

function HeroSection() {
  return (
    <section
      className={`bg-[url(/Homescreen-bg.jpg)] bg-center bg-no-repeat bg-fixed bg-cover flex flex-col items-center justify-center h-lvh overlay md:bg-cover p-12 xl:items-center lg:flex lg:flex-col lg:gap-4 lg:items-center lg:justify-center`}
    >
      <h1 className="w-full text-3xl font-bold text-center mb-8 text-titleColor leading-[1.5] lg:text-6xl xl:text-6xl xl:leading-[1.6] md:text-4xl xl:pb-6 xl:pt-12 ">
        Engineering Built for Reality
      </h1>
      <div className="w-2/3 flex flex-col items-center xl:gap-12 gap-4">
        <p className="text-textColor leading-[1.8] text-lg text-center lg:text-xl xl:text-2xl md:text-lg">
          Delivering structural solutions that balance innovation,
          constructability, and excellence
        </p>
        {/* <Link href={"/projects"}>
          <button className="text-sm xl:text-2xl text-buttonColor font-semibold w-fit bg-background border border-buttonColor py-2 px-4 rounded-sm hover:bg-hoverState hover:text-textColor transition-all duration-400 xl:py-4 xl:px-8 cursor-pointer">
            Our Projects
          </button>
        </Link> */}
      </div>
      {/* <img src="2.png" alt="" /> */}
    </section>
  );
}

export default HeroSection;
// function HeroSection() {
//   return (
//     <motion.section
//       initial={{}}
//       animate={{ backgroundSize: ["150%", "160%", "150%"] }}
//       transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
//       className={`bg-[url(/Homescreen-bg.jpg)] bg-center bg-no-repeat overlay bg-cover min-h-screen flex flex-col items-center justify-center p-12 xl:items-center lg:gap-4`}
//     >
//       <h1 className="w-full text-3xl font-bold text-center mb-8 text-lightTextColor leading-[1.5] lg:text-6xl xl:text-6xl xl:leading-[1.6] md:text-4xl xl:pb-6 xl:pt-12 ">
//         Engineering Built for Reality
//       </h1>
//       <div className="w-2/3 flex flex-col items-center xl:gap-12 gap-4">
//         <p className="text-lightTextColor leading-[1.8] text-lg text-center lg:text-xl xl:text-2xl md:text-lg">
//           Delivering structural solutions that balance innovation,
//           constructability, and excellence
//         </p>
//         <NavLink to={"/ongoing-projects"}>
//           <button className="text-sm xl:text-2xl text-lightTextColor font-semibold w-fit bg-background py-2 px-4 rounded-sm hover:bg-hoverState transition-all duration-400 xl:py-4 xl:px-8 cursor-pointer">
//             Discuss Your Project
//           </button>
//         </NavLink>
//       </div>
//       {/* <img src="2.png" alt="" /> */}
//     </motion.section>
//   );
// }

// export default HeroSection;
