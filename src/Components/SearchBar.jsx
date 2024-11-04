import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  return showSearch ? (
    <div className="flex justify-center items-center border-t border-b bg-gray-50 text-center mx-4 md:mx-32">
      <div className='relative flex justify-center items-center'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-96 mx-3 my-5 px-5 py-2 rounded-full border border-gray-400 focus:border-gray-300 text-sm"
          type="text"
          placeholder="Search"
          aria-label="Search input"
        />
        <img className="absolute right-7 w-4" src={assets.search_icon} alt="Search icon" />
      </div>
      <img 
        className="cursor-pointer w-3 ml-4" 
        onClick={() => setShowSearch(false)} 
        src={assets.cross_icon} 
        alt="Close search bar" 
      />
    </div>
  ) : null;
};

export default SearchBar;
