import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";

const NavBar = () => {
  const {setShowSearch, getCartCount} = useContext(ShopContext)
  const [activeItem, setActiveItem] = useState("HOME");

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "COLLECTIONS", path: "/collections" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="flex border-b-2 flex-col md:flex-row justify-between items-center py-4  mx-32 md:px-20 gap-4">
        <Link to={'/'}>
      <div className="flex gap-2">
          {" "}
          <h1 className="text-3xl  font-serif">TRENDORA</h1>
          <FaCircle className="w-3 mt-4 text-rose-300" />
      </div>
        </Link>

      <div className="flex gap-4 md:gap-6 text-sm  items-center text-gray-900">
        {menuItems.map((item) => (
          <ul key={item.name} className="relative cursor-pointer">
            <li
              className={`inline-block ${
                activeItem === item.name
                  ? "after:block after:bg-black after:h-0.5 after:w-8 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1"
                  : ""
              }`}
            >
              <Link to={item.path} onClick={() => setActiveItem(item.name)}>
                {item.name}
              </Link>
            </li>
          </ul>
        ))}
        <div className="flex items-center">
          <button className="border border-gray-300 px-4  py-1.5  rounded-3xl focus:outline-none">
            Admin Panel
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6 cursor-pointer text-2xl">
       <img src={assets.search_icon} className="w-5" onClick={()=>setShowSearch(true)} alt="" />
       
         <Link to={'/login'}><img src={assets.profile_icon} className="w-5" alt="" /></Link>
         <Link to={'/cart'}>
        <div className="relative cursor-pointer text-2xl">
          <BsHandbag />
          <div className="absolute bottom-1 right-1 transform translate-x-1/2 translate-y-1/2 rounded-full w-4 h-4 bg-black text-white text-center text-xs">
            {getCartCount()}
          </div>
        </div>
         </Link>
      </div>
    </div>
  );
};

export default NavBar;
