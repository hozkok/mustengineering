import { motion } from "motion/react";
import Title from "../Components/Title";

//xl:h-[55rem] h-[45rem] md:h-[50rem] lg:h-[55rem] section height ları
function WhoWeAre() {
  return (
    <section className=" bg-gradient-to-br from-[#151008] to-background flex items-center justify-center xl:py-24 xl:px-12">
      <div className="flex flex-col gap-2 items-center justify-center p-6 xl:grid xl:grid-cols-10 xl:items-center xl:justify-center xl:place-items-center">
        <div className="flex flex-col xl:col-span-5 px-4 xl:px-12">
          {/* <h1 className="text-2xl font-semibold text-titleColor mb-2 lg:px-24 md:px-12 md:text-3xl xl:text-4xl lg:text-3xl">
            Who we are
          </h1> */}
          <Title center={true}>Who we are</Title>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="leading-[1.7] py-4 text-justify flex flex-col gap-8 lg:gap-12 font-medium text-textColor xl:text-xl xl:leading-[1.9] xl:text-left lg:text-lg"
          >
            <p>
              At MustEng, we specialize in structural engineering solutions that
              combine precision, practicality, and real-world application. Our
              team is committed to designing structures that not only meet
              technical demands but also support constructability and long-term
              performance. We partner closely with clients to ensure each
              project is efficient, compliant, and grounded in engineering
              excellence.
            </p>
            <ol className="text-textColor list-disc place-self-center space-y-4 marker:text-titleColor marker:text-xl">
              <li>20+ Years Engineering Expertise</li>
              <li>Contractor-Centric Design Partner</li>
              <li>Global Project Experience</li>
            </ol>
          </motion.div>
        </div>
        <img
          src="kuwait.jpg"
          alt="placeholder image"
          className="mb-6 xsm:mb-8 w-auto xl:col-span-5 shadow-elevation-high md:w-xl lg:w-3xl sm:w-xl md:mt-4 rounded-md  ring-current"
        />
      </div>
    </section>
  );
}

export default WhoWeAre;
