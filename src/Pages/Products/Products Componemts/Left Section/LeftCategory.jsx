import React, { useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const LeftCategory = ({
  productCategories,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam);
      if (!selectedCategories.includes(decodedCategory)) {
        setSelectedCategories([...selectedCategories, decodedCategory]);
      }
    } else {
      // If no category parameter, clear all selections (showing all products)
      setSelectedCategories([]);
    }
  }, [categoryParam]);

  const handleCheckboxChange = (categoryName) => {
    if (categoryName === "All") {
      // Clear all selections when "All" is clicked
      setSelectedCategories([]);
    } else if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== categoryName)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  return (
    <div className="lg:sticky lg:top-20 lg:z-10">
      <div className="relative xl:mb-8">
        <input
          className="hidden lg:block xl:block w-full pl-4 pr-10 py-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1198ad] focus:border-transparent transition-all duration-200"
          type="text"
          placeholder="Search"
        />
        <IoSearchSharp className="hidden lg:block xl:block absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer hover:text-[#1198ad] transition-colors duration-200" />
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <h3 className="text-lg font-semibold text-gray-800 bg-gray-50 px-6 py-4 border-b border-gray-200">
          Categories
        </h3>
        <div className="grid grid-cols-3 lg:grid-cols-1 xl:gap-2 p-4">
          {/* "All" category option */}
          <div
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1198ad] px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            onClick={() => handleCheckboxChange("All")}
          >
            <input
              type="checkbox"
              checked={selectedCategories.length === 0}
              onChange={() => handleCheckboxChange("All")}
              className="w-4 h-4 text-[#1198ad] border-gray-300 rounded focus:ring-[#1198ad] cursor-pointer"
            />
            <span>All</span>
          </div>

          {/* Other categories */}
          {productCategories
            .filter((category) => category.name !== "All")
            .map((category) => (
              <div
                key={category.id}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1198ad] px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                onClick={() => handleCheckboxChange(category.name)}
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCheckboxChange(category.name)}
                  className="w-4 h-4 text-[#1198ad] border-gray-300 rounded focus:ring-[#1198ad] cursor-pointer"
                />
                <span>{category.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftCategory;
