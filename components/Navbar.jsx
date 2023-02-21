import Link from "next/link";
import React from "react";
import { HiDocumentDownload } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";

const Navbar = (props) => {
  return (
    <div className="bg-white fixed top-0 w-[100%] z-10">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="text-[24px]">Gypsy King</div>
        <div className="hidden gap-6 md:flex">
          <Link href={"/"} className="hover:text-emerald-700">
            Home
          </Link>
          <Link href={"/about"} className="hover:text-emerald-700">
            About
          </Link>
          <Link href={"/portfolio"} className="hover:text-emerald-700">
            Portfolio
          </Link>
          <Link href={"/blog"} className="hover:text-emerald-700">
            Blog
          </Link>
          <Link href={"/contact"} className="hover:text-emerald-700">
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
