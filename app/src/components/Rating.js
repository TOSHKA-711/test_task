import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "@mui/material";

const reviewsData = [
  {
    name: "Alex Daewn",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    time: "4 months ago",
  },
  {
    name: "Alex Daewn",
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    time: "4 months ago",
  },
  {
    name: "Alex Daewn",
    rating: 3,
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    time: "4 months ago",
  },
  {
    name: "Alex Daewn",
    rating: 2,
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    time: "4 months ago",
  },
];

export default function Reviews() {
  const ratingStats = [
    { stars: 5, percent: 67 },
    { stars: 4, percent: 15 },
    { stars: 3, percent: 6 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 9 },
  ];

  return (
    <div className="w-full mx-auto p-6 mt-10">
      {/* Title */}
      <div className="text-2xl font-semibold mb-4 relative">
        Rating & Reviews
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#d2a49d] rounded-full"></span>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start gap-10">
        {/* Rating Overview */}
        <div className="flex gap-2 items-end">
          <span className="text-6xl md:text-8xl font-bold">4,5</span>
          <span className="text-[18px] md:text-[22px] text-gray-500">/5</span>
        </div>

        {/* Rating Bars */}
        <div className="w-[50rem] max-lg:max-w-xl max-md:max-w-md max-sm:w-[18rem] ">
          {ratingStats.map((item) => (
            <div
              key={item.stars}
              className="flex items-center gap-2 mb-2"
            >
              <FaStar className="text-[#d2a49d]" />
              <span>{item.stars}</span>
              <div className="flex-1 bg-gray-200 rounded h-2 overflow-hidden">
                <div
                  className="bg-[#d2a49d] h-2"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <span className="text-gray-500">%{item.percent}</span>
            </div>
          ))}
        </div>

        {/* Total Reviews */}
        <div className="flex  flex-col items-center">
          <span className="text-lg md:text-xl text-gray-600">Total Reviews</span>
          <span className="text-3xl md:text-4xl font-bold">3.0K</span>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#d2a49d",
              ":hover": { backgroundColor: "#b4847e" },
              borderRadius: "12px",
            }}
          >
            Add Comment
          </Button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="mt-8 space-y-4 w-full">
        {reviewsData.map((review, index) => (
          <div key={index}>
            <div className="rounded-lg p-4 flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  {review.name}
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < review.rating ? "text-[#d2a49d]" : "text-gray-300"
                        }
                      />
                    ))}
                  </span>
                </h3>
                <p className="text-gray-600 mt-2">{review.comment}</p>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap">
                {review.time}
              </span>
            </div>
            <hr className="my-4 border-t border-gray-200 w-full" />
          </div>
        ))}

        <button className="mx-auto block px-6 py-2 bg-[#DFDFDF66] text-[#d2a49d] rounded-lg cursor-pointer hover:bg-[#d2a49d] hover:text-white transition">
          View More Comments
        </button>
      </div>
    </div>
  );
}
