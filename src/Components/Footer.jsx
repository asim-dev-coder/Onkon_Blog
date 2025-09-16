import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-600 text-sm">
      <div className="border-y border-gray-200">
        <div className="w-11/12 mx-auto py-6">
          <div className="lg:flex xl:flex justify-between gap-8">
            <div className=" flex flex-col gap-6 w-full md:w-100">
              <div className="flex text-2xl font-semibold">
                <h1 className="text-black caveat text-3xl">Tipu's</h1><span className="text-sky-500 text-3xl caveat">World</span>
              </div>
              <p className="hover:text-[#426fdf] transition">
                Subscribe for Our Newsletter
              </p>
              <div>
                <h4 className="font-semibold text-lg text-gray-700 mb-2">Follow Us</h4>
                <div className="flex gap-4">
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-[#426fdf] transition"
                  >
                    <FaFacebook className="text-xl text-blue-500" />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-[#426fdf] transition"
                  >
                    <FaXTwitter className="text-black text-xl" />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-[#426fdf] transition"
                  >
                    <FaInstagram className="text-xl text-pink-400" />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-[#426fdf] transition"
                  >
                    <FaLinkedin className="text-sky-500 text-xl" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:flex">
              <div className="w-full md:w-50">
                <h3 className="font-semibold text-lg text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Quick Links
                </h3>
                <div className="flex flex-col gap-3">
                  {/* <Link to="/about" className="hover:text-green-500 transition"> */}
                  About us
                  {/* </Link> */}
                  <Link
                    to="/products"
                    className="hover:text-[#426fdf] transition"
                  >
                    Products
                  </Link>
                  {/*to="/offers"*/}<Link className="hover:text-[#426fdf] transition">
                    Offers
                  </Link>
                  <Link className="hover:text-[#426fdf] transition">
                    T&C
                  </Link>
                  {/* <Link to="/review" className="hover:text-green-500 transition"> */}
                  Review
                  {/* </Link> */}
                </div>
              </div>
              <div className="w-full md:w-50">
                <h3 className="font-semibold text-lg text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Customer Service
                </h3>
                <div className="flex flex-col gap-3">
                  <Link to="/contact" className="hover:text-[#426fdf] transition">
                    Contact us
                  </Link>
                  {/*to="/faq"*/}<Link className="hover:text-[#426fdf] transition">
                    FAQs
                  </Link>
                  {/*to="/shipping"*/}<Link
                    className="hover:text-[#426fdf] transition"
                  >
                    Showroom
                  </Link>
                  {/*to="/returns"*/}<Link className="hover:text-[#426fdf] transition">
                    Decant
                  </Link>
                  {/*to="/privacy"*/}<Link className="hover:text-[#426fdf] transition">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:flex">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Contact Us
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <CiLocationOn className="text-[#1198ad] text-xl mt-0.5 " />
                    <p>125 Tejgaon, Dhaka, Bangladesh</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-[#1198ad] text-lg" />
                    <Link
                      to="tel:+8801556440078"
                      className="hover:text-[#426fdf] transition"
                    >
                      +8801556440078
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdMailOutline className="text-[#1198ad] text-lg" />
                    <Link
                      to="mailto:info@grabit.com"
                      className="hover:text-[#426fdf] transition"
                    >
                      asimankon@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-4">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
              <p className="text-xs lg:text-sm text-gray-400">
                Copyright &copy; 2025 all rights reserved. Powered by Assim.
              </p>
              <div>
                <img src="/payment.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
