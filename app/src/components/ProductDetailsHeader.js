import React from "react";
import Link from "next/link";

export default function ProductDetailsHeader() {
  return (
    <div className="w-full bg-[#DFDFDF66] rounded-2xl">
      <div className="relative z-10 flex flex-col items-start p-3 sm:p-4 md:p-6">
        <nav
          className="text-sm sm:text-base md:text-lg lg:text-[20px] flex flex-wrap items-center"
          aria-label="breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-[#BE968E] transition-colors"
          >
            Home
          </Link>
          <span className="mx-2 text-gray-400">&gt;</span>

          <Link
            href="/our-category"
            className="hover:text-[#BE968E] transition-colors"
          >
            Our Category
          </Link>
          <span className="mx-2 text-gray-400">&gt;</span>

          <span className="font-bold text-black">
            Product Details
          </span>
        </nav>
      </div>
    </div>
  );
}
