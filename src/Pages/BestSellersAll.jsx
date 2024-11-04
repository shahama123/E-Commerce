import React, { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../Components/ProductItem";

const BestSellersAll = () => {
  const { products, currency } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSellers(bestProduct);
  }, [products]);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:mx-60">
      <div className="text-xl md:text-2xl font-medium flex justify-start">
        <Title text1="BEST" text2="SELLERS" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 mt-6">
        {bestSellers.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellersAll;
