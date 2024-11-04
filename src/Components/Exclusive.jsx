import React, { useContext } from 'react';
import exclusiveImg from '../assets/exclusive_image.png';
import { ShopContext } from '../Context/ShopContext';

const Exclusive = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <div className="border py-5 bg-gradient-to-b from-rose-100 to-white px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left space-y-4">
          <h1 className="prata-regular text-4xl md:text-5xl font-medium">Exclusive</h1>
          <h1 className="prata-regular text-4xl md:text-5xl font-medium">Offers For You</h1>
          <p className="text-lg md:text-xl">Only On Best Sellers Products</p>
          <div className="flex justify-center md:justify-start pt-5">
            <button
              onClick={() => navigate('/bestsellers')}
              className="bg-rose-300 text-md px-6 md:px-8 py-3 rounded-full"
            >
              Check Out For More
            </button>
          </div>
        </div>
        <div>
          <img className="w-40 md:w-60" src={exclusiveImg} alt="Exclusive Offers" />
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
