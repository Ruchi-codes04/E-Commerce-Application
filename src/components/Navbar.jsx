import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center w-full justify-between  font-medium"> {/* py-[20px] */}
      <div>
        <img
          src={assets.logo}
          className='w-[80px] h-[80px] rounded-full'
          alt="Logo"
        />
      </div>

      <ul
        className="hidden sm:flex list-none text-sm text-[#4B5563] gap-[32px]"
        
      >
        <li>
          <NavLink
            to="/"
            className="hover:text-[#111827] text-inherit no-underline"
          >
            <p>HOME</p>
            {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/> */}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/collections"
            className="hover:text-[#111827] text-inherit no-underline"
          >
            <p> COLLECTIONS</p>
            {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/> */}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className="hover:text-[#111827] text-inherit no-underline"
          >
            <p>ABOUT</p>
            {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/> */}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="hover:text-[#111827] text-inherit no-underline"
          >
            <p>CONTACT</p>
            {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/> */}
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-[30px] ml-[48px]">
        <img
          src={assets.search_icon}
          alt="search-icon"
          className="w-[20px] h-[20px]"
        />
        <div className="relative group">
          <img
            src={assets.profile_icon}
            alt="profile-icon"
            className="w-[20px] h-[20px]"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-[0px] pt-[5px]">
            <div className="flex flex-col w-[80px] bg-[#f1f5f9] text-[#6b7280] rounded px-[16px] py-[12px]">
              <p className="cursor-pointer hover:text-[#000]">My Profile</p>
              <p className="cursor-pointer hover:text-[#000]">Orders</p>
              <p className="cursor-pointer hover:text-[#000]">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className='relative'>
           <img src={assets.cart_icon} alt="cart-icon" className="w-[20px] min-w-[20px]" />
           <p className='absolute right-[-5px] bottom-[-5px] w-[16px] text-center leading-[16px] bg-[#000] text-[#fff] aspect-square rounded-full text-[8px]'>10</p>

        </Link>



      </div>
    </div>
  );
};

export default Navbar;
