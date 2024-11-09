import React from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col md:flex-row justify-center md:items-start items-center border-b pb-5 mx-5 lg:mx-32 md:gap-40 gap-10">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left cursor-pointer">
          <Link to="/" className="flex items-center gap-1 mb-2">
            <h1 className="text-2xl font-serif">TRENDORA</h1>
            <FaCircle className="w-2 text-rose-300 mt-1" />
          </Link>
          <p className="text-gray-500 md:text-sm text-xs font-medium lg:max-w-xs max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga
            assumenda, facere voluptatem praesentium dignissimos veniam quae
            distinctio, ex ad quasi consequuntur mollitia minus incidunt, fugiat
            vel at laudantium natus.
          </p>
        </div>

        {/* Company Links */}
        <div className="md:items-start items-center md:text-left cursor-pointer">
          <h1 className="text-xl font-semibold mb-3">COMPANY</h1>
          <div className="text-gray-600 text-sm font-medium space-y-1">
            <ul>Home</ul>
            <ul>About us</ul>
            <ul>Delivery</ul>
            <ul>Policy</ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="md:items-start items-center cursor-pointer">
          <h1 className="text-xl font-semibold mb-3">GET IN TOUCH</h1>
          <div className="text-gray-600 text-sm font-medium space-y-1">
            <p>+91-9778076740</p>
            <p>shaamashaama28@gmail.com</p>
            <a
              className="text-blue-500 hover:underline"
              href="https://www.linkedin.com/in/ayishath-shahama-3206b029a"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <p className="text-center px-5 md:text-sm text-xs text-gray-900 mt-5  mb-5">
        Copyright 2024 @ Shahama - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
