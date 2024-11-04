import React, { useState } from "react";
import exchangeImage from "../assets/exchange_icon.png";
import qualityImage from "../assets/quality_icon.png";
import supportImage from "../assets/support_img.png";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSellers from "../Components/BestSellers";
import Exclusive from "../Components/Exclusive";

const Home = () => {
  const [name, setName] = useState("");
  return (
    <div className="lg:mx-32 md:mx-20 mx-5">
      <Hero />
      <LatestCollection />
      <Exclusive />
      <BestSellers />

      <div className="flex flex-col md:flex-row justify-evenly items-center mt-10 mb-10 gap-8 px-5 md:px-10">
        <div className="flex flex-col items-center text-center space-y-2 max-w-xs">
          <img className="mb-5 md:w-12 w-10" src={exchangeImage} alt="Exchange Policy Icon" />
          <h1 className="md:text-md text-sm  text-gray-700 font-semibold">
            Easy Exchange Policy
          </h1>
          <p className="md:text-md text-sm font-semibold text-gray-400">
            We offer hassle-free exchange policy
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2 max-w-xs">
          <img className="mb-5  md:w-12 w-10" src={qualityImage} alt="Return Policy Icon" />
          <h1 className="md:text-md text-sm  text-gray-700 font-semibold">
            7 Days Return Policy
          </h1>
          <p className="md:text-md text-sm font-semibold text-gray-400">
            We provide a 7-day free return policy
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2 max-w-xs">
          <img className="mb-5 md:w-10 w-8" src={supportImage} alt="Customer Support Icon" />
          <h1 className="md:text-md text-sm  text-gray-700 font-semibold">
            Best Customer Support
          </h1>
          <p className="md:text-md text-sm font-semibold text-gray-400">
            We provide 24/7 customer support
          </p>
        </div>
      </div>

      <div className="mt-32 flex flex-col justify-center items-center text-center">
        <h1 className="md:text-2xl text-lg font-semibold text-gray-700">
          Subscribe now & get 20% off
        </h1>
        <p className="md:text-sm text-xs font-semibold text-gray-400 mt-4 max-w-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="mt-10 flex items-center  sm:gap-0">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 px-3 py-3 md:w-full w-40"
            placeholder="Enter your email"
          />
          <button className="bg-black text-white md:text-sm text-xs md:px-7 px-5 py-[16px]">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
