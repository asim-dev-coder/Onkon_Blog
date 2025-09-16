import React, { useEffect, useState } from "react";
import Hero from "./Home Components/Hero";
import AllCategories from "./Home Components/AllCategories/AllCategories";
import MostPopularProducts from "./Home Components/Most Popular Products/MostPopularProducts";
import Review from "./Home Components/Review/Review";
import DayOfTheDeal from "./Home Components/Day Of The Deal/DayOfTheDeal";
import Offer from "./Home Components/Offer";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState([]);

  useEffect(() => {
    fetch("/Product-Data/ProductCategory.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setCategory(data);
      });
  }, []);

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        let trendingProducts = data.filter(
          (product) => product.productDisplayCategory === "New Arrival"
        );
        let topSellingProducts = data.filter(
          (product) => product.productDisplayCategory === "Top-Selling"
        );
        let topRatedProducts = data.filter(
          (product) => product.productDisplayCategory === "Popular"
        );
        setTrendingProducts(trendingProducts);
        setTopSellingProducts(topSellingProducts);
        setTopRatedProducts(topRatedProducts);
      });
  }, []);

  useEffect(() => {
    fetch("/Review-Data/Reviews.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <Hero />
      {/* <AllCategories categories={categories} />
      <DayOfTheDeal category={category} />
      <Offer />
      <MostPopularProducts
        trendingProducts={trendingProducts}
        topSellingProducts={topSellingProducts}
        topRatedProducts={topRatedProducts}
      />
      <Review blogs={blogs} />
      <FAQ /> */}
    </>
  );
};

export default Home;
