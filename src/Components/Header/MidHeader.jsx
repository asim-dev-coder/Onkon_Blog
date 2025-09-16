import React from "react";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const MidHeader = () => {
  return (
    <div className="bg-white md:border-b md:border-gray-200 lg:border-none">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center gap-5 w-11/12 mx-auto py-3">
        <div className="flex items-center">
          {" "}
          <div className="relative w-full md:w-[400px] lg:w-[500px]">
            <input
              className="w-full pl-4 pr-10 py-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-3xl focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sky-500 text-lg cursor-pointer hover:text-[#1198ad] transition-colors duration-200" />
          </div>
        </div>
        <Link to="/" className="hidden lg:flex">
          <div className="flex font-semibold">
            <h1 className="caveat text-sky-500 text-3xl">Tipu's</h1>
            <span className="caveat text-3xl">World</span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center">
          <div className="flex justify-center gap-6">
            {/* <Link to="/wishlist" className="flex items-center gap-2">
              <FaRegHeart className="text-2xl text-gray-500" />
              <p className="text-gray-500 text-xs" tabIndex={0} role="">
                Wishlist <br />{" "}
                <span className="font-extralight text-black">0-ITEMS</span>{" "}
              </p>
            </Link>

            <Link to="/addtocart" className="flex items-center gap-2">
              <IoBagOutline className="text-2xl text-gray-500" />
              <p className="text-gray-500 text-xs" tabIndex={0} role="">
                Cart <br />{" "}
                <span className="font-extralight text-black">0-ITEMS</span>{" "}
              </p>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      {/* <div className="md:hidden flex flex-col items-center gap-3 py-6 border-b border-gray-300 w-11/12 mx-auto">
        <div className="w-full mx-auto flex items-center pt-4">
          <div className="relative w-full"></div>
        </div>
      </div> */}
    </div>
  );
};

export default MidHeader;
