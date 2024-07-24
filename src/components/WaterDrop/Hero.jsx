import React from "react";
import EncryptButton from "./EncryptButton";

const Hero = () => {
  return (
    <div className="text-white absolute  w-[50%] ml-[5%] flex flex-col gap-4  z-10">
      <div className="flex flex-col">
        <span className="text-[120px] font-bold">
          Hi, I'm Bob<span className="text-[#6366F1]">.</span>
        </span>
        <span className="text-[40px] font-bold">
          I'm a<span className="text-[#6366F1]"> Fullstack Developer</span>
        </span>
      </div>
      <span className="text-[20px]">
        I've spent the last 5 years building and scaling software for some
        pretty cool companies. I also teach people to paint online (incase
        you've got an empty canvas layin' around 🎨). Let's connect!
      </span>
      <div className="grid min-h-[100px] place-content-center ">
        <EncryptButton />
      </div>
    </div>
  );
};

export default Hero;
