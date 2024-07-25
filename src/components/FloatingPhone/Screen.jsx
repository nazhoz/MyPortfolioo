import React from "react";
import { IoLogoApple } from "react-icons/io";

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-black">
      <IoLogoApple size={50} className="text-white" />
      <div className="border-2 absolute bottom-4 ml-[30%] z-10 rounded-xl w-[100px] border-gray-500"></div>
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full " />
    </div>
  );
};

export default Screen;
