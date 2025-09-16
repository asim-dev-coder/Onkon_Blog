import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact Us/Contact.jsx";
import Review from "./Pages/Review/Review.jsx";
import YourCarts from "./Pages/Your Cart/YourCarts.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import Products from "./Pages/Products/Products.jsx";
import Wishlist from "./Pages/Wishlist/Wishlist.jsx";
import SingleProduct from "./Components/SingleProduct.jsx";
import SingleReview from "./Components/SingleReview.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import Login from "./Pages/Login/Login.jsx";
import { CartProvider } from "./context/CartContext.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/review",
        element: <Review />,
      },
      {
        path: "/review/:id",
        element: <SingleReview />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/yourcart",
        element: <YourCarts />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);

