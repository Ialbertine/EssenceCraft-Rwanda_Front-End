import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";



const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(false);
    const toggleDropdown = (dropdownName) => {
          setActiveDropdown(activeDropdown === dropdownName ? false : dropdownName);
    }

  return (
    <nav className="container mx-auto flex justify-between py-2 lg:px-[3rem]">
      <div className="w-[30rem] h-[5rem] flex items-center">
        <img src="/GSlogo.jpg" alt="EssenceCraft" className="h-[90%] w-[50%]" />
      </div>
      <div className="space-x-6 lg:flex items-center sm:hidden md:hidden ">
        <Link
          className="flex items-center hover:text-[#c04242] text-[17px] font-medium"
          to="/"
        >
          Home
        </Link>
        <div className="relative flex items-center">
          <Link
            className="flex items-center hover:text-[#c04242] text-[17px] font-medium"
            to="#"
            onMouseEnter={() => toggleDropdown("categories")}
            onMouseLeave={() => toggleDropdown("categories")}
          >
            Categories <ChevronDownIcon className="w-4 h-4 ml-1" />
          </Link>
          {activeDropdown === "categories" && (
            <div className="absolute top-8 bg-[#f4f1f1] text-black p-2 shadow-lg mt-2 transition ease-in-out duration-500 w-[10rem]">
              <Link
                className="block px-2 py-1 hover:bg-[gray] transition ease-in-out duration-600"
                to="#"
              >
                Basket
              </Link>
              <Link
                className="block px-2 py-1 hover:bg-[gray] transition ease-in-out duration-600"
                to="#"
              >
                Clothing
              </Link>
              <Link
                className="block px-2 py-1 hover:bg-[gray] transition ease-in-out duration-600"
                to="#"
              >
                Home Decor
              </Link>
            </div>
          )}
        </div>
        <div className="relative flex items-center">
          <Link
            className="flex items-center hover:text-[#c04242] text-[17px] font-medium"
            to="#"
            onMouseEnter={() => toggleDropdown("shops")}
            onMouseLeave={() => toggleDropdown("shops")}
          >
            Shops <ChevronDownIcon className="w-4 h-4 ml-1" />
          </Link>
          {activeDropdown === "shops" && (
            <div className="absolute top-8 bg-[#f4f1f1] text-black p-2 shadow-lg mt-2 transition ease-in-out duration-500 w-[10rem]">
              <Link
                className="block px-2 py-1 hover:bg-[gray] transition ease-in-out duration-600"
                to="/"
              >
                shop1
              </Link>
              <Link
                className="block px-2 py-1 hover:bg-[gray] transition ease-in-out duration-600"
                to="/"
              >
                shop2
              </Link>
              <Link
                className="block px-2 py-1 hover:bg-[gray] transition ease-in-out duration-600"
                to="/"
              >
                shop3
              </Link>
            </div>
          )}
        </div>
        <div className="relative flex items-center">
          <Link
            className="flex items-center hover:text-[#c04242] text-[17px] font-medium"
            to="#"
            onMouseEnter={() => toggleDropdown("pages")}
            onMouseLeave={() => toggleDropdown("pages")}
          >
            Pages <ChevronDownIcon className="w-4 h-4 ml-1" />
          </Link>
          {activeDropdown === "pages" && (
            <div className="absolute top-8 bg-[#f4f1f1] text-black p-2 shadow-lg mt-2 transition ease-in-out duration-600 w-[10rem]">
              <Link
                className="block px-2 py-1 hover:bg-[gray] transition ease-in-out duration-600"
                to="/"
              >
                About us
              </Link>
              <Link
                className="block px-2 py-1 hover:bg-[gray] transition ease-in-out duration-600"
                to="/"
              >
                Services
              </Link>
              <Link
                className="block px-2 py-1 hover:bg-[gray] transition ease-in-out duration-600"
                to="/"
              >
                Blogs
              </Link>
            </div>
          )}
        </div>
        <Link
          className="flex items-center hover:text-[#c04242] text-[17px] font-medium"
          to="/"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center lg:flex gap-2 sm:hidden">
        <Link to="">
          {" "}
          <CiSearch className="w-6 h-6" />
        </Link>
        <Link to="">
          {" "}
          <CiHeart className="w-6 h-6" />
        </Link>
        <Link to="">
          {" "}
          <FaRegUser className="w-6 h-6" />
        </Link>
        <Link to="">
          {" "}
          <IoCartOutline className="w-6 h-6" />
        </Link>
      </div>
      <div className="lg:hidden sm:flex items-center text-4xl">
        <IoMdMenu />
      </div>
    </nav>
  );
};

export default Header;
