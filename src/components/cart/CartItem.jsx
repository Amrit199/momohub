import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const CartItem = (props) => {
  let itemTotal = props.amount * props.price
  return (
    <div className="w-full p-4 flex flex-col items-center gap-2">
      {/* items */}
      <div className="w-full flex items-center gap-4 px-3">
        {/* items image */}
        <div className=" w-12">
          <img
            src={props.img}
            alt=""
            className="w-full object-cover rounded-lg"
          />
        </div>
        {/* items text */}
        <h2 className="text-xl">{props.name}</h2>
      </div>
      <div className=" w-full h-[1px] bg-gray-400"></div>
      {/* Add and remove icons */}
      <div className="w-full flex items-center justify-between gap-2 px-3">
        <div className=" flex items-center gap-4">
          <button
            onClick={props.onRemove}
            className="active:shadow-inner active:shadow-white text-gray-600 hover:text-black"
          >
            <AiOutlineMinusCircle size={30} />
          </button>
          <h2 className="text-[#5a616c] border-b-2 border-gray-500">
            {props.amount}
          </h2>
          <button
            onClick={props.onAdd}
            className="active:shadow-inner active:shadow-white text-gray-600 hover:text-black"
          >
            <AiOutlinePlusCircle size={30} />
          </button>
        </div>
        <div>
          <p className=" text-xl">
            {itemTotal}
            <span className=" font-bold"> -</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
