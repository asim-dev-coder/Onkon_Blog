import React from "react";
import { FaStar } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";

const CardDesign = ({
  productId,
  title,
  image,
  category,
  rating,
  price,
  quantity,
  review,
}) => {
  return (
    <>
      <Link to={`/products/${productId}`}>
        <div className="bg-white shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300">
          <div className="relative h-80 rounded-t-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
            <button className="text-[#426fdf] transition-colors duration-300 opacity-0 absolute">
              <FaRegHeart />
              <IoGitCompareOutline />
            </button>
          </div>
          <div className="py-3 px-3">
            <h2 className="text-base md:text-lg font-bold text-gray-800 truncate">
              {title}
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-base text-[#1198ad]">
                {quantity} ml
              </p>
              <div className="flex items-center">
                <span className="text-yellow-400 flex items-center">
                  <FaStar className="mr-1" />
                  <FaStar className="mr-1" />
                  <FaStar className="mr-1" />
                  <FaStar className="mr-1" />
                  <FaStar className="mr-1 text-gray-300" />
                </span>
                <span className="ml-2 text-gray-600 text-xs md:text-sm">
                  ({rating})
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <MdPreview />
                <span>{review}</span>
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-800">
                {price}{" "} BDT
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="px-4 py-2 bg-gradient-to-b from-sky-500 to-lime-500 text-white rounded-lg hover:from-gray-800 hover:to-black shadow-lg cursor-pointer text-sm">
                <span className="mt-[1px]">View Details</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardDesign;
