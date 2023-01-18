import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material"; 

const Navbar = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const cartNumbers = items.reduce((curNumber = 0, item) => {
    return curNumber + item.amount;
  }, 0);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="w-full h-full bg-white text-[#5a616c] text-xl z-10">
      <div className="flex items-center justify-between md:justify-around px-5 py-2">
        {/* logo */}
        <Link to={"/"}>
          <img src="/images/logo.png" alt="" className="rounded-xl w-14" />
        </Link>
        {/* nav menu items */}
        <div className="flex gap-4 items-center justify-self-end">
          <div className="hidden md:flex collapse md:visible text-xl font-bold gap-4">
            <NavLink to={"/"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              Home
            </NavLink>
            <NavLink to={"/product"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              Menu
            </NavLink>
            <NavLink to={"/about"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              About
            </NavLink>
            <NavLink to={"/campaign"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              Campaign
            </NavLink>
            <NavLink to={"/booking"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              Reservation
            </NavLink>
            <NavLink to={"/contact"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              Contact Us  
            </NavLink>
          </div>

          {/* cart */}
          <div className="cursor-pointer">
            {/* <div onClick={props.onShowCart}>
              <Badge badgeContent={cartNumbers} color="info">
                <ShoppingCartIcon fontSize="medium" color="default" />
              </Badge>
            </div> */}
            {items.length !== 0 ? (
              <div onClick={props.onShowCart}>
                <Badge badgeContent={cartNumbers} color="info">
                  <ShoppingCartIcon fontSize="medium" color="default" />
                </Badge>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* hamburger menu icons */}
          {openMenu ? (
            <div
              onClick={handleClick}
              className="bg-[#5a616c] text-white rounded-full cursor-pointer active:shadow-[#5a616c] active:shadow-lg transition duration-200 ease-in-out "
            >
              <Close className="m-1" fontSize="large" />
            </div>
          ) : (
            <div
              className="md:hidden bg-[#5a616c] text-white rounded-full cursor-pointer active:shadow-[#5a616c] active:shadow-lg transition duration-200 ease-in-out"
              onClick={handleClick}
            >
              <MenuIcon className="m-1" fontSize="large" />
            </div>
          )}
        </div>
      </div>

      {/* mobile nav menu items */}
      {openMenu ? (
        <div className="absolute w-[100%] h-[50%] bg-white text-xl font-bold z-30">
          <div
            className="w-full h-full py-4 px-1 flex flex-col items-center gap-2 z-30"
            onClick={handleClick}
          >
            <NavLink to={"/"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              Home
            </NavLink>
            <NavLink to={"/product"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              Menu
            </NavLink>
            <NavLink to={"/about"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              About
            </NavLink>
            <NavLink to={"/campaign"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              Campaign
            </NavLink>
            <NavLink to={"/booking"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              Reservation
            </NavLink>
            <NavLink to={"/contact"} className={({isActive}) => (isActive ? "text-white bg-black p-2 rounded-lg" : "transition-colors delay-150 hover:bg-[#5a616c] hover:text-white p-2 rounded-lg")}>
              Contact Us  
            </NavLink>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
