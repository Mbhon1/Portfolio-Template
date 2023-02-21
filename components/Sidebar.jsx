import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { useRouter } from "next/router";

const Sidebar = (props) => {
  const router = useRouter();

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
        <a
          href="#"
          onClick={() => {
            router.push("/about");
          }}
          className="hover:text-emerald-700"
        >
          Home
        </a>
        <a href="#" className="hover:text-emerald-700">
          About
        </a>
        <a href="#" className="hover:text-emerald-700">
          Portfolio
        </a>
        <a href="#" className="hover:text-emerald-700">
          Blogs
        </a>
        <a href="#" className="hover:text-emerald-700">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
