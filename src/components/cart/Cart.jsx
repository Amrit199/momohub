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

  const handleOrder = () => {
    alert("Thank you. Your Order has been placed")
  }
  return (
    <div className=" fixed top-0 bottom-0 right-0 left-0 z-20">
      <div className="w-full h-full relative flex flex-col bg-white">
        {hasItems && (
          <div className=" w-full flex items-center justify-between p-6">
            <h2 className=" text-xl">Your Cart: {cartCtx.items.length} items</h2>
            <CloseIcon
              onClick={props.onCloseCart}
              fontSize="large"
            />
          </div>
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
            {hasItems && (
              <button onClick={handleOrder} className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black">
                Order
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
