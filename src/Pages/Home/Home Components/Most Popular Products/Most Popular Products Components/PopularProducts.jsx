import React from "react";
import ProductCard from "../../../../../Components/ProductCard";

const PopularProducts = ({ topRatedProducts }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1198ad]">
              Popular</h2>
          </div>
          <div className="flex flex-col gap-2 overflow-scroll h-122">
            {topRatedProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
