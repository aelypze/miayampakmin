import React from 'react';
import { useNavigate } from "react-router-dom";
import mieAyamImage from '../assets/mieAyamImage.png';
import minumanImage from '../assets/minumanImage.png';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div id="menu" className="bg-[#4a200f] text-[#f7f0d0] min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-16 lg:py-24">
        <div className="max-w-lg space-y-4 md:space-y-6">
          <h3 className="font-mnu text-2xl md:text-3xl text-mknn">
            Menu
          </h3>
          <h1 className="text-5xl md:text-7xl font-jdl text-[#e3a92b] text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-orange-400">
            Menawarkan<br />Cita Rasa Terbaik
          </h1>
          <p className="text-base md:text-lg text-[#d2a671]">
            Cita rasa makanan dan minuman yang menggugah selera
          </p>
          <button 
            onClick={() => navigate('makanan')}
            className="px-4 md:px-6 py-2 mt-4 border border-[#e3a92b] text-[#e3a92b] rounded-full hover:bg-orange-400 hover:text-black transition">
            Semua Menu →
          </button>
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-8 lg:mt-0">
          <div className="relative w-48 h-64 md:w-56 md:h-72 lg:w-60 lg:h-80 transform transition-all duration-300 hover:scale-110">
            <img src={mieAyamImage} alt="Makanan" className="w-full h-full object-cover shadow-lg rounded-lg" onClick={() => navigate('makanan')}/>
            <span className="absolute bottom-2 left-2 bg-[#4a200f] text-[#e3a92b] px-2 py-1 text-xs md:text-sm rounded">
              Makanan
            </span>
          </div>
          <div className="relative w-48 h-64 md:w-56 md:h-72 lg:w-60 lg:h-80 transform transition-all duration-300 hover:scale-110">
            <img src={minumanImage} alt="Minuman" className="w-full h-full object-cover shadow-lg rounded-lg" onClick={() => navigate('minuman')}/>
            <span className="absolute bottom-2 left-2 bg-[#4a200f] text-[#e3a92b] px-2 py-1 text-xs md:text-sm rounded">
              Minuman
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
