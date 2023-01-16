import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="w-full h-full p-2 bg-gray-700 text-white font-playfair"
      initial={{ width: "0" }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
      exit={{ x: window.innerWidth }}
    >
      <div className="w-full h-full p-4 font-opensans">
        <div className="w-full text-center font-bold text-4xl">
          <h1>Contact Us</h1>
        </div>
        <form className="w-[90%] sm:w-[60%] md:w-[50%] xl:w-[35%] mx-auto my-4 text-xl flex flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-2">
            <label>Email Address*</label>
            <input
              type="email"
              className="w-full p-1 border border-black rounded-lg"
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2">
            <label>Mobile Number*</label>
            <input
              type="number"
              className="w-full p-1 border border-black rounded-lg"
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2">
            <label>Subject*</label>
            <input
              type="text"
              className="w-full p-1 border border-black rounded-lg"
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2">
            <label>Description*</label>
            <textarea
              className="w-full p-1 border border-black rounded-lg"
              placeholder="Please enter the details of your request."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-1 border border-black rounded-lg bg-green-700 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
