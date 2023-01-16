import React, { useContext } from "react";
import CartContext from "../../store/CartContext";

const ButtonCard = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  console.log(props.id);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = 1;

    props.onAddToCart(enteredAmount);
  };
  return (
    <div>
      <button
        className="px-5 py-1 bg-green-700 text-white rounded-lg"
        onClick={onSubmitHandler}
        disable={items.includes(items.id)}
      >
        Add
      </button>
    </div>
  );
};

export default ButtonCard;
