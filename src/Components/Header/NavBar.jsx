import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SlUserFollow } from "react-icons/sl";
import { RiMenu2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LuUserRound } from "react-icons/lu";
import { FaListUl } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { useCart } from "../../context/CartContext";

const NavBar = ({}) => {
  const [categories, setCategories] = useState([]);
  // track which category is open
  const [openCategory, setOpenCategory] = useState(null); // track open category
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("/Product-Data/ProductCategory.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data); // full array with id, name, image, icon
      });
  }, []);

  const { totalItems } = useCart();
  return (
    <>
      <div className="bg-white hidden lg:block border-b border-gray-200">
        <div className="flex justify-between items-center w-11/12 mx-auto py-3">
          {/* Home icon + hover dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsHomeDropdownOpen(true)}
            onMouseLeave={() => setIsHomeDropdownOpen(false)}
          >
            <div
              role="button"
              className="btn bg-green-300 border-none p-3 rounded-xl cursor-pointer transition duration-300"
            >
              <RiMenu2Line className="font-bold text-xl text-black" />
            </div>
            {isHomeDropdownOpen && (
              <div className="absolute left-0 z-10 p-2 flex flex-col rounded-lg shadow-md bg-gradient-to-r from-lime-50 via-sky-50 to-white">
                {/* Home */}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  <span className="inline-flex justify-center items-center ml-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Home
                  </span>
                </Link>

                {/* Notifications */}
                <Link
                  to="/notifications"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-2"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  <span className="inline-flex justify-center items-center ml-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Notifications
                  </span>
                </Link>

                {/* Messages */}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  <span className="inline-flex justify-center items-center ml-2">
                    <TiMessages size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Messages
                  </span>
                </Link>

                {/* Follow */}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  <span className="inline-flex justify-center items-center ml-2">
                    <SlUserFollow size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Follow
                  </span>
                </Link>

                {/* Lists */}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  <span className="inline-flex justify-center items-center ml-2">
                    <FaListUl />
                  </span>
                  <span className="ml-3 text-sm tracking-wide truncate">
                    Lists
                  </span>
                </Link>

                {/* Profile */}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  <span className="inline-flex justify-center items-center ml-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Profile
                  </span>
                </Link>

                {/* Settings */}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  <span className="inline-flex justify-center items-center ml-2">
                    <FiSettings />
                  </span>
                  <span className="ml-3 text-sm tracking-wide truncate">
                    Settings
                  </span>
                </Link>
              </div>
            )}
          </div>
          <div className="flex gap-7">
            {categories.map((category) => (
              <div
                onMouseEnter={() => setOpenCategory(category.id)}
                onMouseLeave={() => setOpenCategory(null)}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="text-[17px] hover:text-sky-500 text-black font-semibold">
                    {category.name}
                  </p>
                  <MdOutlineKeyboardArrowDown
                    className={`font-bold text-xl transform transition-transform duration-300 text-black ${
                      openCategory === category.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {openCategory === category.id && (
                  <ul className="border-b-3 border-r-3 border-amber-400 dropdown-content menu absolute rounded-box z-10 w-[231px] p-1 mt-1 shadow-sm text-black bg-gradient-to-r from-lime-50 to-sky-50 hover:bg-gray-100">
                    {category.type.map((subType, index) => (
                      <li key={index}>
                        <Link
                          to=""
                          className="flex items-center gap-2 text-[16px] cursor-pointer hover:bg-white"
                          onClick={() => setOpenCategory(null)}
                        >
                          <img
                            src={subType.icon}
                            alt={subType}
                            className="w-10 h-10"
                          />
                          {subType.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/*/notification*/}
            <Link to="" className="btn btn-ghost p-0 hover:bg-transparent">
              <div class="relative flex items-center justify-center">
                {/* Base Shape  */}
                <IoNotifications className="text-2xl text-teal-500" />
                {/* Overlapping Shape */}
                <div className="absolute top-1 left-5 -translate-x-1/2 -translate-y-1/2 bg-sky-700 w-4 h-4 rounded-full z-10 flex items-center justify-center text-white font-bold">
                  {totalItems}
                </div>
              </div>
            </Link>
            {/*/wishlist*/}
            <Link to="" className="btn btn-ghost p-1 hover:bg-transparent">
              <FaRegHeart className="text-2xl text-teal-500" />
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsUserDropdownOpen(true)}
              onMouseLeave={() => setIsUserDropdownOpen(false)}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn bg-green-300 border-none p-3 rounded-xl cursor-pointer"
              >
                <LuUserRound className="font-bold text-xl text-black" />
              </div>
              {isUserDropdownOpen && (
                <ul
                  tabIndex={0}
                  className="items-start dropdown-content menu absolute right-0 mt-1 rounded-box z-10 w-[97px] p-2 shadow-sm text-black bg-gradient-to-r from-sky-100 to-amber-100"
                >
                  <li>
                    {/**/}{" "}
                    <Link
                      to="/signup"
                      className="w-[73px] hover:bg-white rounded-lg font-medium"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      Sign Up
                    </Link>
                    {/**/}
                    <Link
                      to="/login"
                      className="w-[81px] hover:bg-white rounded-lg font-medium"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      Login <CiLogin size={23} className="text-black" />
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="block lg:hidden gap-3 py-3 w-11/12 mx-auto">
        <div className="w-full flex items-center">
          <div className="relative w-full">
            <input
              className="w-full pl-4 pr-10 py-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-3xl focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-lg cursor-pointer hover:text-[#1198ad] transition-colors duration-200" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
