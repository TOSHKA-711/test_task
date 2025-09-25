"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAlert } from "../../items/hooks/useAlert";
import { useRouter } from "next/navigation";
import { useAxios } from "../../items/hooks/useAxios";
import { ToastContainer } from "react-toastify";

const VerificationPage = () => {
  const [code, setCode] = useState("");
  const { showSuccess, showError } = useAlert();
  const router = useRouter();

  // get token
  let token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  // setup axios hook
  const { refetch, loading } = useAxios({
    url: "https://tinytales.trendline.marketing/api/auth/verify-email",
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    autoFetch: false,
  });

    const { refetch : refetchResend } = useAxios({
    url: "https://tinytales.trendline.marketing/api/auth/verify-email/resend-code",
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    autoFetch: false,
  });

  // handle verify API call
  const handleVerify = async () => {
    if (code.length !== 6) {
      showError("Please enter the 6-digit code.");
      return;
    }

    try {
      const res = await refetch({ code });
      showSuccess(res?.message || "Code verified successfully!");
      router.push("/src/dashboard");
    } catch (error) {
      console.error("verify error:", error?.response?.data);
      showError(
        error?.response?.data?.message || "Verification failed. Try again."
      );
    }
  };

  // resend code
  const handleResend = async () => {
    try {
      const res = await refetchResend();
      showSuccess(res?.message || "Verification code resent!");
    } catch (error) {
      console.error("resend error:", error?.response?.data);
      showError(error?.response?.data?.message||"Could not resend code. Try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-screen flex items-center justify-center relative max-sm:px-4"
        style={{ background: "linear-gradient(to left, #EDF4F1, #E3EBF5)" }}
      >
        <Image
          src="/logo1.svg"
          alt="logo"
          width={70}
          height={100}
          className="absolute top-4 left-5"
        />

        {/* Card */}
        <div
          className="bg-white flex flex-col items-center px-8 py-8 gap-6 min-w-[400px] rounded-lg max-sm:min-w-[320px]"
          style={{ boxShadow: "0px 3.48px 3.48px 0px #00000040" }}
        >
          <span className="flex flex-col items-center gap-1">
            <h2 className="text-[#0E0E0E] font-semibold text-xl">
              Verification
            </h2>
            <p className="text-[13px] text-zinc-600">
              Enter the 6-digit code sent to your email/phone
            </p>
          </span>

          {/* Input */}
          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border-2 border-[#BE968E] text-center text-lg tracking-widest rounded-2xl px-4 py-3 w-full outline-none"
            placeholder="______"
          />

          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            disabled={loading}
            className="bg-[#BE968E] text-white w-full p-2 rounded-lg cursor-pointer mt-2 disabled:opacity-50"
            onClick={handleVerify}
          >
            {loading ? "Verifying..." : "Verify"}
          </motion.button>

          {/* Resend */}
          <span className="text-[13px] text-zinc-600 mt-2">
            Didn’t get a code?{" "}
            <button
              onClick={handleResend}
              className="text-[#BE968E] font-semibold underline ml-1 cursor-pointer"
              type="button"
            >
              Resend
            </button>
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default VerificationPage;
