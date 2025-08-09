import { FaAddressBook, FaPhoneSquareAlt } from "react-icons/fa";
import Map from "../Contact-Components/Map";
import { TbMailFilled } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import Title from "../Components/Title";

function Contact() {
  return (
    <div className="py-44 bg-backgroundLight text-textColor">
      {/* <h1 className="text-3xl font-semibold text-titleColor px-6">
        Contact Info
      </h1> */}
      <Title className={"text-start xl:ml-12 p-8"}>Contact Info</Title>

      <div className=" flex flex-col gap-12 xl:flex-row xl:gap-24 p-8 xl:ml-12">
        <div className="space-y-12 mt-8">
          <div className="space-y-3">
            <div className="flex gap-4 items-center">
              <TbMailFilled color="" className="md:w-6 h-6" />
              <h2 className="text-lg font-medium">Email</h2>
            </div>
            <a
              className="underline cursor-pointer font-semibold"
              href="mailto:must@mustengineering.com"
            >
              must@mustengineering.com
            </a>
          </div>
          <div className="space-y-3">
            <div className="flex gap-4 items-center">
              <IoLogoLinkedin color="" className="md:w-6 h-6" />
              <h2 className="text-lg font-medium">LinkedIn</h2>
            </div>
            <a
              target="_blank"
              className="underline cursor-pointer font-semibold"
              href="https://www.linkedin.com/company/musteng/"
            >
              MustEngineering
            </a>
          </div>
          <div className="space-y-3">
            <div className="flex gap-4 items-center">
              <FaPhoneSquareAlt color="" className="md:w-6 h-6" />
              <h2 className="text-lg font-medium">Call</h2>
            </div>
            <a
              target="_blank"
              className="underline cursor-pointer font-semibold"
              href="tel:+905324071277"
            >
              +90 532 407 12 77
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <FaAddressBook color="" className="md:w-6 h-6" />
              <h2 className="text-lg font-medium">Address</h2>
            </div>
            <h2 className="underline text-md font-medium">Main Office</h2>
            <p className="leading-[1.7] font-medium">
              Mutlukent Mah. 1964 Cad. No:41 İç Kapı No:4, Çankaya / Ankara,
              Türkiye
            </p>
            <h2 className="underline text-md font-medium">Branch Office</h2>
            <p className="leading-[1.7] font-medium">
              Çamtepe Mah. Mithatpaşa Cad. No:287 No:4, Narlıdere / İzmir,
              Türkiye
            </p>
          </div>
        </div>
        <div className="w-[20rem] h-[16rem] xsm:w-[26rem] xsm:h-[18rem] md:w-[30rem] md:h-[20rem] xl:w-[35rem] xl:h-[25rem] self-start xl:self-end">
          <Map />
        </div>
      </div>
    </div>
  );
}
//

export default Contact;
