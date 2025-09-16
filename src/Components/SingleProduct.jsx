import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import PageHeader from "./PageHeader";
import CardDesign from "./CardDesign";
import ProductCard from "./ProductCard";
import HeadDetails from "./HeadDetails";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { cartItems, setCartItems } = useCart();

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    if (!product || quantity === 0) return;

    const existing = cartItems.find((item) => item.id === product.id);

    if (existing) {
      // If already in cart, update quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity } // overwrite with latest chosen quantity
            : item
        )
      );
    } else {
      // If not in cart, add new product
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          title: product.title,
          image: product.image,
          subtitle: product.details?.slice(0, 40) || "", // safe short text
          price: product.price,
          discountPrice: product.discountPrice, // in case it exists in your JSON
          category: product.category,
          quantity: quantity,
        },
      ]);
    }
  };

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        const filterProduct = data.find((prod) => prod.id == id);
        setProduct(filterProduct);
      });
  }, [id]);

  useEffect(() => {
    fetch("/Product-Data/ProductCategory.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => setProductCategory(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    if (product) {
      fetch("/Product-Data/Products.json")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch related products");
          return res.json();
        })
        .then((data) => {
          const filteredRelatedProducts = data.filter(
            (item) =>
              item.category === product.category && item.id !== product.id
          );
          setRelatedProducts(filteredRelatedProducts);
        })
        .catch((error) =>
          console.error("Error fetching related products:", error)
        );
    }
  }, [product]);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
      <PageHeader page={"Product Details"} />
      <div>
        {product ? (
          <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl border border-gray-300 p-6">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full lg:h-[500px] overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <FaRegHeart className="h-6 w-6 text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-300" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.title}
              </h1>
              <p className="text-base text-gray-600 mt-2">{product.status}</p>
              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-2xl lg:text-4xl font-semibold text-gray-900">
                    {product.price} BDT
                  </p>
                  <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-[#426fdf] to-[#1198ad] text-white px-3 py-1 rounded-full">
                    {product.quantity} ml
                  </span>
                </div>
              </div>
              <div className="mt-3 bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">{product.review}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400 flex items-center">
                      <FaStar className="mr-1" />
                      <FaStar className="mr-1" />
                      <FaStar className="mr-1" />
                      <FaStar className="mr-1" />
                      <FaStar className="mr-1 text-gray-300" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {product.details}
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Product Specifications
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium">Brand:</span> {product.brand}
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium">Display Category:</span>{" "}
                    {product.productDisplayCategory}
                  </li>
                </ul>
              </div>
              <div className="mt-8 flex lg:flex-wrap items-center justify-center md:justify-start gap-3 lg:gap-6">
                {product.status === "In Stock" ? (
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors duration-300 cursor-pointer"
                      onClick={() => handleQuantityChange("decrease")}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      className="w-12 text-center focus:outline-none text-gray-600"
                      readOnly
                    />
                    <button
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors duration-300 cursor-pointer"
                      onClick={() => handleQuantityChange("increase")}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg cursor-not-allowed">
                    Subscribe for product stock available notification
                  </button>
                )}
                {product.status === "In Stock" ? (
                  <button
                    className="px-2 text-[15px] lg:text-[16px] lg:px-6 py-2 bg-gradient-to-r from-[#426fdf] to-[#1198ad] font-semibold text-white rounded-lg hover:from-[#1198ad] hover:to-[#426fdf] transition-all duration-300 shadow-lg cursor-pointer w-full sm:w-fit"
                    disabled={quantity === 0}
                    aria-disabled={quantity === 0}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button className="flex items-center justify-center gap-2 px-6 py-2 bg-red-600 font-semibold text-white rounded-lg cursor-not-allowed w-full sm:w-fit">
                    Sorry
                  </button>
                )}
                <Link to="/yourcart">
                  <button className="text-[15px] lg:text-[16px] flex items-center justify-center gap-2 px-2 lg:px-6 py-2 bg-gradient-to-l from-[#426fdf] to-[#1198ad] font-semibold text-white rounded-lg hover:from-[#1198ad] hover:to-[#426fdf] transition-all duration-300 shadow-lg cursor-pointer w-full sm:w-fit">
                    <HiOutlineShoppingCart size={20} />
                    <span> View Cart</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Loading product details...
          </p>
        )}
      </div>
      <div className="mb-17">
        <HeadDetails title={"Related"} colortitle={"Products"} />
        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <CardDesign
                key={relatedProduct.id}
                productId={relatedProduct.id}
                title={relatedProduct.title}
                image={relatedProduct.image}
                category={relatedProduct.category}
                rating={relatedProduct.rating}
                price={relatedProduct.price}
                quantity={relatedProduct.quantity}
                review={relatedProduct.review}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-10">
            No related products found in this category
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;

// : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
//   {relatedProducts.map((relatedProduct) => (
//     <ProductCard
//       key={relatedProduct.id}
//       productId={relatedProduct.id}
//       title={relatedProduct.title}
//       image={relatedProduct.image}
//       category={relatedProduct.category}
//       rating={relatedProduct.rating}
//       price={relatedProduct.price}
//       downpayment={relatedProduct.downpayment}
//       review={relatedProduct.review}
//     />
//   ))}
// </div> )
