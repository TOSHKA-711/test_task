"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAlert } from "../../items/hooks/useAlert";
import { useAxios } from "../../items/hooks/useAxios";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();
  const { showSuccess, showError } = useAlert();
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile: "",
    mobile_country_code: "",
  });

  // get token
  let token = null;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const { refetch } = useAxios({
    url: "https://tinytales.trendline.marketing/api/auth/register",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    autoFetch: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBackToLogin = () => {
    router.push("/src/Auth/login");
  };

  // handle register API call
  const handleRegister = async () => {
    try {
      const res = await refetch(payload);
      showSuccess(res?.message || "register successful!");

      if (res?.data?.token) {
        localStorage.setItem("token", res.data.token);
        router.push("/src/Auth/verification");
      }
    } catch (error) {
      console.error("register error:", error?.response?.data);
      showError(
        error?.response?.data?.message || "register failed. Please try again."
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="register w-full flex items-center justify-center relative max-sm:px-4 max-sm:min-h-[110vh] max-sm:p-8" 
        style={{ background: "linear-gradient(to left, #EDF4F1, #E3EBF5)" }}
      >
        <Image
          src="/logo1.svg"
          alt="logo"
          width={70}
          height={100}
          className="absolute top-4 left-5"
        />
        <div
          className="card bg-[#fff] flex flex-col items-start pr-6 pl-8 py-8 gap-5 min-w-[450px] rounded-lg max-sm:min-w-[320px] mt-16"
          style={{ boxShadow: "0px 3.48px 3.48px 0px #00000040" }}
        >
          <span className="flex flex-col items-start gap-1">
            <h2 className="text-[#0E0E0E] font-semibold">Register</h2>
            <p className="text-[13px]">Create your account below</p>
          </span>

          {/* Full Name */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Full Name</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#BE968E]">
              <input
                onChange={handleInputChange}
                name="name"
                value={payload.name}
                type="text"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="Enter your full name"
              />
            </span>
          </div>

          {/* Email */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Email</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#BE968E]">
              <input
                onChange={handleInputChange}
                name="email"
                value={payload.email}
                type="email"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="Enter your email"
              />
              <CiMail className="text-[20px] text-zinc-500" />
            </span>
          </div>

          {/* Password */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Password</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#BE968E]">
              <input
                onChange={handleInputChange}
                name="password"
                value={payload.password}
                type="password"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="Enter your password"
              />
              <IoKeyOutline className="text-[20px] text-zinc-500" />
            </span>
          </div>
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Password</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#BE968E]">
              <input
                onChange={handleInputChange}
                name="password_confirmation"
                value={payload.password_confirmation}
                type="password"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="password_confirmation"
              />
              <IoKeyOutline className="text-[20px] text-zinc-500" />
            </span>
          </div>

          {/* mobile Number */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">mobile Number</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#BE968E]">
              <input
                onChange={handleInputChange}
                name="mobile"
                value={payload.mobile}
                type="text"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="Enter your mobile number"
              />
            </span>
          </div>

          {/* Country Code */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Country Code</p>
            <span className="flex items-center border-2 px-3 rounded-2xl w-full border-[#BE968E]">
              <input
                onChange={handleInputChange}
                name="mobile_country_code"
                value={payload.mobile_country_code}
                type="text"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="Enter your country code"
              />
            </span>
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-[#BE968E] text-white self-center w-full p-2 rounded-lg cursor-pointer mt-4"
            onClick={handleRegister}
          >
            Register
          </motion.button>
          <button
            onClick={handleBackToLogin}
            className="text-[#BE968E] font-semibold underline mt-4 self-center cursor-pointer"
            type="button"
          >
            Back to Login
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default RegisterPage;
