import React from "react";
import { useNavigate } from "react-router-dom";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Categories = ({ categories }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "All") {
      navigate("/products");
    } else {
      navigate(`/products?category=${encodeURIComponent(categoryName)}`);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-lg p-2 text-[#1198ad] cursor-pointer transform transition-transform hover:scale-105"
            style={{ boxShadow: `0 2px 4px ${getRandomColor()}` }}
            onClick={() => handleCategoryClick(category.name)}
          >
            {/* flex items-center gap-2 */}
            {/* <img
              src={category.image}
              alt={category.name}
              className="rounded-lg"
            /> */}
            <h2 className="text-lg font-semibold text-center">{category.name}</h2>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Categories;
