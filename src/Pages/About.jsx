import React from "react";
import Title from "../Components/Title";
import aboutimg from "../assets/about_img.png";
import img1 from "../assets/customer-service (2).png";
import img2 from "../assets/support.png";
import img3 from "../assets/customer-service.png";

const About = () => {
  return (
    <div className="px-5 md:px-20 lg:px-32 py-10">
      <div className="text-2xl">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10 lg:mt-16">
        {/* Image Section */}
        <img
          className="w-full max-w-md lg:max-w-lg mb-8 lg:mb-0"
          src={aboutimg}
          alt="About us"
        />

        {/* Text Section */}
        <div className="lg:pl-10 space-y-5 text-gray-700 text-center   lg:text-left">
          <p className="md:text-lg text-md">
            Trendora was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="md:text-lg text-md">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h1 className="font-semibold md:text-lg text-md">Our Mission</h1>
          <p>
            Our mission at Trendora is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div>
        <div className="text-2xl pt-10 pb-10 flex">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 text-sm md:gap-5 gap-20 pt-5  ">
          <div className="relative text-gray-700 border rounded px-8 py-12">
            <img
              src={img1}
              className="w-16 h-16 absolute -top-10 left-1/2 transform -translate-x-1/2"
              alt=""
            />

            <div className="pt-5 text-center">
              <b className="block">Quality Assurance:</b>
              <p className="pt-2">
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>
          </div>

          <div className="relative text-gray-700 border rounded px-8 py-12">
            <img
              src={img2}
              className="w-16 h-16 absolute -top-10 left-1/2 transform -translate-x-1/2"
              alt=""
            />
            <div className="pt-5 text-center">
              <b className="block">Convenience:</b>
              <p className="pt-2">
                With our user-friendly interface and hassle-free ordering
                process, shopping has never been easier.
              </p>
            </div>
          </div>
          <div className="relative border rounded px-8 py-12 text-gray-700">
            <img
              src={img3}
              className="w-16 h-16 absolute -top-10 left-1/2 transform -translate-x-1/2"
              alt=""
            />
            <div className="pt-5">
              <b className="block">Exceptional Customer Service:</b>
              <p className="pt-2">
                Our team of dedicated professionals is here to assist you every
                step of the way, ensuring your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
