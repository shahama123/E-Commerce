import React, { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import CartTotal from "../Components/CartTotal";

const Cart = () => {
  const { products, currency, cartItem, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // useEffect(() => {
  //   const tempData = Object.keys(cartItem)
  //     .flatMap((itemId) =>
  //       Object.keys(cartItem[itemId]).map((size) => {
  //         const quantity = cartItem[itemId][size];
  //         if (quantity > 0) {
  //           return { _id: itemId, size, quantity };
  //         }
  //         return null;
  //       })
  //     )
  //     .filter(Boolean);
  //   setCartData(tempData);
  // }, [cartItem]);

  useEffect(() => {
    if (products.length > 0){
      const tempData = [];
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItem[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
   
  }, [cartItem, products]);

  return (
    <div className="px-10 lg:mx-32 md:pb-20 pb-5">
      <div className="flex justify-start text-xl md:text-2xl mt-5">
        <Title text1="YOUR" text2="CART" />
      </div>
      <div className="mt-5 space-y-4">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="border-t border-b py-4 text-gray-700 flex items-center justify-between"
            >
              <div className="flex gap-3 w-2/3 items-start">
                <img
                  className="w-14 h-20 md:w-20 md:h-24 object-cover" // Adjusted size for mobile
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div className="flex flex-col">
                  <h1 className="text-xs font-medium md:text-lg">
                    {productData.name}
                  </h1>{" "}
                  {/* Responsive text size */}
                  <div className="flex items-center mt-2 gap-2">
                    <p className="text-xs md:text-base">
                      {currency}
                      {productData.price} 
                    </p>{" "}
                    {/* Smaller text for mobile */}
                    <button className="border border-gray-200 bg-gray-100 px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-base">
                      {item.size}
                    </button>
                  </div>
                </div>
              </div>

              <input
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="border w-12 text-center text-xs md:w-16 md:text-base" // Adjusted size for mobile
                onChange={(e) => {
                  const newQuantity = Number(e.target.value);
                  if (newQuantity > 0) {
                    updateQuantity(item._id, item.size, newQuantity);
                  }
                }}
              />

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                className="w-4 md:w-5 cursor-pointer ml-2" // Smaller size for mobile
                alt="Delete"
              />
            </div>
          );
        })}
      </div>

      <div className="mt-10 lg:mt-20 flex flex-col items-end space-y-5">
        <CartTotal />
        <button
          onClick={() => navigate("/placeorder")}
          className="bg-black text-white md:text-lg text-xs md:px-5 md:py-3 px-3 py-2 lg:px-7 lg:py-3"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
