import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PageHeader = ({ page }) => {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-4 border border-purple-100 rounded-b-md">
        <div>
          <h3 className="text-base text-gray-600 font-semibold">
            {page} Page
          </h3>
        </div>
        <div>
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <Link to="/" className=" cursor-pointer">
              Home
            </Link>
            <FaChevronRight className="text-sky-500" />
            <span className="text-sky-500 flex items-center gap-2 cursor-pointer">
              {page} Page
            </span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
