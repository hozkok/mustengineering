"use client";
import Title from "../Components/Title";

function WeAreMustEng() {
  return (
    <section
      className="px-12 pt-44 xl:pt-48 lg:pt-44 bg-gradient-to-br from-[#151008] to-background pb-24 2xl:flex-row  flex flex-col 
    justify-center gap-8 items-center text-textColor"
    >
      <div className="2xl:w-3/5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl xl:text-4xl mb-4 text-titleColor font-semibold text-center">
            About MustEng
          </h1>
          <h1 className="text-2xl xl:text-3xl italic font-medium text-center mb-12">
            Engineering with precision, built for real-world results.
          </h1>
        </div>
        <div className="2xl:justify-start 2xl:items-start">
          <p className="text-lg xl:text-xl leading-[1.8] font-medium  2xl:pl-18 xl:mt-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius
            sed soluta eveniet expedita consequatur deleniti architecto,
            possimus ipsa numquam minus doloribus officia ad, consequuntur nulla
            illo eos veritatis excepturi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla qui magnam temporibus aut voluptatibus
            maxime est sapiente ea provident, ex id debitis illum nisi tempore
            minus reiciendis sit voluptatum illo eos? Id accusamus quos officiis
            dolor natus similique optio laborum.
          </p>
        </div>
      </div>
      <img
        src="/placeholder-image.jpg"
        alt=""
        className="md:w-[75%] mdplus:w-[70%] xl:w-[50%] mt-6 rounded-md shadow-elevation-high"
      />
    </section>
  );
}

export default WeAreMustEng;
