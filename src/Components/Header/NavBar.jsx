import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { useCart } from "../../context/CartContext";

const NavBar = ({}) => {
  const [categories, setCategories] = useState([]);
  // track which category is open
  const [openCategory, setOpenCategory] = useState(null); // track open category
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

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
      <div className="bg-white border-b border-gray-200 hidden lg:block">
        <div className="flex justify-between items-center w-11/12 mx-auto py-3">
          <Link
            to="/"
            role="button"
            className="btn bg-green-300 border-none p-3 rounded-xl cursor-pointer transition duration-300"
          >
            <IoIosHome className="font-bold text-xl text-black" />
          </Link>
          <div className="flex gap-7">
            {categories.map((category) => (
              <div
                onMouseEnter={() => setOpenCategory(category.id)}
                onMouseLeave={() => setOpenCategory(null)}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="text-[17px] text-black font-semibold">
                    {category.name}
                  </p>
                  <MdOutlineKeyboardArrowDown
                    className={`font-bold text-xl transform transition-transform duration-300 text-black ${
                      openCategory === category.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {openCategory === category.id && (
                  <ul className="dropdown-content menu absolute rounded-box z-10 w-[228px] p-2 mt-1 shadow-sm text-black bg-gradient-to-r from-lime-50 to-sky-50 hover:bg-gray-100">
                    {category.type.map((subType, index) => (
                      <li key={index}>
                        <Link
                          to=""
                          className="flex items-center gap-2 text-[16px] cursor-pointer hover:bg-white"
                          onClick={() => setOpenCategory(null)}
                        >
                          <img
                            src={category.icon}
                            alt={subType}
                            className="w-5 h-5"
                          />
                          {subType}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/*/yourcart*/}
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
                    {/*/signup*/}{" "}
                    <Link
                      to=""
                      className="w-[73px] hover:bg-white font-medium"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      Sign Up
                    </Link>
                    {/*/login*/}
                    <Link
                      to=""
                      className="w-[81px] hover:bg-white font-medium"
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
