import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbMailFilled, TbAddressBook } from "react-icons/tb";
import { FaPhoneSquareAlt, FaAddressBook } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-footerBackground">
      <div className="flex flex-col lg:flex-row lg:justify- gap-6 p-6 2xl:gap-16 lg:p-16 xl:p-24">
        <div className="flex gap-6  items-center lg:items-start justify-start px-8 sm:px-16 mb-6 lg:px-16 md:px-24 lg:justify-start">
          <img
            src="/musteng-logo-white.png"
            alt=""
            className="w-32 sm:w-36 md:w-44 xl:w-54"
          />
          <div className="flex flex-col gap-2 items-center border-textColor">
            <h1 className="text-textColor text-lg xl:text-2xl ">
              MustEng Engineering Consultancy
            </h1>
          </div>
        </div>
        <div className="place-self-start ">
          <div className="flex flex-col gap-6 justify-center px-8 sm:px-16 md:px-24 md:gap-8 lg:px-16 lg:gap-6">
            <div className="flex items-center gap-2 lg:w-96">
              <div>
                <IoLogoLinkedin
                  color="var(--color-textColor)"
                  className="md:w-6 h-6"
                />{" "}
              </div>
              <a
                target="_blank"
                className="text-textColor text-md md:text-lg underline cursor-pointer"
                href="https://www.linkedin.com/company/musteng/"
              >
                MustEng
              </a>
            </div>
            <div className="flex items-center gap-2 lg:w-96 ">
              <div>
                <TbMailFilled
                  color="var(--color-textColor)"
                  className="md:w-6 h-6"
                />{" "}
              </div>
              <a
                className="text-textColor text-md md:text-lg underline cursor-pointer"
                href="mailto:must@mustengineering.com"
              >
                must@mustengineering.com
              </a>
            </div>
            {/* <div className="flex items-center gap-2 lg:w-96">
              <div>
                <FaPhoneSquareAlt
                  color="var(--color-textColor)"
                  className="md:w-6 h-6"
                />{" "}
              </div>
              <a
                className="text-textColor text-md md:text-lg underline cursor-pointer "
                href="tel:+905324071277"
              >
                +90 532 407 12 77
              </a>
              <a
                className="text-textColor text-md md:text-lg underline cursor-pointer "
                href="tel:+905326670584"
              >
                +90 532 667 05 84
              </a>
            </div> */}
            <div className="flex gap-2 items-center lg:w-96">
              <div>
                <FaAddressBook
                  color="var(--color-textColor)"
                  className="md:w-6 h-6"
                />
              </div>
              <p className="text-textColor text-md md:text-lg underline cursor-pointer">
                {`Mutlukent Mah. 1964 Cad. No:41 İç Kapı No:4, Çankaya / Ankara, Türkiye `}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-textColor text-md font-md text-center mt-12 lg:mt-6 pb-6">
        © MustEng - 2025
      </p>
    </footer>
  );
}
// @ Copyright - 2025
export default Footer;
