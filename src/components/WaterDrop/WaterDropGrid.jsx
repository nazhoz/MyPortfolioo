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
    <div className="relative bg-slate-900 px-8 py-12">
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "fixed top-3" : "fixed top-10"
        } sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]  z-30`}
      >
        <SlideTabs />
      </div>
      <div className="flex justify-between items-center mt-[7%] ">
        <Hero />
        <div className="ml-[50%]">
          <div className="relative">
            <DotGrid />
          </div>
          <div className="absolute -mt-[32%] ml-[16%]">
            <FloatingPhone />
          </div>
        </div>
      </div>
      <div className="mt-12">
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
