import React, { useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
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
import { TiMessages } from "react-icons/ti";
import { SlUserFollow } from "react-icons/sl";
import { FaListUl } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
const TopHeader = () => {
  const { totalItems } = useCart();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };
  return (
    <>
      {" "}
      <div className="bg-gradient-to-b from-sky-100 via-lime-100 to-white text-gray-500 text-sm md:hidden">
        {" "}
        <div className="flex items-center justify-between py-2 w-11/12 mx-auto">
          {" "}
          <div className="dropdown">
            {" "}
            <label
              tabIndex={0}
              className="btn btn-ghost p-0 hover:bg-transparent hover:border-transparent hover:shadow-none hover:transparent-none"
            >
              {" "}
              <RxHamburgerMenu className="text-2xl text-sky-500 z-30" />{" "}
            </label>{" "}
            <div
              tabIndex={0}
              className="dropdown-content menu bg-white shadow-lg w-60 h-screen -ml-5 z-50"
            >
              {" "}
              <div className="absolute top-155 left-0 right-0 flex justify-center gap-4 p-6 bg-gray-50">
                {" "}
                <FaFacebookSquare className="text-2xl text-blue-500 hover:text-blue-600 cursor-pointer transition-colors" />{" "}
                <FaWhatsapp className="text-2xl text-green-500 hover:text-blue-600 cursor-pointer transition-colors" />{" "}
                <FaXTwitter className="text-2xl text-black hover:text-blue-400 cursor-pointer transition-colors" />{" "}
                <FaSquareInstagram className="text-2xl text-pink-500 hover:text-pink-600 cursor-pointer transition-colors" />{" "}
                <FaLinkedin className="text-2xl text-sky-500 hover:text-blue-700 cursor-pointer transition-colors" />{" "}
              </div>{" "}
              <div className="flex items-center justify-between py-2 px-4 border-b border-gray-200">
                {" "}
                <h1 className="text-lg font-medium text-sky-500">
                  My Menu
                </h1>{" "}
                <RxCross1
                  className="text-xl cursor-pointer text-gray-500 hover:text-[#1198ad]"
                  onClick={() => document.activeElement?.blur()}
                />{" "}
              </div>{" "}
              <div className="p-2">
                {" "}
                <li className="space-y-0.5">
                  {/* Apps Menu */}
                  <button
                    onClick={() => toggleMenu("menu-app")}
                    className={`collapse-toggle flex items-center gap-2 w-full text-left ${
                      openMenu === "menu-app" ? "bg-base-content/10" : ""
                    }`}
                  >
                    <div className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500">
                      <span className="inline-flex justify-center items-center ml-2">
                        {" "}
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          ></path>{" "}
                        </svg>{" "}
                      </span>
                      <div className="ml-2 text-sm tracking-wide truncate">
                        Home
                      </div>
                    </div>
                    <span
                      className={`icon-[tabler--chevron-down] size-4 transition-all duration-300 ml-auto ${
                        openMenu === "menu-app" ? "rotate-180" : ""
                      }`}
                    ></span>
                  </button>
                  {openMenu === "menu-app" && (
                    <ul className="collapse w-auto space-y-0.5 overflow-hidden transition-[height] duration-300">
                      <li>
                        <a href="#" className="flex items-center gap-2">
                          <span className="icon-[tabler--message] size-5"></span>
                          এআই
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2">
                          <span className="icon-[tabler--calendar] size-5"></span>
                          প্রোগ্রামিং
                        </a>
                      </li>
                      {/* Academy Menu */}
                      <li className="space-y-0.5">
                        <button
                          onClick={() => toggleMenu("sub-menu-academy")}
                          className={`collapse-toggle flex items-center gap-2 w-full text-left ${
                            openMenu === "sub-menu-academy"
                              ? "bg-base-content/10"
                              : ""
                          }`}
                        >
                          <span className="icon-[tabler--book] size-5"></span>
                          রোবোটিক্স
                          <span
                            className={`icon-[tabler--chevron-down] size-4 ml-auto ${
                              openMenu === "sub-menu-academy"
                                ? "rotate-180"
                                : ""
                            }`}
                          ></span>
                        </button>

                        {openMenu === "sub-menu-academy" && (
                          <ul className="collapse w-auto space-y-0.5 overflow-hidden transition-[height] duration-300">
                            <li>
                              <a href="#" className="flex items-center gap-2">
                                <span className="icon-[tabler--books] size-5"></span>
                                Courses
                              </a>
                            </li>
                            <li>
                              <a href="#" className="flex items-center gap-2">
                                <span className="icon-[tabler--list-details] size-5"></span>
                                Course details
                              </a>
                            </li>

                            {/* Stats Submenu */}
                            <li className="space-y-0.5">
                              <button
                                onClick={() =>
                                  toggleMenu("sub-menu-academy-stats")
                                }
                                className={`collapse-toggle flex items-center gap-2 w-full text-left ${
                                  openMenu === "sub-menu-academy-stats"
                                    ? "bg-base-content/10"
                                    : ""
                                }`}
                              >
                                <span className="icon-[tabler--chart-bar] size-5"></span>
                                Stats
                                <span
                                  className={`icon-[tabler--chevron-down] size-4 ml-auto ${
                                    openMenu === "sub-menu-academy-stats"
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                ></span>
                              </button>

                              {openMenu === "sub-menu-academy-stats" && (
                                <ul className="collapse w-auto space-y-0.5 overflow-hidden transition-[height] duration-300">
                                  <li>
                                    <a
                                      href="#"
                                      className="flex items-center gap-2"
                                    >
                                      <span className="icon-[tabler--chart-donut] size-5"></span>
                                      Goals
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                {/* Notifications */}{" "}
                <Link
                  to="/notifications"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-2"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>{" "}
                    </svg>{" "}
                  </span>{" "}
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {" "}
                    Notifications{" "}
                  </span>{" "}
                </Link>{" "}
                {/* Messages */}{" "}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <TiMessages size={20} />{" "}
                  </span>{" "}
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {" "}
                    Messages{" "}
                  </span>{" "}
                </Link>{" "}
                {/* Follow */}{" "}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <SlUserFollow size={20} />{" "}
                  </span>{" "}
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {" "}
                    Follow{" "}
                  </span>{" "}
                </Link>{" "}
                {/* Lists */}{" "}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <FaListUl />{" "}
                  </span>{" "}
                  <span className="ml-3 text-sm tracking-wide truncate">
                    {" "}
                    Lists{" "}
                  </span>{" "}
                </Link>{" "}
                {/* Profile */}{" "}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>{" "}
                    </svg>{" "}
                  </span>{" "}
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {" "}
                    Profile{" "}
                  </span>{" "}
                </Link>{" "}
                {/* Settings */}{" "}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <FiSettings />{" "}
                  </span>{" "}
                  <span className="ml-3 text-sm tracking-wide truncate">
                    {" "}
                    Settings{" "}
                  </span>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <Link to="/">
            {" "}
            <div className="flex text-2xl font-semibold">
              {" "}
              <h1 className="caveat text-black text-3xl">Tipu's</h1>{" "}
              <span className="caveat text-sky-500 text-3xl">World</span>{" "}
            </div>{" "}
          </Link>{" "}
          <div className="flex items-center gap-4">
            {" "}
            {/*/notification*/}{" "}
            <Link to="" className="btn btn-ghost p-0 hover:bg-transparent">
              {" "}
              <div class="relative flex items-center justify-center">
                {" "}
                {/* Base Shape */}{" "}
                <IoNotifications className="text-2xl text-sky-500" />{" "}
                {/* Overlapping Shape */}{" "}
                <div className="absolute top-1 left-5 -translate-x-1/2 -translate-y-1/2 bg-pink-600 w-4 h-4 rounded-full z-10 flex items-center justify-center text-white font-bold">
                  {" "}
                  {totalItems}{" "}
                </div>{" "}
              </div>{" "}
            </Link>{" "}
            {/*/wishlist*/}{" "}
            <Link to="" className="btn btn-ghost p-1 hover:bg-transparent">
              {" "}
              <FaRegHeart className="text-2xl text-sky-500" />{" "}
            </Link>{" "}
            <div className="dropdown dropdown-end">
              {" "}
              <label
                tabIndex={0}
                className="btn btn-ghost p-0 hover:bg-transparent"
              >
                {" "}
                <LuUserRound className="text-2xl text-sky-500" />{" "}
              </label>{" "}
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow text-black bg-gradient-to-r from-sky-200 to-amber-200 rounded-box w-[92px] mt-2"
              >
                {" "}
                <li>
                  {" "}
                  <Link
                    to="/signup"
                    className="w-[72px] hover:bg-gray-100 rounded-lg"
                  >
                    {" "}
                    Sign Up{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link
                    to="/login"
                    className="w-[82px] hover:bg-gray-100 rounded-lg"
                  >
                    {" "}
                    Login <CiLogin size={23} className="text-black" />{" "}
                  </Link>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="bg-gray-100 text-gray-500 text-sm hidden md:block lg:hidden ">
        {" "}
        <div className="flex items-center justify-between py-4 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
          {" "}
          <div className="flex items-center gap-4">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <MdOutlinePhoneInTalk /> <p>+8801580768366</p>{" "}
            </div>{" "}
            <div className="flex items-center gap-2">
              {" "}
              <FaWhatsapp /> <p>+8801580768366</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-center md:gap-4">
            {" "}
            <div className="flex items-center gap-4 ">
              {" "}
              <LuUserRound className="text-2xl text-gray-600 cursor-pointer" />{" "}
              <FaRegHeart className="text-2xl text-gray-600 cursor-pointer" />{" "}
              <IoNotifications className="text-2xl text-gray-600 cursor-pointer" />{" "}
            </div>{" "}
            <div className="dropdown">
              {" "}
              <div tabIndex={0} role="button">
                {" "}
                <RxHamburgerMenu className="text-2xl text-sky-500 cursor-pointer" />{" "}
              </div>{" "}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white z-1 mt-4 h-screen w-70 p-2 shadow -ml-56 py-6"
              >
                {" "}
                <div className="flex items-center text-lg py-4 text-gray-600 font-medium justify-between px-4">
                  {" "}
                  <h1 className=""> My Menu</h1>{" "}
                  <RxCross1
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.activeElement?.blur();
                    }}
                  />{" "}
                </div>{" "}
                <Link
                  to="/"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  {" "}
                  <p>Home </p> <CiCirclePlus className="text-xl" />{" "}
                </Link>{" "}
                {/*to="/about"*/}{" "}
                <Link className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md">
                  {" "}
                  <p>About</p> <CiCirclePlus className="text-xl" />{" "}
                </Link>{" "}
                <Link
                  to="/categories"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  {" "}
                  <p>Categories</p> <CiCirclePlus className="text-xl" />{" "}
                </Link>{" "}
                <Link
                  to="/products"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  {" "}
                  <p>Products</p> <CiCirclePlus className="text-xl" />{" "}
                </Link>{" "}
                <Link
                  to="/contact"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  {" "}
                  <p>Contact</p> <CiCirclePlus className="text-xl" />{" "}
                </Link>{" "}
                <div className="flex justify-center items-center py-10 gap-6 text-2xl text-sky-500">
                  {" "}
                  <FaFacebookSquare className="cursor-pointer" />{" "}
                  <FaXTwitter className="cursor-pointer" />{" "}
                  <FaSquareInstagram className="cursor-pointer" />{" "}
                  <FaLinkedin className="cursor-pointer" />{" "}
                </div>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default TopHeader;

{
  /*
  import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
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
import { TiMessages } from "react-icons/ti";
import { SlUserFollow } from "react-icons/sl";
import { FaListUl } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
const TopHeader = () => {
  const { totalItems } = useCart();
  return (
    <>
      {" "}
      <div className="bg-gradient-to-b from-sky-100 via-lime-100 to-white text-gray-500 text-sm md:hidden">
        {" "}
        <div className="flex items-center justify-between py-2 w-11/12 mx-auto">
          {" "}
          <div className="dropdown">
            {" "}
            <label
              tabIndex={0}
              className="btn btn-ghost p-0 hover:bg-transparent hover:border-transparent hover:shadow-none hover:transparent-none"
            >
              {" "}
              <RxHamburgerMenu className="text-2xl text-sky-500 z-30" />{" "}
            </label>{" "}
            <div
              tabIndex={0}
              className="dropdown-content menu bg-white shadow-lg w-60 h-screen -ml-5 mt-4 z-50"
            >
              {" "}
              <div className="absolute top-110 left-0 right-0 flex justify-center gap-4 p-6 bg-gray-50">
                {" "}
                <FaFacebookSquare className="text-2xl text-blue-500 hover:text-blue-600 cursor-pointer transition-colors" />{" "}
                <FaWhatsapp className="text-2xl text-green-500 hover:text-blue-600 cursor-pointer transition-colors" />{" "}
                <FaXTwitter className="text-2xl text-black hover:text-blue-400 cursor-pointer transition-colors" />{" "}
                <FaSquareInstagram className="text-2xl text-pink-500 hover:text-pink-600 cursor-pointer transition-colors" />{" "}
                <FaLinkedin className="text-2xl text-sky-500 hover:text-blue-700 cursor-pointer transition-colors" />{" "}
              </div>{" "}
              <div className="flex items-center justify-between py-2 px-4 border-b border-gray-200">
                {" "}
                <h1 className="text-lg font-medium text-sky-500">
                  My Menu
                </h1>{" "}
                <RxCross1
                  className="text-xl cursor-pointer text-gray-500 hover:text-[#1198ad]"
                  onClick={() => document.activeElement?.blur()}
                />{" "}
              </div>{" "}
              <div className="p-2">
                {" "}
                <div
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>{" "}
                    </svg>{" "}
                  </span>{" "}
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {" "}
                    Home{" "}
                  </span>{" "}
                </div>{" "}
                {/* Notifications {" "}
                <Link
                  to="/notifications"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-2"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>{" "}
                    </svg>{" "}
                  </span>{" "}
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {" "}
                    Notifications{" "}
                  </span>{" "}
                </Link>{" "}
                {/* Messages {" "}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <TiMessages size={20} />{" "}
                  </span>{" "}
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {" "}
                    Messages{" "}
                  </span>{" "}
                </Link>{" "}
                {/* Follow {" "}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <SlUserFollow size={20} />{" "}
                  </span>{" "}
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {" "}
                    Follow{" "}
                  </span>{" "}
                </Link>{" "}
                {/* Lists *{" "}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <FaListUl />{" "}
                  </span>{" "}
                  <span className="ml-3 text-sm tracking-wide truncate">
                    {" "}
                    Lists{" "}
                  </span>{" "}
                </Link>{" "}
                {/* Profile *{" "}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>{" "}
                    </svg>{" "}
                  </span>{" "}
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {" "}
                    Profile{" "}
                  </span>{" "}
                </Link>{" "}
                {/* Settings *{" "}
                <Link
                  to="/"
                  className="rounded-lg relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500"
                  onClick={() => setIsHomeDropdownOpen(false)}
                >
                  {" "}
                  <span className="inline-flex justify-center items-center ml-2">
                    {" "}
                    <FiSettings />{" "}
                  </span>{" "}
                  <span className="ml-3 text-sm tracking-wide truncate">
                    {" "}
                    Settings{" "}
                  </span>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <Link to="/">
            {" "}
            <div className="flex text-2xl font-semibold">
              {" "}
              <h1 className="caveat text-black text-3xl">Tipu's</h1>{" "}
              <span className="caveat text-sky-500 text-3xl">World</span>{" "}
            </div>{" "}
          </Link>{" "}
          <div className="flex items-center gap-4">
            {" "}
            {/*{" "}
            <Link to="" className="btn btn-ghost p-0 hover:bg-transparent">
              {" "}
              <div class="relative flex items-center justify-center">
                {" "}
                {/* Base Shape *{" "}
                <IoNotifications className="text-2xl text-sky-500" />{" "}
                {/* Overlapping Shape *{" "}
                <div className="absolute top-1 left-5 -translate-x-1/2 -translate-y-1/2 bg-pink-600 w-4 h-4 rounded-full z-10 flex items-center justify-center text-white font-bold">
                  {" "}
                  {totalItems}{" "}
                </div>{" "}
              </div>{" "}
            </Link>{" "}
            {/*{" "}
            <Link to="" className="btn btn-ghost p-1 hover:bg-transparent">
              {" "}
              <FaRegHeart className="text-2xl text-sky-500" />{" "}
            </Link>{" "}
            <div className="dropdown dropdown-end">
              {" "}
              <label
                tabIndex={0}
                className="btn btn-ghost p-0 hover:bg-transparent"
              >
                {" "}
                <LuUserRound className="text-2xl text-sky-500" />{" "}
              </label>{" "}
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow text-black bg-gradient-to-r from-sky-200 to-amber-200 rounded-box w-[92px] mt-2"
              >
                {" "}
                <li>
                  {" "}
                  <Link
                    to="/signup"
                    className="w-[72px] hover:bg-gray-100 rounded-lg"
                  >
                    {" "}
                    Sign Up{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link
                    to="/login"
                    className="w-[82px] hover:bg-gray-100 rounded-lg"
                  >
                    {" "}
                    Login <CiLogin size={23} className="text-black" />{" "}
                  </Link>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="bg-gray-100 text-gray-500 text-sm hidden md:block lg:hidden ">
        {" "}
        <div className="flex items-center justify-between py-4 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
          {" "}
          <div className="flex items-center gap-4">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <MdOutlinePhoneInTalk /> <p>+8801580768366</p>{" "}
            </div>{" "}
            <div className="flex items-center gap-2">
              {" "}
              <FaWhatsapp /> <p>+8801580768366</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-center md:gap-4">
            {" "}
            <div className="flex items-center gap-4 ">
              {" "}
              <LuUserRound className="text-2xl text-gray-600 cursor-pointer" />{" "}
              <FaRegHeart className="text-2xl text-gray-600 cursor-pointer" />{" "}
              <IoNotifications className="text-2xl text-gray-600 cursor-pointer" />{" "}
            </div>{" "}
            <div className="dropdown">
              {" "}
              <div tabIndex={0} role="button">
                {" "}
                <RxHamburgerMenu className="text-2xl text-sky-500 cursor-pointer" />{" "}
              </div>{" "}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white z-1 mt-4 h-screen w-70 p-2 shadow -ml-56 py-6"
              >
                {" "}
                <div className="flex items-center text-lg py-4 text-gray-600 font-medium justify-between px-4">
                  {" "}
                  <h1 className=""> My Menu</h1>{" "}
                  <RxCross1
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.activeElement?.blur();
                    }}
                  />{" "}
                </div>{" "}
                <Link
                  to="/"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  {" "}
                  <p>Home </p> <CiCirclePlus className="text-xl" />{" "}
                </Link>{" "}
                {/**{" "}
                <Link to="/about" className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md">
                  {" "}
                  <p>About</p> <CiCirclePlus className="text-xl" />{" "}
                </Link>{" "}
                <Link
                  to="/categories"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  {" "}
                  <p>Categories</p> <CiCirclePlus className="text-xl" />{" "}
                </Link>{" "}
                <Link
                  to="/products"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  {" "}
                  <p>Products</p> <CiCirclePlus className="text-xl" />{" "}
                </Link>{" "}
                <Link
                  to="/contact"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#1198ad] rounded-md"
                >
                  {" "}
                  <p>Contact</p> <CiCirclePlus className="text-xl" />{" "}
                </Link>{" "}
                <div className="flex justify-center items-center py-10 gap-6 text-2xl text-sky-500">
                  {" "}
                  <FaFacebookSquare className="cursor-pointer" />{" "}
                  <FaXTwitter className="cursor-pointer" />{" "}
                  <FaSquareInstagram className="cursor-pointer" />{" "}
                  <FaLinkedin className="cursor-pointer" />{" "}
                </div>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default TopHeader;
 */
}
