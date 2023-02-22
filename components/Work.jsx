import Image from "next/image";
import React from "react";
import Headings from "./Headings";
import img1 from "/images/img1.png";
import img2 from "/images/img2.jpeg";
import img3 from "/images/img3.jpg";
import img4 from "/images/img4.jpg";
import img5 from "/images/img5.jpg";
import img6 from "/images/img6.jpg";

const Work = () => {
  return (
    <section id="blog" className="container mx-auto py-10 px-4">
      <Headings title="Creative Work" />

      <div className="grid grid-cols-3 gap-4">
        <div className="row-span-2 relative group">
          <Image alt="img2" src={img1} fill />
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
          <Image alt="img2" src={img3} height={700} width={700} />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Project Title
          </div>
        </div>

        <div className="relative group">
          <Image alt="img2" src={img5} height={700} width={700} />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Project Title
          </div>
        </div>

        <div className="relative group">
          <Image alt="img2" src={img4} fill />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Project Title
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
