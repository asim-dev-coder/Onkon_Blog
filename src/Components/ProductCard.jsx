import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCard = ({ key, image, title, category, price, productId }) => {
  return (
    <>
      <Link to={`/products/${productId}`}>
        <div className="productCard p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-4 relative">
            <img
              src={image}
              alt={title}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex flex-col gap-[2px]">
              <h3 className="text-lg font-semibold text-gray-600 truncate">
                {title}
              </h3>
              <p className="text-sm text-gray-500">{category}</p>
              <div className="flex items-center gap-2 text-gray-600">
                <p className="text-base font-bold"> {price} M BDT</p>
              </div>
            </div>
            <button className="p-1 rounded-sm border border-gray-400 bg-white cursor-pointer text-yellow-500 transition-colors duration-300 opacity-0 absolute mt-[38px]">
              <FaRegStar className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
