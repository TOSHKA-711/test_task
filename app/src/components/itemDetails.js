"use client";
import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react";

// MUI
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function ItemDetails() {
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState("Cotton");
  const [size, setSize] = useState("2XL");

  return (
    <div className="w-full mt-10 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Image Gallery */}
      <div>
        <div className="rounded-2xl overflow-hidden shadow-sm flex justify-center">
          <Image
            src="/man2.svg"
            alt="Main Product"
            width={350}
            height={300}
            className="object-contain max-md:w-72"
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 mt-4">
          <Image
            src="/man2.svg"
            alt="White"
            width={40}
            height={40}
            className="w-20 h-20 border rounded-lg cursor-pointer object-cover"
          />
          <Image
            src="/man2.svg"
            alt="Red"
            width={40}
            height={40}
            className="w-20 h-20 border rounded-lg cursor-pointer object-cover"
          />
          <div className="w-20 h-20 flex items-center justify-center border rounded-lg  text-white cursor-pointer relative">
            <Image
              src="/man2.svg"
              alt="Red"
              width={40}
              height={40}
              className="w-full h-20 border rounded-lg cursor-pointer object-cover"
            />
            <div className="absolute bg-black top-0 left-0 h-full w-full opacity-70 z-10 flex items-center justify-center text-[20px]">
              +2
            </div>
          </div>
        </div>
      </div>

      {/* Right: Details */}
      <div className="relative">
        <span className="text-[16px] px-3 py-1 border-[#BE968E] border-2 text-[#BE968E] rounded-full">
          T-Shirt
        </span>
        <span className="flex items-center gap-3 absolute right-3 top-0 ">
          <ShoppingCart size={30} color="#BE968E" />
          <Heart size={30} color="#BE968E" />
        </span>
        <h1 className="text-2xl font-semibold mt-7">
          J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
        </h1>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-2xl font-bold text-gray-900">$300.00</span>
          <span className="text-lg text-gray-400 line-through">$360.00</span>
        </div>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit, consectetur adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet.
        </p>
        <hr className="my-4 border-t border-gray-200" />
        {/* Type + Size with MUI */}
        <div className="flex flex-col gap-4 mt-6">
          <FormControl
            sx={{
              width: "48%",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
                "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="Cotton">Cotton</MenuItem>
              <MenuItem value="Polyester">Polyester</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{
              width: "48%",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
                "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <InputLabel id="size-label">Size</InputLabel>
            <Select
              labelId="size-label"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <MenuItem value="2XL">2XL</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
              <MenuItem value="L">L</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* Colors */}
        <div className="mt-6">
          <h3 className="mb-2 font-medium">Colors</h3>
          <div className="flex gap-4">
            <div className="w-15 h-15 max-sm:h-12 max-sm:w-12 rounded-full bg-red-500 cursor-pointer border-[12px] border-[#e9f2f7]"></div>

            <div className="w-15 h-15 max-sm:h-12 max-sm:w-12 rounded-full bg-blue-200  border-[12px] border-[#e9f2f7] cursor-pointer"></div>
            <div className="w-15 h-15 max-sm:h-12 max-sm:w-12 rounded-full bg-yellow-300 border-[12px] border-[#e9f2f7] cursor-pointer"></div>
            <div className="w-15 h-15 max-sm:h-12 max-sm:w-12 rounded-full bg-blue-400 border-[12px] border-[#e9f2f7] cursor-pointer"></div>
            <div className="w-15 h-15 max-sm:h-12 max-sm:w-12 rounded-full bg-gray-500 border-[12px] border-[#e9f2f7] cursor-pointer"></div>
          </div>
          {/* <span className="text-sm text-gray-600 block mt-1">Blue</span> */}
        </div>
        {/* Quantity + Price */}
        <div className="flex items-center text-gray-800 mt-4">
          <span className="text-xl font-semibold">Quantity</span>
          <span className="text-gray-500 ml-2 text-lg">
            ($300.00 for Piece)
          </span>
        </div>
        {/* Quantity Selector  */}
        <div className="flex items-center justify-between gap-6 mt-6 max-lg:flex-col">
          <div className="flex items-center gap-6">
            <div className="flex items-center bg-[#dfdfdf] rounded-lg p-1.5">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2"
                type="button"
              >
                <Minus
                  size={30}
                  className="bg-white rounded-lg cursor-pointer p-1"
                />
              </button>
              <span className="px-4 text-2xl">
                {quantity.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2"
                type="button"
              >
                <Plus
                  size={30}
                  className="bg-white rounded-lg cursor-pointer p-1"
                />
              </button>
            </div>
            <span className="text-[25px]">${(300 * quantity).toFixed(2)}</span>
          </div>

          {/* Add to Cart */}
          <button className="py-3 px-9 self-end flex items-center justify-center gap-2 bg-[#BE968E] hover:bg-[#d9b5ae] cursor-pointer transition text-white rounded-lg max-lg:w-full">
            Add to Cart
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
