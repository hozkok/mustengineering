import Gallery from "../Components/Gallery";
import Title from "../Components/Title";
import images from "../Data/galleryImages";

//h-[60rem] md:h-[65rem] lg:h-[70rem]  section height ları
function Services() {
  return (
    <section
      className="flex flex-col 
                    xl:flex-row gap-12 items-center justify-center
                    bg-gradient-to-bl from-background to-[#151008] 2xl:justify-evenly py-24"
    >
      <div className="">
        <Gallery galleryImages={images} />
      </div>
      <div className="text-lightTextColor p-12">
        {/* <h1 className="text-3xl mb-8 md:text-3xl font-semibold text-titleColor xl:text-4xl">
          Services
        </h1> */}
        <Title>Services</Title>
        <ol className="flex flex-col gap-4  lg:text-lg xl:text-xl">
          <li>Structural Design</li>
          <li>Construction Engineering</li>
          <li>Seismic and Wind Engineering</li>
          <li>Tender and Value Engineering</li>
          <li>Design Management</li>
        </ol>
      </div>
    </section>
  );
}

export default Services;
