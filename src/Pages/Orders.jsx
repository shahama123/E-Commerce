import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="px-10 lg:mx-32">
      <div className="flex justify-start md:text-2xl text-xl font-medium md:mb-6 mb-4">
        <Title text1="MY" text2="ORDERS" />
      </div>
      <div>
        {products.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="border-t border-b py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-4 text-sm">
              <img className="w-16 h-16 object-cover" src={item.image[0]} alt={item.name} />
              <div className="md:text-base text-sm font-normal space-y-2">
                <h1 className="font-medium">{item.name}</h1>
                <div className="flex flex-wrap gap-3 text-gray-700">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>Size: M</p>
                </div>
                <p className="text-gray-600">
                  Date: <span className="text-gray-500 ml-1">25, July, 2024</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" aria-label="Order status: Ready to ship"></span>
              <p className="text-sm md:text-base">Ready to ship</p>
            </div>
            <button className="border px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800 transition">
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
