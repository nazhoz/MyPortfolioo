import React, { useState } from "react";
import Tab from "./Tab";
import Cursor from "./Cursor";

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 "
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Skills</Tab>
      <Tab setPosition={setPosition}>My Works</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>
      <Tab setPosition={setPosition}>Companies</Tab>

      <Cursor position={position} />
    </ul>
  );
};

export default SlideTabs;
