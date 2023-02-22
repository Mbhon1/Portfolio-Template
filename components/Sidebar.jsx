import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-scroll";

const Sidebar = (props) => {
  return (
    <div
      className={`w-screen h-screen ${
        props.isOpen ? "fixed" : "hidden"
      } bg-gray-800 z-20 text-white grid place-items-center`}
    >
      <div
        className="absolute top-0 right-0 mr-[30px] mt-[10px] hover:cursor-pointer"
        onClick={props.toggleSidebar}
      >
        <RiCloseFill />
      </div>
      <div className="flex flex-col gap-4 text-[28px]">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-0}
          duration={500}
          className="hover:text-emerald-700"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-0}
          duration={500}
          className="hover:text-emerald-700"
        >
          About
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-0}
          duration={500}
          className="hover:text-emerald-700"
        >
          Portfolio
        </Link>
        <Link
          to="blog"
          spy={true}
          smooth={true}
          offset={-0}
          duration={500}
          className="hover:text-emerald-700"
        >
          Blogs
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-0}
          duration={500}
          className="hover:text-emerald-700"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
