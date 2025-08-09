function CarouselItem({ title, text, imageSrc }) {
  console.log(imageSrc);
  return (
    <div
      // style={{
      //   backgroundImage: `url(${imageSrc})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      //   backgroundRepeat: "no-repeat",
      // }}
      className={`flex relative flex-col lg:flex-row gap-8 p-4 h-full rounded-md`}
    >
      <div className="flex flex-col gap-4 lg:gap-12 p-4 text-textColor">
        <h1 className="text-2xl font-semibold pt-4 ">{title}</h1>
        <p className="text-lg font-medium ">{text}</p>
      </div>
      <img
        src={imageSrc}
        alt=""
        className="w-full lg:w-1/2 object-scale-down 2xl:w-1/3 rounded-md"
      />
      {/* <img
        src={imageSrc}
        alt=""
        className=" object-cover justify-self-end aspect-auto h-1/2"
      /> */}
    </div>
  );
}

export default CarouselItem;
