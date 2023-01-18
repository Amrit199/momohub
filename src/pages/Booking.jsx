import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Booking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    // e.preventDefault();
    setSuccess(true);
  };
  return (
    <motion.div
      className=" w-full h-full px-10 py-6"
      initial={{ width: "0" }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
    >
        <h1 className="text-4xl text-center font-bold my-5">Book a table</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full h-full shadow-lg shadow-gray-400 bg-slate-200 p-6 rounded-lg"
      >
        {success && <p className="text-green-500">Booking created!</p>}
        {/* name label */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`border border-gray-400 p-2 rounded-lg w-full ${
              errors.name ? "border-red-500" : ""
            } `}
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        {/* date label */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="date"
            name="date"
            id="date"
          />
        </div>
        {/* time label */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="time"
          >
            Time
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="time"
            name="time"
            id="time"
          />
        </div>
        {/* guest label */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="guests"
          >
            Guests
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="number"
            name="guests"
            id="guests"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="tel"
            name="phone"
            id="phone"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Special Requests or Message
          </label>
          <textarea
            className="border border-gray-400 p-2 rounded-lg w-full"
            name="message"
            id="message"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        >
          Book Table
        </button>
      </form>
    </motion.div>
  );
};

export default Booking;
