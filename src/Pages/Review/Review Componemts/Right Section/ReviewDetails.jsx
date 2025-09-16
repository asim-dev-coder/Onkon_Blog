import React from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewDetails = ({ blogs, selectedCategories }) => {
  const filteredBlogs =
    selectedCategories.length > 0
      ? blogs.filter((blog) => selectedCategories.includes(blog.category))
      : blogs;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mb-3">
      {filteredBlogs.map((blog) => (
        <div
          key={blog.id}
          className="border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white"
        >
          <Link to={`/review/${blog.id}`}>
            <div className="relative w-full h-48">
              <img
                className="w-full h-full object-cover"
                src={blog.image}
                alt={blog.title}
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <span className="text-sm text-gray-500">
                {blog.date} - {blog.category}
              </span>
              <h2 className="text-lg font-semibold text-gray-900">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm">{blog.subtitle}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                <div className="flex gap-2">
                  <span className="flex items-center gap-1">
                    <FaRegComment /> {blog.comments} Comments
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegHeart /> {blog.likes} Likes
                  </span>
                </div>
                <button className="text-purple-500 hover:underline text-sm font-medium cursor-pointer">
                 View More »
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ReviewDetails;
