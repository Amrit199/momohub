import React, { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CartContext from "../../context/CartContext";

const ItemCard = ({ data }) => {
  const cartCtx = useContext(CartContext);
  const [buttoShow, setButtoShow] = useState(false);

  const { items } = cartCtx;
  // console.log(buttonShow)
  let buttonText = ["Add", "In cart"];

  useEffect(() => {
    let cart = cartCtx.items.some((item) => item.id === data.id);
    if (cart) {
      setButtoShow(true);
    } else {
      setButtoShow(false);
    }
  }, [cartCtx.items, data.id]);

  // adding data values to te managed to the useContext
  const onAddToCartHandler = (e) => {
    e.preventDefault();
    cartCtx.addItem({
      id: data.id,
      name: data.name,
      amount: 1,
      price: data.price,
      img: data.img,
    });
  };

  return (
    <div className="flex flex-col gap-1 p-1 md:p-3 rounded-md md:rounded-lg">
      <div className="bg-[#5a616c] flex items-center justify-center rounded-xl transition-transform delay-150 hover:scale-105">
        <LazyLoadImage
          alt={data.name}
          src={data.img}
          width={208}
          className="object-cover rounded-full py-2" 
          />
          {/* <img
            src={data.img}
            alt={data.name}
            className="w-52 object-cover rounded-full py-2"
          /> */}
      </div>
      <h1 className="text-center md:text-xl lg:text-2xl">{data.name}</h1>
      <div className="w-full flex flex-col md:flex-row items-center md:justify-around md:gap-2">
        <p>Kr {data.price}</p>
        <button
          className={
            buttoShow
              ? "px-5 py-1 bg-red-700 text-white rounded-lg"
              : "px-7 py-1 bg-[#5a616c] transition-colors delay-150 text-white rounded-lg hover:bg-green-900"
          }
          onClick={onAddToCartHandler}
          disabled={items.some((item) => item.id === data.id)}
        >
          {buttoShow ? buttonText[1] : buttonText[0]}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
