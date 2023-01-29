import React from "react";
import CustomerCard from "./CustomerCard";
import { reviewList } from "../../data";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Customer = () => {
  const reviews = reviewList;
  console.log(reviews)

  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true, 
    
  };
  return (
    <div className=" w-full h-full p-6 my-8">
        <Slider {...settings}>
        <CustomerCard
          img={reviews[0].img}
          name={reviews[0].name}
          review={reviews[0].desc}
          date={reviews[0].date}
          rating={reviews[0].rating}
        />
        <CustomerCard
          img={reviews[1].img}
          name={reviews[1].name}
          review={reviews[1].desc}
          date={reviews[1].date}
          rating={reviews[1].rating}
        />
        <CustomerCard
          img={reviews[2].img}
          name={reviews[2].name}
          review={reviews[2].desc}
          date={reviews[2].date}
          rating={reviews[2].rating}
        />
        </Slider>
    </div>
  );
};

export default Customer;
