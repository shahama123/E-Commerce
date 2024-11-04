import React from "react";
import hero from "../assets/hero_img.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-400 w-full h-auto md:h-[446px]">
      <div className="flex items-center justify-center py-10 px-6 md:px-10">
        <div className="text-[#414141] text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <p className="w-8 h-[2px] bg-[#414141]"></p>
            <p className="text-base md:text-lg font-medium">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl md:text-5xl leading-relaxed font-serif mt-4">
            Latest Arrivals
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
            <p className="text-base md:text-lg font-medium">SHOP NOW</p>
            <p className="w-8 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
