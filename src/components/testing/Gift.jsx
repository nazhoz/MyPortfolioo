// src/GiftBox.js
import React, { useState } from 'react';
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

const Gift = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState('');

  const openBox = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImage(randomImage);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {!isOpen && (
        <button
          className="w-64 h-64 bg-red-500 flex justify-center items-center rounded-lg shadow-lg text-white text-2xl cursor-pointer transform transition-transform duration-500 hover:scale-105"
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
        <div className="mt-4">
          <img src={image} alt="Funny" className="w-[100%] h-[90vh] object-cover rounded-lg" />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Gift;
