import React from "react";
import Headings from "./Headings";
import {
  SiNextdotjs,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const Skills = (props) => {
  return (
    <section id="portfolio" className="container mx-auto py-10 px-4">
      <Headings title="Skills" />

      <p className="text-gray-600 -mt-10 mb-10">{props.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="flex items-center">
            <SiNextdotjs className="mr-4 text-4xl" />
            {props.skill1}
          </p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-emerald-600 absolute h-[4px] w-[90%]"></div>
          </div>
        </div>

        <div>
          <p className="flex items-center">
            <SiHtml5 className="mr-4 text-4xl" />
            {props.skill2}
          </p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-emerald-600 absolute h-[4px] w-[90%]"></div>
          </div>
        </div>

        <div>
          <p className="flex items-center">
            <SiJavascript className="mr-4 text-4xl" />
            {props.skill3}
          </p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-emerald-600 absolute h-[4px] w-[90%]"></div>
          </div>
        </div>

        <div>
          <p className="flex items-center">
            <SiReact className="mr-4 text-4xl" />
            {props.skill4}
          </p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-emerald-600 absolute h-[4px] w-[90%]"></div>
          </div>
        </div>

        <div>
          <p className="flex items-center">
            <SiTailwindcss className="mr-4 text-4xl" />
            {props.skill5}
          </p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-emerald-600 absolute h-[4px] w-[90%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
