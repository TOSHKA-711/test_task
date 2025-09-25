import React from "react";
import ProductDetails from "../components/ProductDetails";
import ProductDetailsHeader from "../components/ProductDetailsHeader";
import ItemDetails from "../components/itemDetails";
import Rating from "../components/Rating";
import SimilarItems from "../components/SimilarItems";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-6">
      <ProductDetails />
      <div className="flex flex-col justify-center items-center w-full px-30 max-lg:px-10 max-sm:px-5">
        <ProductDetailsHeader />
        <ItemDetails/>
        <Rating/>
        <SimilarItems/>
      </div>
    </div>
  );
}
