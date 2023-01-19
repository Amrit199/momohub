import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { lazy } from "react";

const Hero = lazy(() => import("../components/Hero"));
const Making = lazy(() => import("../components/Making"));
const Bestproducts = lazy(() => import("../components/Bestproducts"));
const Wine = lazy(() => import("../components/wine/Wine"));
const Newsletter = lazy(() => import("../components/Newsletter"));
const Customer = lazy(() => import("../components/customers/Customer"));

const Home = () => {
  return (
    <motion.div
      className="w-full h-[100%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
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
      <Customer />

      {/* newsletter */}
      <Newsletter />
    </motion.div>
  );
};

export default Home;
