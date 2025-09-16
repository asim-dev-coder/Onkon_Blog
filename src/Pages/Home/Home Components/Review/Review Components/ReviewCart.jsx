import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ReviewCart = ({ blogs }) => {
  return (
    <>
      <div className="mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogs.map((blog) => (
            <div className="bg-white shadow-lg rounded-lg hover:shadow-2xl border border-gray-200">
              {/* <Link to={`/review/${blog.id}`}> */}
                <div className=" h-56">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover object-center rounded-t-lg overflow-hidden"
                  />
                </div>
                <div className="p-4 pt-2 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                    <img
                      src={blog.reviewer}
                      alt="client image"
                      className="w-[20%] md:w-[10%] lg:w-[10%] rounded-full"
                    />
                    <span>{blog.date}</span>
                    <div className="w-1 h-[2px] bg-gray-600"></div>
                    <p className="">{blog.category}</p>
                  </div>
                  <h1 className="text-lg font-semibold text-gray-700 truncate">
                    {blog.title}
                  </h1>
                  <button className="text-sm font-medium text-[#1198ad]  text-left cursor-pointer">
                    Read More
                    <FaAnglesRight className="inline-block ml-2" />
                  </button>
                </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewCart;
