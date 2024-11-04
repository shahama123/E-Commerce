import React, { useContext, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
    const {setShowSearch, getCartCount} = useContext(ShopContext)
    const [visible, setVisible]= useState(false)
  return (
    <div className="flex items-center justify-between py-5 font-medium md:mx-32 mx-5">
      <Link to={"/"}>
        <div className="flex gap-1">
          {" "}
          <h1 className="md:text-3xl text-lg font-serif">TRENDORA</h1>
          <FaCircle className="md:w-3 w-2 md:mt-4 mt-2 text-rose-300" />
        </div>
      </Link>
      <div className="  flex justify-normal items-center gap-5">
      <ul className="hidden  sm:flex gap-5 text-sm text-gray-700 ">
        <NavLink to={"/"} className="flex flex-col items-center gap-1 ">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/collections"}
          className="flex flex-col items-center gap-1 "
        >
          <p>Collections</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1 ">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1 ">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
        {/* <div className="flex items-center">
          <button className="border border-gray-300 text-sm text-gray-700  px-4  py-1.5  rounded-3xl focus:outline-none">
            Admin Panel
          </button>
        </div> */}
        </div>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded"> 
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
                
            </div>
          </div> 
        </div>
        <Link to={'/cart'} className="relative">
        
        <img src={assets.cart_icon} className="w-5 cursor-pointer" alt="" />
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
        {getCartCount()}
        </p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
      </div>

      {/*sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible  ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border hover:bg-black hover:text-white" to={'/'}>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border hover:bg-black hover:text-white" to={'/collections'}>COLLECTIONS</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border hover:bg-black hover:text-white" to={'/about'}>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border hover:bg-black hover:text-white" to={'/contact'}>CONTACT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border hover:bg-black hover:text-white" to={'/'}>ADMIN PANEL</NavLink>

        </div>
      </div>
    </div>
  );
};

export default Header;
