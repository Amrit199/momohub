import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = (props) => {
  return (
    <div className="w-full flex items-center justify-center md:justify-between px-1 py-2 md:p-3">
      {/* items */}
      <div className="w-full flex items-center gap-3">
        {/* items image */}
        <img
          src={props.img}
          alt=""
          className="w-[8rem] h-[8rem] object-cover rounded-lg"
        />
        {/* items text */}
        <div>
          <h1 className="text-xl">{props.name}</h1>
          <p>{props.price}</p>
        </div>
      </div>
      {/* Add and remove icons */}
      <div className="w-full flex items-center justify-end text-2xl font-bold gap-2 text-white">
        <button onClick={props.onRemove} className="bg-[#5a616c] p-1 rounded-full transition-transform hover:scale-110 active:shadow-inner active:shadow-white">
          <RemoveCircleOutlineIcon fontSize="large" />
        </button>
        <h1 className="text-[#5a616c]">
        {props.amount}
        </h1>
        <button onClick={props.onAdd} className="bg-[#5a616c] p-1 rounded-full transition-transform hover:scale-110 active:shadow-inner active:shadow-white">
          <AddCircleOutlineIcon fontSize="large" />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default CartItem;
