import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <div className="w-11/12 mx-auto">
      <div
        className={`flex h-screen dark:bg-gray-900 ${
          isSideMenuOpen ? "overflow-hidden" : ""
        }`}
      >
        <div className="flex h-screen dark:bg-gray-900">
          {/* Sidebar */}
          <aside className="z-20 hidden w-80 overflow-y-auto md:block flex-shrink-0">
            <div className="h-14 flex justify-center">
              {/* <img src="./images/logo.png" className="w-32 h-24 mt-10" /> */}
            </div>

            {/* Sidebar Links */}
            <div className="mt-24 p-2 flex flex-col gap-2">
              {/* Home */}
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
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
              </a>

              {/* Notifications */}
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
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
              </a>

              {/* Messages */}
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
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
                      d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 4a3.5 3.5 0 00-7 0"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Messages
                </span>
              </a>

              {/* Friends */}
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2a3 3 0 00-.879-2.121M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2a3 3 0 01.879-2.121M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a3 3 0 11-6 0 3 3 0 016 0zM9 10a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Friends
                </span>
              </a>

              {/* Lists */}
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
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
                      d="M9 17v-6a2 2 0 012-2h6M9 11V9a2 2 0 012-2h2a2 2 0 012 2v2m0 4h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Lists
                </span>
              </a>

              {/* Profile */}
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
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
              </a>

              {/* Settings */}
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
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
                      d="M9.75 3a1 1 0 00-.96.725l-.529 1.684a1 1 0 01-.95.69H4.5a1 1 0 00-.96.725l-.529 1.684a1 1 0 01-.95.69H1v4h1.061a1 1 0 01.95.69l.529 1.684A1 1 0 004.5 15h2.811a1 1 0 01.95.69l.529 1.684A1 1 0 009.75 18h4.5a1 1 0 00.96-.725l.529-1.684a1 1 0 01.95-.69H19.5a1 1 0 00.96-.725l.529-1.684a1 1 0 01.95-.69H23v-4h-1.061a1 1 0 01-.95-.69l-.529-1.684A1 1 0 0019.5 6h-2.811a1 1 0 01-.95-.69l-.529-1.684A1 1 0 0014.25 3h-4.5z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </a>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex flex-col flex-1">
            {/* Header */}
            <header className="z-10 py-4 shadow-xs">
              <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                {/* Mobile hamburger */}
                <button className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    ></path>
                  </svg>
                </button>

                {/* Avatar list */}
                <div className="flex justify-between">
                  <ul className="flex items-center flex-shrink-0 space-x-6">
                    <li className="relative">
                      <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg focus:shadow-outline-purple focus:outline-none">
                        <img
                          className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0"
                          src="https://picsum.photos/200/200?i=203"
                          alt=""
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                    <li className="relative">
                      <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg focus:shadow-outline-purple focus:outline-none">
                        <img
                          className="object-cover w-10 h-10 rounded-full hover-image-2 flex-shrink-0"
                          src="https://picsum.photos/200/200?i=201"
                          alt=""
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                    <li className="relative">
                      <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg focus:shadow-outline-purple focus:outline-none">
                        <img
                          className="object-cover w-10 h-10 rounded-full hover-image-3 flex-shrink-0"
                          src="https://picsum.photos/200/200?i=202"
                          alt=""
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                    <li className="relative">
                      <button className="align-middle rounded-full border-2 border-gray-300 shadow-lg focus:shadow-outline-purple focus:outline-none">
                        <img
                          className="object-cover w-10 h-10 rounded-full hover-image-4 flex-shrink-0"
                          src="https://picsum.photos/200/200?i=204"
                          alt=""
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </header>

            {/* Main body */}
            <main className="h-full pb-16 overflow-y-auto">
              {/* ✅ You can insert your forms, posts, comments here */}

              {/* --- Post Form --- */}
              <div className="w-full max-w-3xl mx-auto mt-6">
                <form className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-6">
                  <textarea
                    className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="3"
                    placeholder="What's on your mind?"
                  ></textarea>
                  <div className="flex justify-between items-center mt-3">
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                    >
                      Attach file
                    </label>
                    <input id="file-upload" type="file" className="hidden" />
                    <button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                    >
                      Post
                    </button>
                  </div>
                </form>
              </div>

              {/* --- Posts List --- */}
              <div className="w-full max-w-3xl mx-auto space-y-6">
                {/* Single Post */}
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                  {/* Post Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://picsum.photos/200/200?i=205"
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                        John Doe
                      </h4>
                      <p className="text-xs text-gray-500">2 hrs ago</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-gray-700 dark:text-gray-200 mb-3">
                    Just finished my new project 🚀 Check it out!
                  </p>
                  <img
                    src="https://picsum.photos/600/300"
                    alt="post"
                    className="rounded-lg mb-3"
                  />

                  {/* Post Actions */}
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <button className="hover:text-indigo-600">Like</button>
                    <button className="hover:text-indigo-600">Comment</button>
                    <button className="hover:text-indigo-600">Share</button>
                  </div>

                  {/* Comments */}
                  <div className="mt-4 space-y-3">
                    {/* Single Comment */}
                    <div className="flex items-start space-x-2">
                      <img
                        src="https://picsum.photos/200/200?i=210"
                        alt="comment profile"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg w-full">
                        <p className="text-sm font-semibold text-gray-800 dark:text-white">
                          Jane Smith
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-200">
                          This looks amazing 👏
                        </p>
                      </div>
                    </div>

                    {/* Add Comment */}
                    <div className="flex items-center mt-2">
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        className="flex-1 px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg text-sm">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
                {/* Repeat more posts if needed */}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
