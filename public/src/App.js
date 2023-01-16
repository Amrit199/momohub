import { useState } from "react";
import AnimateRoutes from "./components/AnimateRoutes";
import Cart from "./components/cart/Cart";
import FindUs from "./components/FindUs";
import Navbar from "./components/navbar/Navbar";
import CartProvider from "./context/CartProvider";


function App() {
  const [showCart, setShowCart] = useState(false);

  const onShowCartHandler = () => {
    setShowCart(true);
  };
  const onCloseCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={onCloseCartHandler} />}
      <Navbar onShowCart={onShowCartHandler} />
      <AnimateRoutes />
      <FindUs />
    </CartProvider>
  );
}

export default App;
