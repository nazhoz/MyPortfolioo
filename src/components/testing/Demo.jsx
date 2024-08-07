import React from 'react';
import './Demo.css';

const Demo = () => {
  return (
    /* From Uiverse.io by SelfMadeSystem */ 
    <div className="loader">
      <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
        <defs className="s-xJBuHA073rTt" xmlns="http://www.w3.org/2000/svg">
          <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" y1="62" x1="0" id="b">
            <stop className="s-xJBuHA073rTt" stopColor="#973BED"></stop>
            <stop className="s-xJBuHA073rTt" stopColor="#007CFF" offset="1"></stop>
          </linearGradient>
          
          <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="c">
            <stop className="s-xJBuHA073rTt" stopColor="#FFC800"></stop>
            <stop className="s-xJBuHA073rTt" stopColor="#F0F" offset="1"></stop>
            <animateTransform repeatCount="indefinite" keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1" dur="8s" values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32" type="rotate" attributeName="gradientTransform"></animateTransform>
          </linearGradient>
          <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="d">
            <stop className="s-xJBuHA073rTt" stopColor="#00E0ED"></stop>
            <stop className="s-xJBuHA073rTt" stopColor="#00DA72" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>

      {/* SVG for T */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#b)" d="M32 4V60M16 4H48" className="dash" pathLength="360"></path>
      </svg>

      {/* SVG for O */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#c)" d="M32 4C19.64 4 9.6 14.04 9.6 26.4C9.6 38.76 19.64 48.8 32 48.8C44.36 48.8 54.4 38.76 54.4 26.4C54.4 14.04 44.36 4 32 4Z" className="spin" pathLength="360"></path>
      </svg>

      {/* SVG for Y */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#d)" d="M32 4V32M16 16L32 32L48 16" className="dash" pathLength="360"></path>
      </svg>

      <div className="w-2"></div>

      {/* SVG for M */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#b)" d="M8 60V4H20L32 20L44 4H56V60" className="dash" pathLength="360"></path>
      </svg>

      {/* SVG for A */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#c)" d="M32 4L8 60H56L32 4ZM32 36H44" className="spin" pathLength="360"></path>
      </svg>

      {/* SVG for L */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#d)" d="M16 4V60H48" className="dash" pathLength="360"></path>
      </svg>

    </div>
  );
};

export default Demo;
