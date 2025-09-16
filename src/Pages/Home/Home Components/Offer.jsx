import React from "react";

const Offer = () => {
  return (
    <div className="bg-gradient-to-b from-sky-500 rounded-lg">
      <div className="my-16 md:my-20 p-3 flex items-baseline justify-between">
        <div>
          <div className="justify-items-center">
            <img
              className="w-[52px]"
              src="https://sundora.com.bd/static/media/secure_payment_icon.7f877f79.webp"
              alt=""
            />
          </div>
          <h3 className="text-black text-[13px] md:text-lg xl:text-base text-center mt-2">
            SECURE PAYMENT
          </h3>
        </div>
        <div>
          <div className="justify-items-center">
            <img
              className="w-[52px]"
              src="https://sundora.com.bd/static/media/free_shipping_icon.9d28f4b2.webp"
              alt=""
            />
          </div>
          <h3 className="text-black text-[13px] md:text-lg xl:text-base text-center mt-2">
            FREE SHIPPING
          </h3>
        </div>
        <div>
          <div className="justify-items-center">
            <img
              className="w-[52px]"
              src="https://sundora.com.bd/static/media/auth_icon.a7313b89.webp"
              alt=""
            />
          </div>
          <h3 className="text-black text-[13px] md:text-lg xl:text-base text-center mt-2">
            100% AUTHENTIC
          </h3>
        </div>
        <div>
          <div className="justify-items-center">
            <img
              className="w-[52px]"
              src="https://sundora.com.bd/static/media/offical_icon.5d70a065.webp"
              alt=""
            />
          </div>
          <h3 className="text-black text-[13px] md:text-lg xl:text-base text-center mt-2">
            OFFICIAL DISTRIBUTOR
          </h3>
        </div>
        <div>
          <div className="justify-items-center">
            <img
              className="w-[52px]"
              src="https://sundora.com.bd/static/media/time_delivery_icon.20467eca.webp"
              alt=""
            />
          </div>
          <h3 className="text-black text-[13px] md:text-lg xl:text-base text-center mt-2">
            ON TIME DELIVERY
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Offer;
