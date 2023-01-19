import React from "react";
import { motion } from "framer-motion";
import offer from "../assets/offer.jpg";

const Campaign = () => {
  return (
    <motion.div
      className="w-full h-full bg-gray-700 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[60%] mx-auto px-6 py-8 relative">
        <h2 className="text-center font-opensans font-bold text-3xl my-4">
          Chicken Chilly Roast
        </h2>
        <img
          src={offer}
          alt=""
          className="w-full transition-transform hover:scale-105 cursor-pointer"
        />
      </div>
    </motion.div>
  );
};

export default Campaign;
