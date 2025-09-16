import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { useCart } from "../../context/CartContext";

const NavBar = ({ title, image }) => {
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(
            data.map(
              (product) => product.category || product.productDisplayCategory
            )
          ),
        ];
        setCategories(uniqueCategories.filter(Boolean));
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const { totalItems } = useCart();
  return (
    <>
      <div className="bg-white border-t border-b border-gray-200 hidden lg:block">
        <div className="flex justify-between items-center w-11/12 mx-auto py-4">
          <div
            className=""
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn bg-green-300 border-none px-4 py-6 rounded-lg transition duration-300 cursor-pointer flex gap-2"
            >
              <IoIosHome className="font-bold text-xl text-black" />
            </div>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content menu absolute rounded-box z-10 w-[178px] p-2 shadow-sm text-black bg-gradient-to-l from-teal-200 to-amber-200 hover:bg-gray-100"
              >
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/products?category=${encodeURIComponent(category)}`}
                      className="text-[16px] cursor-pointer hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      {category}
                      <img
                        className="w-full h-full object-cover"
                        src={image}
                        alt={title}
                      />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/products"
                    className="text-[16px] cursor-pointer hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div
            className=""
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn bg-green-300 border-none px-4 py-6 rounded-lg transition duration-300 cursor-pointer flex gap-2"
            >
              <p className="text-[17px] text-black">My Menu</p>
              <MdOutlineKeyboardArrowDown
                className={`font-bold text-xl transform transition-transform duration-300 text-black ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content menu absolute rounded-box z-10 w-[178px] p-2 shadow-sm text-black bg-gradient-to-l from-teal-200 to-amber-200 hover:bg-gray-100"
              >
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/products?category=${encodeURIComponent(category)}`}
                      className="text-[16px] cursor-pointer hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      {category}
                      <img
                        className="w-full h-full object-cover"
                        src={image}
                        alt={title}
                      />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/products"
                    className="text-[16px] cursor-pointer hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/yourcart"
              className="btn btn-ghost p-0 hover:bg-transparent"
            >
              <div class="relative flex items-center justify-center">
                {/* Base Shape  */}
                <IoNotifications className="text-2xl text-teal-500" />
                {/* Overlapping Shape */}
                <div className="absolute top-1 left-5 -translate-x-1/2 -translate-y-1/2 bg-sky-500 w-4 h-4 rounded-full z-10 flex items-center justify-center text-white font-bold">
                  {totalItems}
                </div>
              </div>
            </Link>
            <Link
              to="/wishlist"
              className="btn btn-ghost p-0 hover:bg-transparent"
            >
              <FaRegHeart className="text-2xl text-teal-500" />
            </Link>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost p-0 hover:bg-transparent"
              >
                <LuUserRound className="text-2xl text-teal-500" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow text-black bg-gradient-to-r from-sky-200 to-amber-200 rounded-box w-[92px] mt-2"
              >
                <li>
                  <Link to="/signup" className="w-[72px] hover:bg-gray-100">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="w-[82px] hover:bg-gray-100">
                    Login <CiLogin size={23} className="text-black" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="block lg:hidden gap-3 py-3 w-11/12 mx-auto">
        <div className="w-full flex items-center pt-4">
          <div className="relative w-full">
            <input
              className="w-full pl-4 pr-10 py-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-3xl focus:outline-none"
              type="text"
              placeholder="Search Tasks..."
            />
            <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-lg cursor-pointer hover:text-[#1198ad] transition-colors duration-200" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
