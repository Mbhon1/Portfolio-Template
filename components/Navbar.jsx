import React from "react";
import { HiDocumentDownload } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = (props) => {
  return (
    <div className="bg-white fixed top-0 w-[100%] z-10">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="text-[24px]">{props.name}</div>
        <div className="hidden gap-6 md:flex">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="hover:text-emerald-700 cursor-pointer"
          >
            Home
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            to="about"
            className="hover:text-emerald-700 cursor-pointer"
          >
            About
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            to="portfolio"
            className="hover:text-emerald-700 cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            to="blog"
            className="hover:text-emerald-700 cursor-pointer"
          >
            Blog
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            to="contact"
            className="hover:text-emerald-700 cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <a
          href="#"
          className="hidden md:flex border border-emerald-700 px-4 py-1 text-emerald-700 rounded-[5px] items-center gap2 hover:bg-emerald-700 hover:text-white transition duration-200"
        >
          Download Resume
          <HiDocumentDownload className="ml-2" />
        </a>
        <div onClick={props.toggleSidebar} className="md:hidden text-[24px]">
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
