import React, { useState } from "react";
import { reviewList } from "../../data";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviews = reviewList;
  const [curImg, setCurImg] = useState(0);
  const len = reviews.length - 1;

  const prev = () => {
    setCurImg(curImg < 1 ? len : curImg - 1);
  };

  const next = () => {
    setCurImg(curImg === len ? 0 : curImg + 1);
  };
  return (
    <div className="w-full h-full md:h-[70vh] font-serif my-4">
      <div className="w-full text-center p-4">
        <h1 className="text-2xl lg:text-4xl font-bold">
          What Our Customers Saying About Us
        </h1>
      </div>
      <div className="w-full h-full px-2 pb-5 flex items-center text-center gap-3">
        <div className="w-full basis-1/4">
          <button
            onClick={prev}
            className="bg-[#5a616c] p-2 text-3xl text-white rounded-full cursor-pointer active:shadow-[#5a616c] active:shadow-lg transition duration-200 ease-in-out"
          >
            &#8592;
          </button>
        </div>

        <ReviewCard data={reviews[curImg]} />
        <div className="w-full basis-1/4">
          <button
            onClick={next}
            className="bg-[#5a616c] p-2 text-3xl text-white rounded-full cursor-pointer active:shadow-[#5a616c] active:shadow-lg transition duration-200 ease-in-out"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
