import React from "react";
import { lazy } from "react";
import { foodItems } from "../data";

const ItemCard = lazy(() => import("./food-section/ItemCard"));

const Bestproducts = () => {
  const bestProducts = foodItems;
  const Products = bestProducts.filter((momo) => momo.category === "Momo");
  return (
    <div className="w-full h-full md:w-[80%] mx-auto my-8 px-6 py-7 font-serif">
      <div className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto text-center flex flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-bold">Find Best MOMO</h1>
        <p>
          Feel the best and awesome taste with MOMO. There has been various kind
          of MOMO you can eat and feel
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Products.map((item, index) => (
          <ItemCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Bestproducts;
