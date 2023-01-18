import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { AiTwotoneMail } from "react-icons/ai";
import {
  BsFillPeopleFill,
  BsFillCalendarDateFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

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
      className=" w-full h-full p-3"
      initial={{ width: "0" }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl text-center font-bold my-5">Book a table</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] transition-all mx-auto my-4 h-full shadow-lg shadow-gray-400 bg-slate-200 p-6 rounded-lg"
      >
        {success && <p className="text-green-500">Booking created!</p>}
        {/* guest label */}
        <div className="relative">
          <input
            className={`border border-gray-400 p-2 rounded-lg w-full text-black ${errors.guests ? " border-red-600" : ""}`}
            type="number"
            name="guests"
            id="guests"
            placeholder="Guests"
            {...register("guests", {required: true})}
          />
          <BsFillPeopleFill
            size={30}
            className=" absolute top-[50%] transform translate-y-[-50%] right-8"
          />
        </div>
        {errors.guests && <span>This field is required</span>}
        {/* data label */}
        <div className="mb-4 mt-4">
          <label className=" flex items-center gap-3 mb-2" htmlFor="date">
            Date
            <BsFillCalendarDateFill size={18} />
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full cursor-pointer"
            type="date"
            name="date"
            id="date"
          />
        </div>
        {/* time label */}
        <div className="mb-4">
          <label className="flex items-center gap-3 mb-2" htmlFor="time">
            Time
            <BiTimeFive size={18} />
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="time"
            name="time"
            id="time"
          />
        </div>

        {/* Contact details */}
        <h2 className=" text-center text-2xl font-bold my-2">
          Enter your contact details
        </h2>

        {/* name label */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Full name
          </label>
          <input
            className={`border border-gray-400 p-2 rounded-lg w-full ${
              errors.name ? "border-red-500" : ""
            } `}
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        {/* mobile number */}
        <div className="mb-4">
          <label className="flex items-center gap-3 mb-2" htmlFor="time">
            Mobile number
            <BsFillTelephoneFill size={18} />
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Mobile number"
          />
        </div>
        {/* email */}
        <div className="mb-4">
          <label className="flex items-center gap-3 mb-2" htmlFor="time">
            Email address
            <AiTwotoneMail size={18} />
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="email"
            name="email"
            id="email"
            placeholder="email@address.com"
          />
        </div>
        {/* special request */}
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
        {/* button */}
        <div className="w-full mb-4">
          <button
            type="submit"
            className="bg-green-600 w-full text-white py-3 px-4 text-xl rounded-lg hover:bg-green-700"
          >
            Book Table
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Booking;
