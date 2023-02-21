import React from "react";
import Headings from "./Headings";

const Skills = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Headings title="Skills" />

      <p className="text-gray-600 -mt-10 mb-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
        aspernatur, in distinctio modi velit architecto. Numquam corrupti
        itaque, necessitatibus sapiente excepturi quos saepe sit laboriosam.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p>React.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-emerald-600 absolute h-[4px] w-[90%]"></div>
          </div>
        </div>

        <div>
          <p>Next.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-emerald-600 absolute h-[4px] w-[90%]"></div>
          </div>
        </div>

        <div>
          <p>JavaScript</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-emerald-600 absolute h-[4px] w-[90%]"></div>
          </div>
        </div>

        <div>
          <p>HTML</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-emerald-600 absolute h-[4px] w-[90%]"></div>
          </div>
        </div>

        <div>
          <p>Tailwind CSS</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-emerald-600 absolute h-[4px] w-[90%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
