import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PageHeader from "../../Components/PageHeader";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signup Data:", formData);
  };

  return (
    <div className="lg:p-8 min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-300 to-teal-200">
      <div className="w-10/12 lg:w-7/12 mx-auto p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <PageHeader page={"Sign up"} />
        <div className="flex gap-4">
          <img
            className="hidden lg:block h-[537px] relative overflow-hidden rounded-2xl"
            src="https://rukminim2.flixcart.com/image/704/844/j3lwh3k0/remote-control-toy/w/b/s/alpha-1s-intelligent-humanoid-robotic-ubtech-original-imaeup3ymcwsbjqv.jpeg?q=90&crop=false"
            alt="signupjsx"
          />
          <div className="w-[598px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
              Create an Account
            </h2>
            <p className="text-sm text-center text-gray-500">
              Let's get started with your free account
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm md:text-base text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="input input-bordered w-full bg-gray-50 focus:bg-white focus:outline-none focus:border-[#426fdf]"
                  required
                />
              </div>

              <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm md:text-base text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="input input-bordered w-full bg-gray-50 focus:bg-white focus:outline-none focus:border-[#426fdf]"
                  required
                />
              </div>

              <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <label
                  htmlFor="password"
                  className="block text-xs sm:text-sm md:text-base text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="input input-bordered w-full bg-gray-50 focus:bg-white focus:outline-none focus:border-[#426fdf]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-500 hover:text-[#426fdf] focus:outline-none"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs sm:text-sm md:text-base text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="input input-bordered w-full bg-gray-50 focus:bg-white focus:outline-none focus:border-[#426fdf]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-500 hover:text-[#426fdf] focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-block border-none bg-gradient-to-r from-[#1198ad] to-[#426fdf] text-xs sm:text-sm md:text-base text-white hover:from-[#426fdf] hover:to-[#1198ad]"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center">
              <p className="mt-2 text-base text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-[#426fdf] hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
