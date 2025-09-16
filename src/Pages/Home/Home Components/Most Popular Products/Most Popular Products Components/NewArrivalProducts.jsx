import React from "react";
import ProductCard from "../../../../../Components/ProductCard";


const NewArrivalProducts = ({ trendingProducts }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1198ad]">
              New Arrival
            </h2>
          </div>
          <div className="flex flex-col gap-2 xl:grid xl:grid-cols- overflow-scroll h-122">
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

export default NewArrivalProducts;
