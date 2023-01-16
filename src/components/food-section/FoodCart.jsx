import React, { useState } from "react";
import { lazy } from "react";
import { foodItems } from "../../data";

const FilterBtn = lazy(() => import("./FilterBtn"))
const ItemCard = lazy(() => import("./ItemCard"))

const FoodCart = () => {
  const [item, setItem] = useState(foodItems);
  const menuItems = [...new Set(foodItems.map((Val) => Val.category))];
  const filterItem = (category) => {
    const newItem = foodItems.filter((newVal) => {
      return newVal.category === category;
    });
    setItem(newItem);
  };

  const [data, setData] = useState("");

  const onSelectionChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };

  switch (data) {
    case "0":
      item.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "1":
      item.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "2":
      item.sort((a, b) => a.price - b.price);
      break;
    case "3":
      item.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }
  return (
    <div className="w-full p-4">
      <div className="flex flex-col md:flex-row items-center justify-between text-xl">
        <FilterBtn
          menuItems={menuItems}
          fliterItem={filterItem}
          setItem={setItem}
        />
        <form>
          <label className="mr-2 text-xl font-bold">Sort By</label>
          <select onChange={onSelectionChange}>
            <option>---</option>
            <option value={0}>Alphabetically (a to z)</option>
            <option value={1}>Alphabetically (z to a)</option>
            <option value={2}>Price (low to high)</option>
            <option value={3}>Price (high to low)</option>
          </select>
        </form>
      </div>
      <div className="w-full py-3 md:p-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-4">
        {item.map((item) => (
          <ItemCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FoodCart;
