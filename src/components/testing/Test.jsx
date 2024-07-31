import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import './Gift.css';

const images = [
  'https://media.tenor.com/R0CN_RSNTGEAAAAM/tamil-actress-gif-tamil-heroin-gif.gif',
  'https://media.tenor.com/seoQj-uUAZMAAAAM/laughing-imsai-arasan-23m-pulikesi-movie.gif',
  'https://media1.tenor.com/m/h7O7aqQms2YAAAAC/haha-hareesh-kanaran.gif',
  'https://media1.tenor.com/m/I-1C737Bki4AAAAC/yeah-mukesh.gif',
  'https://media1.tenor.com/m/LTfU2sOWou4AAAAC/sarkasam-sarcasm.gif',
  'https://media1.tenor.com/m/8MUyCecHHuIAAAAC/dance-suresh-gopi.gif',
  'https://media1.tenor.com/m/d7h55XIzdNMAAAAC/chiri-mukesh.gif',
  'https://media.tenor.com/rrG20ByOnO8AAAAM/dileep-pachakuthira.gif',
  'https://media.tenor.com/wk2Prcl6drAAAAAM/thank-you-thankyou.gif',
  // Add more image URLs here
];

const Test = () => {
  const patternRef = useRef(null);
  const gradientRef = useRef(null);
  const [mousePosition, setMousePoistion] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    const patternElement = patternRef.current;

    const countY = Math.ceil(window.innerHeight / 40) + 1;
    const countX = Math.ceil(window.innerWidth / 48) + 1;

    for (let i = 0; i < countY; i++) {
      for (let j = 0; j < countX; j++) {
        const hexagon = document.createElement('div');
        hexagon.style = `
        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=') no-repeat;
          width: 44px;
          height: 50px;
          background-size: contain;
          position: absolute;
          top: ${i * 40}px;
          left: ${j * 48 + ((i * 24) % 48)}px;
          `;

        patternElement.appendChild(hexagon);
      }
    }

    const handleMouseMove = (mouse) => {
      setMousePoistion({
        x: mouse.clientX,
        y: mouse.clientY
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, []);

  useEffect(() => {
    const gradientElement = gradientRef.current;
    const updateGradientPosition = () => {
      gradientElement.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
      window.requestAnimationFrame(updateGradientPosition);
    };

    window.requestAnimationFrame(updateGradientPosition);
  }, [mousePosition]);

  const openBox = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImage(randomImage);
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <div className="relative flex items-center justify-center h-screen bg-gray-900 overflow-hidden">
        <h1 className="text-8xl font-bold text-white relative z-10">Hexagons</h1>
        <div id="gradient" ref={gradientRef} className="absolute w-[400px] h-[400px] bg-gradient-to-r from-orange-500 to-transparent transform translate-x-[200px] translate-y-[200px]"></div>
        <div id="pattern" ref={patternRef} className="absolute top-0 left-0 right-0 bottom-0"></div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 relative z-20">
        {!isOpen && (
          <button
            className="w-64 h-64 bg-red-500 flex justify-center items-center rounded-lg shadow-lg text-white text-2xl cursor-pointer transform transition-transform duration-500 hover:scale-105 z-30"
            onClick={openBox}
          >
            🎁
          </button>
        )}
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="image"
          unmountOnExit
        >
          <div className="mt-4 z-30">
            <img src={image} alt="Funny" className="w-[100%] h-[90vh] object-cover rounded-lg" />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Test;
