import React from "react";

const WineList = ({ item, clickWine }) => {
  const handleClick = () => {
    clickWine(item.img);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <li className="border-b-2 my-1 hover:bg-red-800 p-2">
        <h3>{item.name}</h3>
        <p className="flex items-center justify-between">
          <span>{item.origin}</span>
          <span>{item.price}</span>
        </p>
      </li>
    </div>
  );
};

export default WineList;
