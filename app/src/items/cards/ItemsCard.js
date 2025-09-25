"use client";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

export default function ProductCard({ product }) {
  const [favorite, setFavorite] = useState(false);

  const {
    discount,
    image,
    title,
    category,
    rating,
    reviews,
    price,
    oldPrice,
    colors = [],
  } = product;

  const toggleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <div className="relative rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white h-[420px] flex flex-col">
      <div className="relative w-full flex justify-between items-center">
        {discount ? (
          <span className="top-2 left-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-lg">
            {discount}
          </span>
        ) : (
          <div></div>
        )}
        <div className="flex items-center gap-2 -top-0 right-4 text-2xl cursor-pointer">
          <div onClick={toggleFavorite}>
            {favorite ? (
              <FaHeart className="text-black" />
            ) : (
              <FaRegHeart className="text-[#BE968E]" />
            )}
          </div>
          <CiShoppingCart className="text-4xl text-[#BE968E]" />
        </div>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />
      <div className="text-sm text-black w-full flex items-center justify-between">
        {category}
        <div className="flex items-center space-x-2 font-sans text-lg">
          <div className="text-[#BE968E] opacity-70">
            <FaStar />
          </div>
          <span className="font-semibold text-gray-900">4.5</span>
          <span className="text-gray-600 font-normal">(2910)</span>
        </div>
      </div>
      <h3 className="text-base font-medium line-clamp-2 mt-1">{title}</h3>

      <div className="flex items-center gap-1 mt-2 text-sm">
        <FaStar className="text-black" />
        <span>{rating}</span>
        <span className="text-black">({reviews})</span>
      </div>

      <div className="flex items-center justify-between w-full mt-2">
        <div className=" flex items-center gap-2">
          <span className="text-lg font-semibold">AED {price}</span>
          {oldPrice && (
            <span className="text-[#8A8A8A] line-through">AED {oldPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {colors.map((c, i) => (
            <span
              key={i}
              className="w-5 h-5 rounded-full border"
              style={{ backgroundColor: c }}
            ></span>
          ))}
          <span className="text-black text-[18px]">+2</span>
        </div>
      </div>
    </div>
  );
}
