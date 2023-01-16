import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ReviewCard = ({ data }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="transition-all delay-150 duration-150 flex text-black flex-col md:flex-row items-center justify-start gap-3 rounded-xl p-3 shadow-lg shadow-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          className="w-full basis-1/3"
          initial={{ width: "0" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
          exit={{ x: window.innerWidth }}
        >
          <img
            src={data.img}
            alt=""
            className="w-40 md:w-60 mx-auto rounded-full"
          />
          <h1 className="text-2xl">{data.name}</h1>
        </div>

        <div className="w-full basis-2/3 px-4">
          <p className="text-sm">{data.date}</p>
          {data.rating}
          <p className="text-[#5a616c]">{data.desc}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReviewCard;
