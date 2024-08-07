import React from "react";
import './Gift.css'

const Mail = () => {
  return (
    <>
      <h1 className="text-[clamp(20px,5vmin,100px)] text-center">Scroll </h1>
      <div className="top-0 left-0 fixed inset-0 grid place-items-center">
        <div className="envelope relative w-[70vmin] h-[40vh] aspect-video bg-slate-200 shadow-xl">
          <div className="flap bg-slate-300"></div>
          <div className="image-container">
            <img  src="https://media1.tenor.com/m/h7O7aqQms2YAAAAC/haha-hareesh-kanaran.gif" alt=""/>
          </div>
          <div className="face bg-slate-100 inset-0 absolute z-[3]"></div>
          <p className="text-to-show relative z-10 pt-[6cqw] text-center text-[5cqw] text-red-400">
            oru thavana pattich veendum ithill 😁
          </p>
        </div>
      </div>
    </>
  );
};

export default Mail;
