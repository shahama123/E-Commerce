import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

const PlaceOrder = () => {
  const { navigate } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");

  return (
    <div className="px-10 lg:mx-32 md:mt-10 ">
      <div className="flex flex-col lg:flex-row justify-evenly md:gap-10 gap-0">
        {/* Delivery Information Section */}
        <div>
          <div className="flex justify-start font-medium md:text-2xl tex-lg mb-5">
            <Title text1="DELIVERY" text2="INFORMATION" />
          </div>
          <div className="w-full space-y-3">
            <div className="flex gap-3">
              <input
                className="border border-gray-300 rounded px-3 py-2 w-full"
                type="text"
                placeholder="First name"
                aria-label="First name"
                required
              />
              <input
                className="border border-gray-300 rounded px-3 py-2 w-full"
                type="text"
                placeholder="Last name"
                aria-label="Last name"
                required
              />
            </div>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full"
              type="text"
              placeholder="Street"
              aria-label="Street"
              required
            />
            <div className="flex gap-3">
              <input
                className="border border-gray-300 rounded px-3 py-2 w-full"
                type="text"
                placeholder="City"
                aria-label="City"
                required
              />
              <input
                className="border border-gray-300 rounded px-3 py-2 w-full"
                type="text"
                placeholder="State"
                aria-label="State"
                required
              />
            </div>
            <div className="flex gap-3">
              <input
                className="border border-gray-300 rounded px-3 py-2 w-full"
                type="text"
                placeholder="Pincode"
                aria-label="Pincode"
                required
              />
              <input
                className="border border-gray-300 rounded px-3 py-2 w-full"
                type="text"
                placeholder="Country"
                aria-label="Country"
                required
              />
            </div>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full"
              type="tel"
              placeholder="Phone"
              aria-label="Phone"
              required
            />
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="my-5 lg:mt-0 md:text-xl text-base">
          <CartTotal />
          <div className="md:pt-20 pt-10">
            <div className="md:text-xl font-medium mb-3">
              <Title text1="PAYMENT" text2="METHOD" />
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-5 mb-5">
              <label
                className={`flex items-center gap-2  border rounded-lg px-4 py-4 cursor-pointer ${
                  method === "stripe" ? "border-green-500" : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={method === "stripe"}
                  onChange={() => setMethod("stripe")}
                  className="hidden"
                />
                <img className="w-12" src={assets.stripe_logo} alt="Stripe logo" />
              </label>

              <label
                className={`flex items-center gap-2 border rounded-lg px-4 py-4 cursor-pointer ${
                  method === "razorpay" ? "border-green-500" : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="razorpay"
                  checked={method === "razorpay"}
                  onChange={() => setMethod("razorpay")}
                  className="hidden"
                />
                <img className="w-20" src={assets.razorpay_logo} alt="Razorpay logo" />
              </label>

              <label
                className={`flex items-center gap-2 text-sm font-medium border rounded-lg px-4 py-4 cursor-pointer ${
                  method === "cod" ? "border-green-500" : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={method === "cod"}
                  onChange={() => setMethod("cod")}
                  className="hidden"
                />
                CASH ON DELIVERY
              </label>
            </div>

            <div className="flex md:justify-end justify-center">
              <button
                onClick={() => navigate("/orders")}
                className="bg-black text-white px-10 py-2 text-sm rounded hover:bg-gray-800 transition"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
