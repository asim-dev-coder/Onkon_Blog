import React from "react";
import PageHeader from "../../Components/PageHeader";
import HeadDetails from "../../Components/HeadDetails";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


const YourCarts = () => {
  const { cartItems, setCartItems } = useCart([
    {
      id: 1,
      title: "BVLGARI BLV POUR HOMME",
      image:
        "https://perfume-bd.com/wp-content/uploads/2021/04/Untitled-design-32-23.png",
      subtitle: "Best for Party.",
      price: 11860,
      discountPrice: 10860,
      category: "Male",
      quantity: 1,
    },
    {
      id: 2,
      title: "GUCCI INTENSE OUD",
      image:
        "https://perfume-bd.com/wp-content/uploads/2021/04/25-1-600x600.jpg",
      subtitle: "Elegant Choice.",
      price: 17950,
      discountPrice: 17550,
      category: "WOMEN",
      quantity: 2,
    },
    {
      id: 4,
      title: "BVLGARI MAN IN BLACK",
      image:
        "https://perfume-bd.com/wp-content/uploads/2022/02/BLVGARI-MAN-IN-BLACK-3-300x300.png",
      subtitle: "Long Lasting Fragrance",
      price: 14199,
      discountPrice: 12900,
      category: "Male",
      quantity: 1,
    },
  ]);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.discountPrice || item.price) * item.quantity;
  }, 0);

  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
      <PageHeader page={"Your Cart"} />
      <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
        <HeadDetails
          title={"Your"}
          colortitle={"Cart"}
          subtitle={"Your product wish is our first priority."}
        />
        <div className="mb-10">
          <div className="space-y-6 text-gray-600">
            {cartItems.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-accent text-white hidden sm:block"
                    />
                    <img
                      className="size-16 sm:size-20 object-cover rounded-md"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="flex-1 sm:flex-none">
                      <div className="font-medium text-sm sm:text-base">
                        {item.title}
                      </div>
                      <div className="text-xs uppercase font-semibold opacity-60">
                        {item.category}
                      </div>
                      <div className="text-xs sm:text-sm opacity-75 mt-1">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full sm:w-auto sm:gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="text-sm bg-gray-200 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-300"
                        onClick={() => handleDecrease(item.id)}
                      >
                        -
                      </button>
                      <span className="min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="text-sm bg-gray-200 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-300"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="font-medium text-right sm:w-24 text-[15px]">
                      {(
                        (item.discountPrice || item.price) * item.quantity
                      ).toFixed(2)}{" "}
                      BDT
                      {item.discountPrice && (
                        <div className="text-xs line-through text-gray-500">
                          {(item.price * item.quantity).toFixed(2)} BDT
                        </div>
                      )}
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700 cursor-pointer ml-2 sm:ml-0"
                      onClick={() => handleRemove(item.id)}
                    >
                      <RiDeleteBin6Line size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="font-medium text-base sm:text-lg">
                  Total (
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                  items)
                </div>
                <div className="font-bold text-lg sm:text-xl">
                  {totalPrice.toFixed(2)} BDT
                </div>
              </div>
              <Link to="/login">
                <button className="mt-4 w-full bg-sky-500 hover:bg-[#426fdf] text-white py-2 rounded-md  transition-colors cursor-pointer">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCarts;
