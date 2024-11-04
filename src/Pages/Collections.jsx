import React, { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";
import { ShopContext } from "../Context/ShopContext";

const Collections = () => {
  const { products,search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [allCollections, setAllCollections] = useState([]);
  const [displayCount, setDisplayCount] = useState(16);
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [sortOrder, setSortOrder] = useState("relevant");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleType = (e) => {
    const value = e.target.value;
    setType((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    let filteredProducts = products;

    // Category Filtering
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        category.includes(item.category)
      );
    }

    // Type Filtering
    if (type.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        type.includes(item.type)
      );
    }

    // Search Filtering
    if (search) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) // Filtering by product name
      );
    }

    // Sorting Logic
    if (sortOrder === "low-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setAllCollections(filteredProducts);
  }, [products, category, type, sortOrder, search]); // Add search to dependencies

  const loadMore = () => {
    setDisplayCount(displayCount + 12);
  };

  return (
    <div className="flex border-t mx-32">
      <div className="min-w-60">
        <h1 className="text-xl mt-12 cursor-pointer">FILTERS</h1>
        <div className={`border border-gray-300 py-2 pl-5 mt-6 ${showFilter ? "" : "hidden"}`}>
          <h1 className="mb-3">CATEGORIES</h1>
          <div className="flex flex-col text-sm space-y-2 text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory} />Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory} />Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 py-2 pl-5 mt-5 ${showFilter ? "" : "hidden"}`}>
          <h1 className="mb-3">TYPE</h1>
          <div className="flex flex-col text-sm text-gray-700 space-y-2 ">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} onChange={toggleType} />Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={toggleType} />Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} onChange={toggleType} />Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="ml-10">
        <div className="flex justify-between items-center text-2xl ">
          <Title className="text-sm" text1={"ALL"} text2={"COLLECTIONS"} />
          <div>
            <select
              className="border-2 border-gray-300 text-sm px-2 py-3"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="relevant">sort by relevant</option>
              <option value="low-high">sort by low to high</option>
              <option value="high-low">sort by high to low</option>
            </select>
          </div>
        </div>
       
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 ">
          {allCollections.slice(0, displayCount).map((item) => (
            <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>

        {displayCount < allCollections.length && (
          <div className="flex justify-center items-center mt-5">
            <button
              onClick={loadMore}
              className="mt-6 border px-5 py-3 bg-black hover:bg-transparent hover:text-black hover:border-black text-white rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;
