import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const About = lazy(() => import("../pages/About"));
const Campaign = lazy(() => import("../pages/Campaign"));
const Contact = lazy(() => import("../pages/Contact"));

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
