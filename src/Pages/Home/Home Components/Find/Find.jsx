import React, { useEffect, useState } from "react";
import FindCards from "./Find Components/FindCards";

const Find = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <div>
        <div className="my-16 md:my-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-700">
                  Find <span className="text-purple-500">Models</span>
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  See New Models!
                </p>
              </div>

              <div className="flex flex-wrap gap-2 overflow-hidden">
                {category.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`text-md font-medium ${
                      selectedCategory === cat.name
                        ? "text-white bg-purple-500"
                        : "text-gray-800 bg-gray-100"
                    } px-3 py-1 rounded-md w-fit cursor-pointer`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            <FindCards selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Find;
