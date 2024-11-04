import React from "react";
import Title from "../Components/Title";
import contactimg from "../assets/contact_img.png";

const Contact = () => {
  return (
    <div className="px-5 md:px-20 lg:px-32 py-10">
      <div className="text-2xl">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-10 lg:mt-20 items-center">
        
        {/* Image Section */}
        <img
          className="w-full max-w-md lg:max-w-lg h-auto mb-8 lg:mb-0"
          src={contactimg}
          alt="Contact Us"
        />
        
        {/* Contact Information */}
        <div className="space-y-8 text-gray-600 text-center lg:text-left">
          <h1 className="font-semibold text-lg">Our Store</h1>
          <div>
            <p>12345 Elm Street</p>
            <p>Apt 200, Springfield, USA</p>
          </div>
          <div>
            <p>Tel: (123) 456-7890</p>
            <p>Email: admin@trendora.com</p>
          </div>
          
          <h1 className="font-semibold text-lg">Careers at Trendora</h1>
          <p>Learn more about our teams and job openings.</p>
          <div className="flex justify-center lg:justify-start mt-1">
            <button className="border border-black px-7 py-4 hover:bg-black hover:text-white transition duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      
      {/* Subscription Section */}
      <div className="mt-16 flex flex-col items-center text-center">
        <h1 className="md:text-2xl text-lg font-semibold text-gray-700">Subscribe now & get 20% off</h1>
        <p className="md:text-sm text-xs font-semibold text-gray-400 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="mt-10 flex">
          <input
            type="text"
            className="border border-gray-400 px-3 py-3 w-40 md:w-96"
            placeholder="Enter your email"
          />
          <button className="bg-black text-white md:text-sm text-xs px-5 py-3 md:px-7 md:py-4">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
