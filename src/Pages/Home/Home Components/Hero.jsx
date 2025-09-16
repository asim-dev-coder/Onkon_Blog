import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div class="bg- text-black lg:py-7">
        <div class="container mx-auto flex flex-col-reverse md:flex-row items-center md:my-15">
          <div class="items-center xl:items-start flex flex-col w-full ">
            <h1 class="text-lg lg:text-[22px] tracking-loose font-light">
              Perfume Defines You
            </h1>
            <h2 class="text-5xl lg:text-[60px] parisienne-regular leading-relaxed md:leading-snug my-1.5 bg-gradient-to-r from-teal-400 via-lime-400 to-sky-400 inline-block text-transparent bg-clip-text">
              Essence of Odour
            </h2>
            <p class="text-2xl lg:text-[35px] font-normal text-gray-700 mb-4">
              Explore your Signature Scent
            </p>
            <Link
              to="/products"
              class="bg-gradient-to-r from-teal-500 to-sky-500 hover:bg-[#1198ad] text-white hover:text-white rounded-lg shadow hover:shadow-lg py-2 px-4 border hover:border-transparent text-[18px]"
            >
              Buy Now
            </Link>
          </div>
          <div class="p-2 mt-3 mb-3 md:mb-0 md:mt-0 ml-0 md:ml-12 justify-center">
            <div class="lg:h-48 flex items-center content-center">
              <a href="#_">
                <img
                  src="https://odour-demo.myshopify.com/cdn/shop/files/03_slider-image.png?v=1614298669"
                  class="rounded-xl lg:duration-500 lg:hover:-translate-x-24 lg:h-full lg:w-full object-cover lg:hover:scale-110 transform origin-bottom"
                  alt="#_"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row mx-auto">
        {/* <!--- Starts component -->  */}
        <a href="#_">
          {" "}
          <img
            src="https://darko-theme.myshopify.com/cdn/shop/products/Darko_17_600x.png?v=1630991095"
            class="rounded-xl  lg:-rotate-6 lg:hover:rotate-0 lg:duration-500 lg:hover:-translate-y-4 h-full w-full object-cover lg:hover:scale-150 transform origin-bottom"
            alt="#_"
          />{" "}
        </a>
        <a href="#_">
          <img
            src="https://arrax-preview.myshopify.com/cdn/shop/files/s1-dsdcopy.jpg?v=1741283276&width=2000"
            class="rounded-xl  lg:rotate-5 lg:hover:rotate-0 lg:duration-500 lg:hover:-translate-y-2 h-full w-full object-cover lg:hover:scale-120 transform origin-bottom"
            alt="#_"
          />{" "}
        </a>
        <a href="#_">
          <img
            src="https://elements-resized.envatousercontent.com/elements-cover-images/77f71b70-b575-4931-8ad1-881d22a117e8?w=2038&cf_fit=scale-down&q=85&format=auto&s=51c736496983c5a8a9341e2d50600eb4cd54bedeed8d7026d9666385fe7e3cd6"
            class="rounded-xl  lg:-rotate-6 lg:hover:rotate-0 lg:duration-500 lg:hover:-translate-y-2 h-full w-full object-cover lg:hover:scale-105 transform origin-bottom"
            alt="#_"
          />{" "}
        </a>
      </div>
    </div>
  );
};

export default Hero;
