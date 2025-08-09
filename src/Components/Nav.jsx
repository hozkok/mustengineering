"use client";

import { useState, useEffect } from "react";
import { TfiClose, TfiAlignJustify } from "react-icons/tfi";
import NavItem from "./NavItem";
import Link from "next/link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav>
      <div
        className={`fixed h-[5rem] sm:h-[6rem] lg:h-[7rem] top-0 left-0 z-50 w-full bg-background border-b-2 flex justify-between lg:justify-between border-backgroundLight transition-transform duration-300 ease-in-out  ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between px-4 items-center w-full">
          <Link href={{ pathname: "/" }}>
            <img
              src="/logo_transformed_.png"
              alt="Company Logo of MustEng Engineering Consultancy Firm"
              className="w-16 lg:w-24 ml-4 lg:ml-8"
            />
          </Link>

          <ol className="md:flex gap-6 text-lightTextColor text-sm hidden lg:text-lg font-semibold xl:text-xl xl:pr-12 xl:gap-12">
            <NavItem to={"/"}>Home</NavItem>
            <NavItem to={"/about"}>About MustEng</NavItem>
            <NavItem to={"/services"}>Services</NavItem>
            <NavItem to={"/experience"}>Experience</NavItem>
            {/* <NavItem to={"/case-studies"}>Case Studies</NavItem> */}
            <NavItem to={"/contact"}>Contact</NavItem>
          </ol>
        </div>
        <button
          className="md:hidden text-2xl pr-12 text-titleColor"
          onClick={toggleOpen}
        >
          {isOpen ? <TfiClose /> : <TfiAlignJustify />}
        </button>
      </div>

      <div
        className={`bg-background text-textColor overflow-auto  md:hidden fixed w-full h-full top-0 left-0 duration-300 ease-in-out transition-all z-100 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="md:hidden absolute top-3 right-3 text-3xl font-extrabold text-titleColor"
          onClick={toggleOpen}
        >
          {isOpen ? <TfiClose /> : <TfiAlignJustify />}
        </button>
        {/* className={`items-center flex-col gap-4 py-12 font-semibold main-color z-200 w-full h-full bg-red-600 `} */}
        <ol className="flex  flex-col justify-center items-center gap-12 text-2xl font-bold py-24 text-titleColor">
          <Link href={"/"} mobile={"true"} onClick={toggleOpen}>
            Home
          </Link>
          <Link href={"/about"} mobile={"true"} onClick={toggleOpen}>
            About MustEng
          </Link>
          <Link href={"/services"} mobile={"true"} onClick={toggleOpen}>
            Services
          </Link>
          <Link href={"/experience"} mobile={"true"} onClick={toggleOpen}>
            Experience
          </Link>
          {/* <Link href={"/case-studies"} mobile={"true"} onClick={toggleOpen}>
            Case Studies
          </Link> */}

          <Link href={"/contact"} mobile={"true"} onClick={toggleOpen}>
            Contact
          </Link>
          {/* <NavLink to={"/"} onClick={toggleOpen}>
            <li>Home</li>
          </NavLink> */}
          {/* <NavLink to={"/about"} onClick={toggleOpen}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/services"} onClick={toggleOpen}>
            <li>Services</li>
          </NavLink>
          <NavLink to={"/experience"} onClick={toggleOpen}>
            <li>Experience</li>
          </NavLink>
          <NavLink to={"/case-studies"} onClick={toggleOpen}>
            <li>Case Studies</li>
          </NavLink>
          <NavLink to={"/contact"} onClick={toggleOpen}>
            <li>Contact</li>
          </NavLink> */}
        </ol>
      </div>
    </nav>
  );
}

export default Nav;
