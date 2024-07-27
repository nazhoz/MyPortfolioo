import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import {
  RiCss3Fill,
  RiHtml5Line,
  RiNodejsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { PiGithubLogoBold } from "react-icons/pi";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-black">
      <div className="grid grid-cols-3 h-[170px] w-[180px] -mt-[70%] ml-1">
        <RiHtml5Line
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#FC4F13]"
        />
        <RiCss3Fill
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#2D53E5]"
        />
        {/* <GrCss3 size={35} className="text-white" /> */}
        <IoLogoJavascript
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#F0DC55]"
        />
        <GrReactjs
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#08D9FF]"
        />
        <TbBrandReactNative
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#08A7D4]"
        />
        <RiNodejsLine
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#58A149]"
        />
        <IoLogoFirebase
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#D62B00]"
        />
        <PiGithubLogoBold
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-white hover:bg-black hover:border-[1px] border-white"
        />
        <SiMongodb
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#006649]"
        />
        <SiMysql
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#04546F]"
        />
        <RiTailwindCssFill
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#05B0CE]"
        />
        <SiExpress
          size={35}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#7E7E7E]"
        />
      </div>
      <div className="bg-gray-400/20 backdrop-blur-lg rounded-md absolute mt-[300px] w-[90%] ml-3 h-[40px] flex justify-around items-center">
        <IoLogoJavascript
          size={25}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#F0DC55] "
        />
        <IoLogoFirebase
          size={25}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#D62B00]"
        />
        <GrReactjs
          size={25}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#08D9FF]"
        />
        <SiMysql
          size={25}
          className="text-black bg-white p-1 rounded-md transition duration-500 hover:text-[#04546F]"
        />
      </div>
      <div className="border-2 absolute bottom-4 ml-[30%] z-10 rounded-xl w-[100px] border-gray-500"></div>
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full " />
    </div>
  );
};

export default Screen;
