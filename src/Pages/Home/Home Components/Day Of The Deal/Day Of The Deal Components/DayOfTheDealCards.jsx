import React, { useEffect, useState } from "react";
import CardDesign from "../../../../../Components/CardDesign";

const DayOfTheDealCards = ({ selectedCategory }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        let newArrivale = data.filter(
          (product) => product.productDisplayCategory === "Deal"
        );
        setAllProducts(newArrivale);
        setFilteredProducts(newArrivale);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, allProducts]);

  return (
    <>
      <div>
        {filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center h-48 text-gray-500 text-lg font-medium">
            No products found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
            {filteredProducts.map((product) => (
              <CardDesign
                key={product.id}
                productId={product.id}
                title={product.title}
                image={product.image}
                category={product.category}
                rating={product.rating}
                price={product.price}
                quantity={product.quantity}
                review={product.review}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DayOfTheDealCards;
