"use client";
import React, { useRef } from "react";
import ProductCard from "../items/cards/ItemsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function SimilarItems() {
  const swiperRef = useRef(null);

  const products = [
    {
      id: 1,
      image: "/man3.svg",
      title: "J.VER Women's Dress Shirts Solid Long ",
      category: "Dresses",
      price: 900,
      oldPrice: 1300,
      rating: 4.5,
      reviews: 290,
      colors: ["#000", "#BE968E"],
      discount: "25% OFF",
    },
    {
      id: 2,
      image: "/man3.svg",
      title: "Urban Jacket Premium Edition",
      category: "Jackets",
      price: 750,
      oldPrice: 1050,
      rating: 4.7,
      reviews: 180,
      colors: ["#333", "#333333"],
      discount: null,
    },
    {
      id: 3,
      image: "/man3.svg",
      title: "Galaxy Fit T-Shirt",
      category: "T-Shirts",
      price: 120,
      oldPrice: 180,
      rating: 4.2,
      reviews: 500,
      colors: ["#222", "#E8E8E8"],
      discount: "15% OFF",
    },
    {
      id: 4,
      image: "/man3.svg",
      title: "MateShirt Pro",
      category: "Shirts",
      price: 300,
      oldPrice: null,
      rating: 4.6,
      reviews: 230,
      colors: ["#444", "#BE968E"],
      discount: null,
    },
  ];

  return (
    <div className="w-full mx-auto p-6 mt-10">
      {/* Section Title */}
      <div className="text-2xl font-semibold mb-8 relative inline-block">
        Similar Items
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#d2a49d] rounded-full"></span>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-16"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex items-stretch">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Buttons Under Swiper */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-6 py-6 bg-gray-200 rounded-full hover:bg-gray-300 transition cursor-pointer text-2xl"
        >
          <SlArrowLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-6 py-6 bg-[#BE968E] rounded-full hover:bg-[#d9b8b1] cursor-pointer text-white transition text-2xl"
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
}
