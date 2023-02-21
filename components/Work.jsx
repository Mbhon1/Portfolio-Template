import Image from "next/image";
import React from "react";
import Headings from "./Headings";
import img2 from "/images/img2.jpeg";

const Work = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Headings title="Creative Work" />

      <div className="grid grid-cols-3 gap-4">
        <div className="row-span-2 relative group">
          <Image alt="img2" src={img2} cover fill />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Project Title
          </div>
        </div>

        <div className="relative group">
          <Image alt="img2" src={img2} height={700} width={700} />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Project Title
          </div>
        </div>

        <div className="relative group">
          <Image alt="img2" src={img2} height={700} width={700} />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Project Title
          </div>
        </div>

        <div className="relative group">
          <Image alt="img2" src={img2} height={700} width={700} />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Project Title
          </div>
        </div>

        <div className="relative group">
          <Image alt="img2" src={img2} height={700} width={700} />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Project Title
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
