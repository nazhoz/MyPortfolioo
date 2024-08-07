import React, { useEffect, useState } from "react";
import DotGrid from "./DotGrid";
import Hero from "./Hero";
import SlideTabs from "../Navbar/SlideTabs";
import TextParallaxContent from "../home/TextParallaxContent";
import ExampleContent from "../home/ExampleContent";
import FloatingPhone from "../FloatingPhone/FloatingPhone";

const WaterDropGrid = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-slate-900 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "fixed top-3" : "fixed top-10"
        } w-full z-30`}
      >
        <SlideTabs />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-16 ">
        <Hero />
        <div className="mt-6 lg:mt-0 lg:ml-[50%] flex justify-center lg:justify-start">
          <div className="mt-0 sm:mt-12">
            <DotGrid />
          </div>
          <div className="absolute mt-[5%] ml-[16%] hidden sm:block md:block">
            <FloatingPhone />
          </div>
        </div>
      </div>
      <div className="mt-12 space-y-12 ">
        <TextParallaxContent
          imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subheading="Collaborate"
          heading="Built for all of us."
        >
          <ExampleContent />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subheading="Quality"
          heading="Never compromise."
        >
          <ExampleContent />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subheading="Modern"
          heading="Dress for the best."
        >
          <ExampleContent />
        </TextParallaxContent>
      </div>
    </div>
  );
};

export default WaterDropGrid;
