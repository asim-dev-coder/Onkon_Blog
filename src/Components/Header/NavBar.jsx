import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div className="bg-white border-t border-b border-gray-200 hidden lg:block">
        <div className="flex justify-between items-center w-11/12 mx-auto py-4">
          <div className="flex items-center ">
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
                <HiMiniBars3CenterLeft className="font-bold text-xl text-black" />
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
                        to={`/products?category=${encodeURIComponent(
                          category
                        )}`}
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
          </div>
          <div className="flex items-center lg:ml-10 xl:ml-20">
            {" "}
            <div className="relative w-full md:w-[400px] lg:w-[500px]">
              <input
                className="w-full pl-4 pr-10 py-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-3xl focus:outline-none"
                type="text"
                placeholder="Search Tasks..."
              />
              <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sky-500 text-lg cursor-pointer hover:text-[#1198ad] transition-colors duration-200" />
            </div>
          </div>
          <Link to="/" className="hidden lg:flex">
            <div className="flex text-2xl font-semibold">
              <h1 className="caveat text-sky-500 text-3xl">Tipu's</h1>
              <span className="caveat text-3xl">World</span>
            </div>
          </Link>
          <div>
            <Link
              to="/products"
              className="bg-green-300 hover:text-white text-base text-black p-3 rounded-lg hover:bg-[#426fdf] transition duration-300 cursor-pointer font-medium"
            >
              Log In
            </Link>
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
