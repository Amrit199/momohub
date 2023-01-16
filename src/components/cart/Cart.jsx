import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CartContext from "../../context/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const hasItems = cartCtx.items.length > 0;

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div className="w-full bg-black/60 absolute pt-16 z-20 font-mono ">
      <div className="w-full md:w-[60%] my-auto mx-auto relative flex flex-col bg-white">
        {hasItems && (
          <CloseIcon
            className="absolute top-2 right-3"
            onClick={props.onCloseCart}
            fontSize="large"
          />
        )}
        {hasItems && (
          <div className="w-full h-[350px] overflow-y-scroll p-3">
            {items.map((item) => (
              <CartItem
                name={item.name}
                key={item.id}
                amount={item.amount}
                price={item.price}
                img={item.img}
                onAdd={addHandler.bind(null, item)}
                onRemove={removeHandler.bind(null, item.id)}
              />
            ))}
          </div>
        )}
        <div className="w-full h-[20%] p-4 font-bold text-xl flex items-center justify-between">
          <h1>Total Amount: Kr {totalAmount}</h1>
          <div className="flex gap-8">
            <button
              onClick={props.onCloseCart}
              className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-400 hover:text-black"
            >
              Close
            </button>
            {hasItems && (
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black">
                Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
