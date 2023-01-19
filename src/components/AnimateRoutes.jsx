import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
// import { lazy } from "react";
import Home from "../pages/Home";
import Product from "../pages/Product";
import About from "../pages/About";
import Campaign from "../pages/Campaign";
import Booking from "../pages/Booking";

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Suspense fallback={<h1>.....Loading</h1>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
