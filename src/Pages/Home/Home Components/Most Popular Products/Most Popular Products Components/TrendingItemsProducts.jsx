import React from "react";
import ProductCard from "../../../../../Components/ProductCard";


const TrendingItemsProducts = ({ trendingProducts }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-purple-500">
              Trending
            </h2>
          </div>
          <div className="flex flex-col gap-2 overflow-scroll h-122">
            {trendingProducts.map((product) => {
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

export default TrendingItemsProducts;
