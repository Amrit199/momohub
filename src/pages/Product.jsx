import React from "react";
import { motion } from "framer-motion";
import { lazy } from "react";

const FoodCart = lazy(() => import("../components/food-section/FoodCart"))

const Product = () => {
  return (
    <motion.div 
      className="w-full h-full text-center"
      initial={{ width: "0" }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
      exit={{ x: window.innerWidth }}
      >
      <h1 className="text-3xl md:text-5xl font-bold font-serif py-3">
        Our Menu
      </h1>
      <FoodCart />
    </motion.div>
  );
};

export default Product;
