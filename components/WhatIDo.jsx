import React from "react";
import Headings from "./Headings";
import { RiLightbulbFlashLine } from "react-icons/ri";

const WhatIDo = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Headings title="What I Do" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-emerald-600 text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">IT Technician</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ab quisquam a quia voluptas veniam ratione architecto modi dolor
            dicta ipsum blanditiis quasi, eos, cumque iusto aliquid accusantium,
            neque repudiandae aperiam pariatur nisi non. Quae, consectetur
            voluptatibus? Harum, quod odio possimus perspiciatis in quibusdam
            beatae?
          </p>
        </div>

        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-emerald-600 text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">IT Technician</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ab quisquam a quia voluptas veniam ratione architecto modi dolor
            dicta ipsum blanditiis quasi, eos, cumque iusto aliquid accusantium,
            neque repudiandae aperiam pariatur nisi non. Quae, consectetur
            voluptatibus? Harum, quod odio possimus perspiciatis in quibusdam
            beatae?
          </p>
        </div>

        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-emerald-600 text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">IT Technician</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ab quisquam a quia voluptas veniam ratione architecto modi dolor
            dicta ipsum blanditiis quasi, eos, cumque iusto aliquid accusantium,
            neque repudiandae aperiam pariatur nisi non. Quae, consectetur
            voluptatibus? Harum, quod odio possimus perspiciatis in quibusdam
            beatae?
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
