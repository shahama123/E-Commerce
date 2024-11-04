import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";
import { BsBoxSeam } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoTrophy } from "react-icons/go";
import { HiOutlineTruck } from "react-icons/hi";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState("");
  const [image, setImage] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <>
      <div className="flex flex-col pt-10 mx-4 md:mx-10 lg:mx-32 transition-opacity ease-in-out duration-500 opacity-100">
        {/*-------product data------*/}
        <div className="flex flex-col sm:flex-row gap-10">
          {/*-------product images------*/}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[20%] w-full">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                />
              ))}
            </div>
            <div className="w-full sm:w-[75%]">
              <img src={image} className="w-full h-auto" alt="" />
            </div>
          </div>

          {/*-------product info------*/}
          <div className="flex-1 space-y-5">
            <h1 className="text-2xl font-medium pt-2">{productData.name}</h1>
            <div className="flex gap-1">
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_dull_icon} alt="" className="w-3" />
            </div>
            <div>
              <p className="text-3xl font-medium">{currency}{productData.price}</p>
            </div>
            <div>
              <p className="text-gray-500 w-full">{productData.description}</p>
            </div>
            <div className="flex flex-col gap-4 my-8">
              <p className="text-md">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => {
                      setSize(item);
                      console.log("Selected size:", item);
                    }}
                    className={`border py-2 px-4 ${
                      item === size ? "border-amber-600 bg-amber-500" : "border-gray-300 bg-gray-200"
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3">
              ADD TO CART
            </button>
            <div className="border"></div>
            <div className="text-gray-500 text-sm space-y-1">
              <p>100% Original product.</p>
              <div className="flex gap-1 items-center">
                <HiOutlineTruck />
                <p>Cash on delivery is available on this product.</p>
              </div>
              <div className="flex gap-1 items-center">
                <BsBoxSeam />
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
              <div className="flex gap-1 items-center">
                <GoTrophy />
                <p>Top Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*-------description and review section------*/}
      <div className="mt-20 mx-4 md:mx-10 lg:mx-32">
        <div className="flex flex-wrap">
          <button
            onClick={() => setActiveTab("description")}
            className={`border px-5 py-3 text-sm ${
              activeTab === "description" ? "font-bold" : ""
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`border px-5 py-3 text-sm ${
              activeTab === "reviews" ? "font-bold" : ""
            }`}
          >
            Reviews (122)
          </button>
        </div>
        <div className="border px-5 py-5 text-sm text-gray-500 space-y-3">
          {activeTab === "description" && (
            <div className="px-5 py-5 text-sm text-gray-500 space-y-3">
              <p>
                Step up your style game with this on-trend. Featuring the latest in
                fashion-forward design, it’s the ideal statement piece to elevate
                your look. Perfect for those who love to stay ahead of the curve and
                showcase their unique style. Affordable and reliable, this is a great
                choice for everyday use. Simple yet functional, it’s designed to meet
                your daily needs without breaking the bank. Add this essential piece
                to your collection today.
              </p>
              <p>
                Maximize your performance which is designed for active lifestyles.
                Breathable, lightweight, and supportive, it's engineered to keep up
                with even your toughest workouts. Experience comfort and style that
                moves with you.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="px-5 py-5 text-sm text-gray-500 space-y-3">
              <p>Customer Reviews:</p>
              <p>- "Amazing product, very comfortable!"</p>
              <p>- "Good value for money. Great quality!"</p>
              <p>- "Stylish and functional, loved it!"</p>
              <p>- "Cute design and fits well. Would buy again!"</p>
              <p>- "Highly recommend! Washes well and retains shape."</p>
              {/* Add more reviews as needed */}
            </div>
          )}
        </div>
      </div>

      {/* -----------Related Products--------- */}
      <div className="my-20 mx-4 md:mx-10 lg:mx-32">
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    </>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
