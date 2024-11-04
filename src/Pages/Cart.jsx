import React, { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import CartTotal from "../Components/CartTotal";

const Cart = () => {
  const { products, currency, cartItem, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = Object.keys(cartItem)
      .flatMap((itemId) =>
        Object.keys(cartItem[itemId]).map((size) => {
          const quantity = cartItem[itemId][size];
          if (quantity > 0) {
            return { _id: itemId, size, quantity };
          }
          return null;
        })
      )
      .filter(Boolean);
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="px-10 lg:mx-32 pb-20">
      <div className="flex justify-start text-xl md:text-2xl mt-5">
        <Title text1="YOUR" text2="CART" />
      </div>
      <div className="mt-5 space-y-4">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div
              key={index}
              className="border-t border-b py-4 text-gray-700 grid grid-cols-[2fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_1fr] items-center"
            >
              <div className="flex items-start gap-4 sm:gap-8">
                <img className="w-20" src={productData.image[0]} alt={productData.name} />
                <div className="flex flex-col">
                  <h1 className="text-sm sm:text-lg font-medium line-clamp-2">{productData.name}</h1>
                  <div className="flex gap-2 items-center">
                    <p>{currency}{productData.price}</p>
                    <button className="border px-2 py-1 sm:py-2 bg-slate-50">{item.size}</button>
                  </div>
                </div>
              </div>
              <input
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="border w-16 sm:w-20 px-2 py-1 sm:py-2 text-center"
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
                className="w-5 cursor-pointer"
                alt="Delete"
              />
            </div>
          );
        })}
      </div>

      <div className="mt-10 lg:mt-20 flex flex-col items-end space-y-5">
        <CartTotal />
        <button
          onClick={() => navigate('/placeorder')}
          className="bg-black text-white px-5 py-3 lg:px-7 lg:py-3"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
