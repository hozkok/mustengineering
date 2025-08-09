import Carousel from "../Components/Carousel";
import CarouselItem from "../Components/CarouselItem";
import Title from "../Components/Title";

const data = [
  {
    id: 1,
    color: "bg-amber-500",
    top: "top-[0%]",
    headline: "🌍 Sustainable Practices",
    content: "sustainable practices",
    height: "h-[2.5rem]",
  },
  {
    id: 2,
    color: "bg-red-600",
    top: "top-[5%]",
    headline: "⏱️ On-Time Delivery",
    content: "on time delivery",
    height: "h-[2.5rem]",
  },
  {
    id: 3,
    color: "bg-orange-600",
    top: "top-[10%]",
    headline: "🏗️ Innovative Design",
    content: "innovative design",
    height: "h-[2.5rem]",
  },
  {
    id: 4,
    color: "bg-yellow-600",
    top: "top-[15%]",
    headline: "🧱 Safety Commitment",
    content: "safety commitment",
    height: "h-[2.5rem]",
  },
  {
    id: 5,
    color: "bg-blue-600",
    top: "top-[20%]",
    headline: "💬 Transparent Communication",
    content: "transparent communication",
    height: "h-[2.5rem]",
  },
];
const items = [
  <CarouselItem
    title={"On-Time Delivery"}
    text={
      "We understand the importance of timelines in construction. MustEng is committed to delivering projects on schedule, without compromising on safety, quality, or design integrity."
    }
    imageSrc={"/whyMustEng/on-time-delivery.jpg"}
  />,
  <CarouselItem
    title={"Transparent Communication"}
    text={
      "From planning to completion, we keep clients fully informed. Clear communication, regular updates, and an open-door approach ensure that you're always in the loop and confident in every step of the process."
    }
    imageSrc={"/whyMustEng/transparent-communication.jpg"}
  />,
  <CarouselItem
    title={"Innovative Design"}
    text={
      "MustEng brings creativity and engineering precision together. By integrating modern technologies and smart design principles, we create spaces that are both functional and future-ready."
    }
    imageSrc={"/whyMustEng/innovative-design.png"}
  />,
  <CarouselItem
    title={"Safety Commitment"}
    text={
      "Safety is non-negotiable at MustEng. Our projects adhere to rigorous safety protocols, ensuring a secure environment for our workers, clients, and the surrounding community."
    }
    imageSrc={"/whyMustEng/work-safety.jpg"}
  />,
  <CarouselItem
    title={"Sustainable Practices"}
    text={
      "We build with the future in mind. MustEng incorporates environmentally responsible materials and eco-conscious construction methods to minimize impact and maximize long-term value."
    }
    imageSrc={"/whyMustEng/sustainable-practices.png"}
  />,
];

//section height h-[60rem] lg:h-[40rem]
function Strengths() {
  return (
    <div className="lg:w-full bg-gradient-to-bl from-background to-[#151008] flex flex-col  p-8 py-6 xl:pb-32">
      {/* <h1 className="text-3xl text-titleColor text-center font-semibold xl:text-4xl  mt-12 mb-14">
        Why MustEng?
      </h1> */}
      <Title className={"xl:my-12"} center={true}>
        Why MustEng?
      </Title>
      {/* <Carousel strArray={items} /> */}

      <div className="relative w-full xl:w-3/4 sm:px-16 md:px-24 place-self-center">
        <div className="rounded-md bg-background">
          <div className="h-full flex flex-col lg:flex-row lg:justify-between p-4 sm:p-8 mb-8 gap-6 text-textColor marker:text-titleColor marker:text-xl">
            <ol className="list-disc place-self-center sm:text-lg xl:pl-12 lg:pl-8 text-md space-y-2 font-medium lg:text-lg xl:text-xl py-4 lg:space-y-6">
              <li>Precision Engineering</li>
              <li>Fast Problem-Solving</li>
              <li>Value-Driven Solutions</li>
            </ol>
            <img
              src="/whyMusteng/picture40.webp"
              alt=""
              className="w-full shadow-elevation-high rounded-md lg:w-1/2 place-self-center"
            />
          </div>
        </div>
      </div>
      <Title center={true} className={"my-12"}>
        Ready to engineer your next success?
      </Title>
    </div>
  );
}
export default Strengths;
