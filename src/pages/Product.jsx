import React from "react";
import { motion } from "framer-motion";
import FoodCart from "../components/food-section/FoodCart";

const Product = () => {
  return (
    <motion.div
      className="w-full h-full text-center p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Our Menu</h1>

      <FoodCart />
    </motion.div>
  );
};

export default Product;
