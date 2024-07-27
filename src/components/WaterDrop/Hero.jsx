import React, { useState, useEffect, useMemo } from "react";
import EncryptButton from "./EncryptButton";

const Hero = () => {
  const texts = useMemo(() => ["Fullstack Developer", "MERN Stack Developer"], []);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const timeout = setTimeout(() => {
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    if (!isDeleting && charIndex === texts[index].length) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <div className="text-white absolute w-[50%] ml-[5%] flex flex-col gap-4 z-10">
      <div className="flex flex-col">
        <span className="text-[120px] font-bold">
          Hi, I'm Naz<span className="text-[#6366F1]">.</span>
        </span>
        <span className="text-[40px] font-bold">
          I'm a <span className="text-[#6366F1]">{texts[index].slice(0, charIndex)}</span>
        </span>
      </div>
      <span className="text-[20px]">
        I've spent the last 1.5 years building and scaling software for some pretty cool companies. I also teach people to paint online (in case you've got an empty canvas layin' around 🎨). Let's connect!
      </span>
      <div className="grid min-h-[100px] place-content-center">
        <EncryptButton />
      </div>
    </div>
  );
};

export default Hero;
