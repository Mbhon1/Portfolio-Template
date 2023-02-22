import React from "react";
import Headings from "./Headings";
import { RiLightbulbFlashLine } from "react-icons/ri";
import whatIDoData from "@/pages/api/whatIDoData";

const WhatIDo = () => {
  const myPortfolio = whatIDoData.map((portfolioData) => {
    return (
      <div
        key={portfolioData.id}
        className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-emerald-600 text-white"
      >
        <RiLightbulbFlashLine className="text-[28px]" />
        <h2 className="font-medium text-[20px]">{portfolioData.title}</h2>
        <p>{portfolioData.description}</p>
      </div>
    );
  });

  return (
    <section id="portfolio" className="container mx-auto py-10 px-4">
      <Headings title="What I Do" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{myPortfolio}</div>
    </section>
  );
};

export default WhatIDo;
