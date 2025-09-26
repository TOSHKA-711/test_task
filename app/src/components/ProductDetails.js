import React from "react";

export default function ProductDetails() {
  return (
    <div
      className="product-details w-full flex items-center justify-center relative text-center"
      style={{
        backgroundImage: "url(/p-d-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "30vh",
      }}
    >
      <span
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          text-3xl sm:text-5xl md:text-7xl font-bold 
          select-none pointer-events-none w-full
        "
        style={{
          letterSpacing: 2,
          color: "transparent",
          WebkitTextStroke: "2px #ddd",
        }}
      >
        Product Details
      </span>

      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold z-10 text-black">
        Product Details
      </h1>
    </div>
  );
}
