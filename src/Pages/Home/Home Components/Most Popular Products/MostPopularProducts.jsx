import React, { useEffect, useState } from "react";
import NewArrivalProducts from "./Most Popular Products Components/NewArrivalProducts";
import TopSellingProducts from "./Most Popular Products Components/TopSellingProducts";
import PopularProducts from "./Most Popular Products Components/PopularProducts";

const MostPopularProducts = ({
  trendingProducts,
  topSellingProducts,
  topRatedProducts,
}) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          <NewArrivalProducts trendingProducts={trendingProducts} />
          <PopularProducts topRatedProducts={topRatedProducts} />
          <TopSellingProducts topSellingProducts={topSellingProducts} />
        </div>
      </div>
    </>
  );
};

export default MostPopularProducts;
