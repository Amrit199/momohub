import React from "react";
import { foodItems } from "../../data";

const FilterBtn = ({ menuItems, fliterItem, setItem }) => {

  return (
    <div>
      <h1 className="text-xl font-bold">Filter By</h1>
      <div className="flex flex-wrap justify-center items-center md:gap-3">
        {menuItems.map((Val, id) => (
          <button className="p-2 rounded-lg hover:bg-slate-300" key={id} onClick={() => fliterItem(Val)}>
            {Val}
          </button>
        ))}
        <button onClick={() => setItem(foodItems)} className="p-2 rounded-lg hover:bg-slate-300">All</button>
      </div>
    </div>
  );
};

export default FilterBtn;
