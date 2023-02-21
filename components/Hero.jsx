import React from "react";
import TypeWriter from "typewriter-effect";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-[url(/hero.png)] flex items-center h-screen bg-fixed bg-center bg-cover ">
      <div className="container px-4 mx-auto">
        <div className="max-w-[450ox] text-black flex flex-col gap-[40px]">
          <div>
            <h1 className="text-5xl">I'm Gypsy King</h1>
            <h4 className="mt-3 text-2xl">
              <TypeWriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Junior Network Administrator",
                  ],
                  changeDelay: 3,
                  changeDeletedSpeed: 2,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
          <div className="bg-[#ff4d41] h-[2px] w-[40px]"></div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              eligendi ex dicta tenetur magnam ipsam, deserunt eum dolorum,
              animi, magni repellat earum delectus? Cum voluptatum nemo, nisi
              illo quos perspiciatis.
            </p>
            <Button link="#" text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
