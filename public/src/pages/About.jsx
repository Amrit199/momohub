import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import about from "../assets/about.jpg";
import wide from "../assets/wide.jpg";
import genuien from "../assets/genuien.jpg";
import guest from "../assets/guest.jpg";
import honest from "../assets/honest.jpg";
import opening from "../assets/opening.jpg";

const About = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-full p-2 bg-gray-700 text-white font-playfair"
        initial={{ width: "0" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        exit={{ x: window.innerWidth }}
      >
        <div className="p-2 text-center flex items-center justify-between">
          <div className="w-full">
            <h1 className="text-4xl font-bold p-4">About MOMO</h1>
            <p className="text-xl">MOMO is a fine dining restaurant</p>
          </div>
        </div>
        <motion.div
          className="p-2 w-[50%] mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <img src={about} alt="momo" className="w-full object-cover p-4" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full text-center font-bold text-2xl py-5"
        >
          <p>
            Since our establishment in 2020, we have had fantastic growth of
            which we are incredibly proud.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full font-bold py-5 text-center flex items-center justify-between"
        >
          <div className="w-full">
            <h3 className="text-2xl">Wide selection</h3>
            <p className="p-2 text-xl">
              We are proud of this, and we are constantly working to improve.
              Annually, we have approx. 40 offers to establish new Egon
              restaurants both at home and abroad, but we choose to decline most
              of them as we don't want to get too big. Our goal is to have a
              wide selection of different restaurant concepts near our
              restaurants in order to build a varied restaurant offer for
              customers.
            </p>
          </div>
          <div className="w-full">
            <motion.div
              className="p-2 w-full mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img
                src={wide}
                alt="momo"
                className="object-cover min-w-xl mx-auto p-4"
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full font-bold py-5 text-center flex items-center justify-between"
        >
          <div className="w-full">
            <motion.div
              className="p-2 w-full mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img
                src={genuien}
                alt="momo"
                className="object-cover min-w-xl mx-auto p-4"
              />
            </motion.div>
          </div>
          <div className="w-full">
            <h3 className="text-2xl">You know what you're getting</h3>
            <p className="p-2 text-xl">
              Our guests like our concept, the food and the service. We are keen
              to stick to the concept and use approx. 25 - 30 million to build a
              new restaurant. Every year we spend a lot of time and resources on
              menu and concept development to satisfy a wide audience across the
              country. We are uncompromising in our concept - Egon must have
              exactly the same concept in all restaurants. We are also proud of
              our employees. We have committed employees who are on hand every
              single day to provide service to all our guests. In the industry,
              we are one of those with the lowest sickness absence, lowest
              turnover of employees and management teams. This is also one of
              the elements of success for the concept.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full font-bold py-5 text-center flex items-center justify-between"
        >
          <div className="w-full">
            <h3 className="text-2xl">The guest</h3>
            <p className="p-2 text-xl">
              Being a guest at Egon should be an experience and a break from
              everyday life. You should feel that you are in a restaurant
              through the service, food and surroundings. Everyone should feel
              at home with us!
            </p>
          </div>
          <div className="w-full">
            <motion.div
              className="p-2 w-full mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img
                src={guest}
                alt="momo"
                className="object-cover min-w-xl mx-auto p-4"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full font-bold py-5 text-center flex items-center justify-between"
        >
          <div className="w-full">
            <motion.div
              className="p-2 w-full mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img
                src={honest}
                alt="momo"
                className="object-cover min-w-xl mx-auto p-4"
              />
            </motion.div>
          </div>
          <div className="w-full">
            <h3 className="text-2xl">Honesty in every aspect</h3>
            <p className="p-2 text-xl">
              Our policy is that we must act honestly, fairly and correctly both
              internally and externally. This is something we strongly focus on
              above all our employees, suppliers, partners, authorities and not
              least our guests. We must lead by example and be a counterweight
              to the bad impression many have of the restaurant industry.
              Therefore, we work closely with the Norwegian authorities' control
              of our routines, general operations and accounts. We are keen to
              maintain our high standards in this regard. It has also led to us
              being used as a consultation body for the authorities in several
              contexts.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full font-bold py-5 text-center flex items-center justify-between"
        >
          <div className="w-full">
            <h3 className="text-2xl">Opening hours</h3>
            <p className="p-2 text-xl">
              All Egon stores must initially be open every day except Christmas
              Eve and Christmas Day. Public holidays generally follow the same
              opening hours as Sunday. The kitchen must remain open as long as
              the announced opening hours.
            </p>
          </div>
          <div className="w-full">
            <motion.div
              className="p-2 w-full mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img
                src={opening}
                alt="momo"
                className="object-cover min-w-xl mx-auto p-4"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
