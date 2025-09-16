import React from "react";
import ReviewCart from "./Review Components/ReviewCart";
import { FaAnglesRight } from "react-icons/fa6";

const Review = ({blogs}) => {
  
  return (
    <>
      <div>
        <div className="my-10">
          <div>
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-2xl font-bold text-gray-700">
                  Latest <span class="text-[#1198ad]">Review</span>
                </h2>
                <p class="text-sm text-gray-500 mt-2">
                  View Riview from the Buyers.
                </p>
              </div>
              <button className="text-md font-medium text-gray-400  text-left cursor-pointer">
                All Reviews
                <FaAnglesRight className="inline-block ml-2" />
              </button>
            </div>
          </div>
          <ReviewCart blogs={blogs} />
        </div>
      </div>
    </>
  );
};

export default Review;
