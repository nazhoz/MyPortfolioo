import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import LogoRolodex from "./LogoRolodex";
import LogoItem from "./LogoItem";

const DivOrigami = () => {
  return (
    <>
      <section className="flex h-72 flex-col items-center justify-around gap-12 bg-neutral-950 px-4 py-24 md:flex-row">
        <div>
          <span className="text-white">logo</span>
        </div>
        <LogoRolodex
          items={[
            <LogoItem key={1} className="bg-[#25D366] text-white">
              <SiWhatsapp />
            </LogoItem>,
            <LogoItem key={2} className="bg-white text-neutral-900">
              <FcGoogle />
            </LogoItem>,
            <LogoItem
              key={3}
              className="bg-gradient-to-t from-custom2 via-custom3 to-custom5 text-white"
            >
              <SiInstagram />
            </LogoItem>,
            <LogoItem key={4} className="bg-white text-black">
              <SiGithub />
            </LogoItem>,
            <LogoItem key={5} className="bg-[#0077B5] text-white">
              <SiLinkedin />
            </LogoItem>,
          ]}
        />
      </section>
    </>
  );
};

export default DivOrigami;
