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
          </aside>
          {/* Main content */}
          <div className="flex flex-col flex-1">
            {/* Header */}
            <header className="z-10 py-4 shadow-xs">
              <div className="container flex items-center justify-between h-full px-6 mx-auto text-teal-500 dark:text-purple-300">
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
