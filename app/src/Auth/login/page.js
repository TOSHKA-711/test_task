"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import { IoKeyOutline } from "react-icons/io5";
import { useAlert } from "../../items/hooks/useAlert";
import { useRouter } from "next/navigation";
import { useAxios } from "../../items/hooks/useAxios";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [payload, setPayload] = useState({ email: "", password: "" });
  const { showSuccess, showError } = useAlert();
  const router = useRouter();
  const { refetch } = useAxios({
    url: "https://tinytales.trendline.marketing/api/auth/login",
    method: "POST",
    autoFetch: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //  handle register
  const handleRegister = () => {
    showSuccess("Redirect to register page (not implemented)");
    router.push("/src/Auth/register");
  };

  // handle login API call
  const handleLogin = async () => {
    try {
      const res = await refetch(payload);
      showSuccess(res?.message || "Login successful!");

      if (res?.data?.token) {
        localStorage.setItem("token", res.data.token);
        router.push("/src/dashboard");
      }
    } catch (error) {
      showError(
        error?.response?.data?.message || "Login failed. Please try again."
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
        className="login w-full h-screen flex items-center justify-center relative max-sm:px-4"
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
          className="card bg-[#fff] flex flex-col items-start pr-6 pl-8 py-8 gap-5 min-w-[450px] rounded-lg max-sm:min-w-[320px]"
          style={{ boxShadow: "0px 3.48px 3.48px 0px #00000040" }}
        >
          <span className="flex flex-col items-start gap-1">
            <h2 className="text-[#0E0E0E] font-semibold">Welcome</h2>
            <p className="text-[13px]">Enter your login details below</p>
          </span>

          {/* Email */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Email</p>
            <span className="flex items-center justify-between border-2 px-3 rounded-2xl w-full border-[#BE968E]">
              <input
                onChange={handleInputChange}
                name="email"
                value={payload.email}
                type="text"
                className="border-none outline-none px-3 py-2 w-full"
                placeholder="Enter your email"
              />
              <CiMail className="text-[20px] text-zinc-500" />
            </span>
          </div>

          {/* Password */}
          <div className="input w-full flex flex-col items-start gap-2">
            <p className="font-semibold text-[15px]">Password</p>
            <span className="flex items-center justify-between border-2 px-3 rounded-2xl w-full border-[#BE968E]">
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

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-[#BE968E] text-white self-center w-full p-2 rounded-lg cursor-pointer mt-4"
            onClick={handleLogin}
          >
            Login
          </motion.button>

          {/* Register Option */}
          <div className="w-full flex justify-center mt-2">
            <span className="text-[13px] text-zinc-600">
              Don't have an account?{" "}
              <button
                onClick={handleRegister}
                className="text-[#BE968E] font-semibold underline ml-1 cursor-pointer"
                type="button"
              >
                Register
              </button>
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LoginPage;
