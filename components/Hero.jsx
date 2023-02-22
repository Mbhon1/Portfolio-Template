import React from "react";
import TypeWriter from "typewriter-effect";
import Button from "./Button";

const Hero = (props) => {
  return (
    <div
      id="hero"
      className="bg-[url(/hero.png)] flex items-center h-screen bg-fixed bg-center bg-cover "
    >
      <div className="container backdrop-blur-md backdrop-brightness-50 flex items-center h-screen bg-fixed bg-center bg-cover  px-4 mx-auto">
        <div className="max-w-[450ox] text-black flex flex-col gap-[40px]">
          <div>
            <h1 className="text-5xl">{props.title}</h1>
            <h4 className="mt-3 text-2xl">
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hello World!")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("I'm a Junior Frontend Developer")
                    .pauseFor(2500)
                    .deleteChars(27)
                    .typeString("also a Junior Network Administrator")
                    .pauseFor(2500)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                  changeDelay: 3,
                  changeDeletedSpeed: 2,
                }}
              />
            </h4>
          </div>
          <div className="bg-[#ff4d41] h-[2px] w-[40px]"></div>
          <div>
            <p>{props.description}</p>
            <Button link="https://github.com/Mbhon1" text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
