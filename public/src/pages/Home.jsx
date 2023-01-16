import React from "react";
import { Link } from "react-router-dom";
import Bestproducts from "../components/Bestproducts";
import Hero from "../components/Hero";
import Making from "../components/Making";
import Review from "../components/review/Review";
import Wine from "../components/wine/Wine";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className="w-full h-[100%]"
      initial={{ width: "0" }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
      exit={{ x: window.innerWidth }}
    >
      {/* background image and title cards */}
      <div className="w-full h-screen relative bg-home bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="w-full h-full absolute z-10 text-white flex flex-col items-center justify-center text-center gap-6 bg-black/50">
          <div className="font-bold text-4xl lg:text-6xl">
            Try Best Taste Of MOMO
          </div>
          <div className="font-bold text-4xl lg:text-6xl">
            With Extra Cheese And Spicy
          </div>
          <button className="w-[50%] md:w-[30%] font-bold border-4 py-3 transition-colors hover:bg-[#5a616c] active:shadow-white active:shadow-inner">
            <Link to={"/product"}>Order Now</Link>
          </button>
        </div>
        {/* <img src="./images/home-bg.jpg" alt=""  className="w-full h-full object-cover fixed"/> */}
      </div>

      <Hero />

      {/* making section */}
      <Making />

      {/* best products */}
      <Bestproducts />

      {/* wine section */}
      <Wine />

      {/* Reviews */}
      <Review />
    </motion.div>
  );
};

export default Home;
