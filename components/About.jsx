import React from "react";
import Headings from "./Headings";
import Image from "next/image";
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { TbPacman } from "react-icons/tb";
import Button from "./Button";

const About = (props) => {
  return (
    <section id="about" className="container px-4 py-10 mx-auto">
      <Headings title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div>
          <Image
            className="w-[400px]"
            width={700}
            height={700}
            src="/me.jpeg"
            alt="about me portrait"
          />
        </div>
        <div>
          <div className="flex items-center justify-between w-[400px]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 font-medium">
                <AiOutlineGift className="text-emerald-700 text-[22px]" />
                Birthday
              </div>
              <div className="flex items-center gap-4 font-medium">
                <FiBookOpen className="text-emerald-700 text-[22px]" />
                Study
              </div>
              <div className="flex items-center gap-4 font-medium">
                <BsGlobe2 className="text-emerald-700 text-[22px]" />
                Website
              </div>
              <div className="flex items-center gap-4 font-medium">
                <TbPacman className="text-emerald-700 text-[22px]" />
                Interest
              </div>
              <div className="flex items-center gap-4 font-medium">
                <IoLocationOutline className="text-emerald-700 text-[22px]" />
                Location
              </div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>{props.date}</div>
              <div>{props.tertiary}</div>
              <div>{props.website}</div>
              <div>{props.interests}</div>
              <div>{props.street}</div>
            </div>
          </div>
          <div className="max-w-[800px]">
            <h2 className="font-bold mt-16 mb-10">{props.title}</h2>
            <p className="text-gray-600"> {props.description}</p>
            <Button
              link="https://mbhoniprofilecard.netlify.app/"
              text="Hire Me"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
