import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { useCart } from "../../context/CartContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";


const TopHeader = () => {
  const { totalItems } = useCart();
  return (
    <>
      <div className="bg-gray-100  text-gray-500 text-sm  hidden md:block lg:hidden ">
        <div className="flex items-center justify-between py-4 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MdOutlinePhoneInTalk />
              <p>+8801580768366</p>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp />
              <p>+8801580768366</p>
            </div>
          </div>

          <div className="flex items-center md:gap-4">
            <div className="flex items-center gap-4 ">
              <LuUserRound className="text-2xl text-gray-600 cursor-pointer" />
              <FaRegHeart className="text-2xl text-gray-600 cursor-pointer" />
              <IoNotifications className="text-2xl text-gray-600 cursor-pointer" />
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button">
                <RxHamburgerMenu className="text-2xl text-sky-500 cursor-pointer" />
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white z-1 mt-4 h-screen w-70 p-2 shadow -ml-56 py-6"
              >
                <div className="flex items-center text-lg py-4 text-gray-600 font-medium justify-between px-4">
                  <h1 className=""> My Menu</h1>
                  <RxCross1
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.activeElement?.blur();
                    }}
                  />
                </div>
                <Link
                  to="/"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  <p>Home </p>
                  <CiCirclePlus className="text-xl" />
                </Link>
                {/*to="/about"*/}{" "}
                <Link className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md">
                  <p>About</p>
                  <CiCirclePlus className="text-xl" />
                </Link>
                <Link
                  to="/categories"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  <p>Categories</p>
                  <CiCirclePlus className="text-xl" />
                </Link>
                <Link
                  to="/products"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  <p>Products</p>
                  <CiCirclePlus className="text-xl" />
                </Link>
                <Link
                  to="/contact"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  <p>Contact</p>
                  <CiCirclePlus className="text-xl" />
                </Link>
                <div className="flex justify-center items-center py-10 gap-6 text-2xl text-sky-500">
                  <FaFacebookSquare className="cursor-pointer" />
                  <FaXTwitter className="cursor-pointer" />
                  <FaSquareInstagram className="cursor-pointer" />
                  <FaLinkedin className="cursor-pointer" />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-sky-100 via-lime-100 to-white text-gray-500 text-sm md:hidden">
        <div className="flex items-center justify-between py-2 w-11/12 mx-auto">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost p-0 hover:bg-transparent hover:border-transparent hover:shadow-none hover:transparent-none"
            >
              <RxHamburgerMenu className="text-2xl text-sky-500 z-30" />
            </label>

            <div
              tabIndex={0}
              className="dropdown-content menu bg-white shadow-lg w-70 h-screen -ml-5 mt-4 z-50"
            >
              <div className="absolute top-90 left-0 right-0 flex justify-center gap-4 p-6 bg-gray-50">
                <FaFacebookSquare className="text-2xl text-blue-500 hover:text-blue-600 cursor-pointer transition-colors" />
                <FaWhatsapp className="text-2xl text-green-500 hover:text-blue-600 cursor-pointer transition-colors" />
                <FaXTwitter className="text-2xl text-black hover:text-blue-400 cursor-pointer transition-colors" />
                <FaSquareInstagram className="text-2xl text-pink-500 hover:text-pink-600 cursor-pointer transition-colors" />
                <FaLinkedin className="text-2xl text-sky-500 hover:text-blue-700 cursor-pointer transition-colors" />
              </div>
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
                <h1 className="text-lg font-medium text-sky-500">My Menu</h1>
                <RxCross1
                  className="text-xl cursor-pointer text-gray-500 hover:text-[#1198ad]"
                  onClick={() => document.activeElement?.blur()}
                />
              </div>

              <div className="p-2 space-y-2 mt-2">
                <Link
                  to="/"
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#1198ad] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">Dashboard</span>
                  <CiCirclePlus className="text-xl text-green-500" />
                </Link>
                <Link
                  to="/products"
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#1198ad] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">My Tasks</span>
                  <CiCirclePlus className="text-xl text-green-500" />
                </Link>
                {/*to="/review"*/}{" "}
                <Link
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#1198ad] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">Calendar</span>
                  <CiCirclePlus className="text-xl text-green-500" />
                </Link>
                {/*to="/about"*/}
                <Link
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#1198ad] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">Notification</span>
                  <IoNotifications className="text-xl text-green-500" />
                </Link>
                <Link
                  to="/contact"
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#1198ad] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">Analytics</span>
                  <CiCirclePlus className="text-xl text-green-500" />
                </Link>
                <Link
                  to="/contact"
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#1198ad] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">Settings</span>
                  <CiCirclePlus className="text-xl text-green-500" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex text-2xl font-semibold">
            <h1 className="caveat text-black text-3xl">Tipu's</h1>
            <span className="caveat text-sky-500 text-3xl">World</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/yourcart"
              className="btn btn-ghost p-0 hover:bg-transparent"
            >
              <div class="relative flex items-center justify-center">
                {/* Base Shape  */}
                <IoNotifications className="text-2xl text-sky-500" />
                {/* Overlapping Shape */}
                <div className="absolute top-1 left-5 -translate-x-1/2 -translate-y-1/2 bg-pink-600 w-4 h-4 rounded-full z-10 flex items-center justify-center text-white font-bold">
                  {totalItems}
                </div>
              </div>
            </Link>
            <Link
              to="/wishlist"
              className="btn btn-ghost p-0 hover:bg-transparent"
            >
              <FaRegHeart className="text-2xl text-sky-500" />
            </Link>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost p-0 hover:bg-transparent"
              >
                <LuUserRound className="text-2xl text-sky-500" />
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
    </>
  );
};

export default TopHeader;
