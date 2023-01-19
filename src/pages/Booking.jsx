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
import { GiConfirmed } from "react-icons/gi";

const Booking = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    // no need of e.preventDefault because handleSubmit already has it
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    const values = getValues();
    console.log(values);
    reset();
  };
  return (
    <motion.div
      className=" w-full h-full p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl text-center font-bold my-5">Book a table</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] transition-all mx-auto my-4 h-full shadow-lg shadow-gray-400 bg-slate-200 p-6 rounded-lg"
      >
        {/* guest label */}
        <div className="mb-4">
          <label className=" flex items-center gap-3 mb-2" htmlFor="date">
            Guests
            <BsFillPeopleFill size={18} />
          </label>
          <input
            className={`border border-gray-400 p-2 rounded-lg w-full text-black ${
              errors.guests ? " border-red-600" : ""
            }`}
            type="number"
            name="guests"
            id="guests"
            placeholder="Guests"
            {...register("guests", { required: true })}
          />
          {errors.guests && (
            <span className=" text-red-700">This field is required</span>
          )}
        </div>
        {/* data label */}
        <div className="mb-4">
          <label className=" flex items-center gap-3 mb-2" htmlFor="date">
            Date
            <BsFillCalendarDateFill size={18} />
          </label>
          <input
            className={`border p-2 rounded-lg w-full ${
              errors.date ? "border-red-600" : "border-gray-600"
            }`}
            type="date"
            name="date"
            id="date"
            {...register("date", { required: true })}
          />
          {errors.date && (
            <span className=" text-red-700">This field is required</span>
          )}
        </div>
        {/* time label */}
        <div className="mb-4">
          <label className="flex items-center gap-3 mb-2" htmlFor="time">
            Time
            <BiTimeFive size={18} />
          </label>
          <input
            className={`border p-2 rounded-lg w-full ${
              errors.time ? "border-red-600" : "border-gray-600"
            }`}
            type="time"
            name="time"
            id="time"
            {...register("time", { required: true })}
          />
          {errors.time && (
            <span className=" text-red-700">This field is required</span>
          )}
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
            className={`border p-2 rounded-lg w-full ${
              errors.name ? "border-red-500" : "border-gray-400"
            } `}
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className=" text-red-700">This field is required</span>
          )}
        </div>
        {/* mobile number */}
        <div className="mb-4">
          <label className="flex items-center gap-3 mb-2" htmlFor="time">
            Mobile number
            <BsFillTelephoneFill color="green" size={18} />
          </label>
          <input
            className={`border p-2 rounded-lg w-full ${
              errors.mobile ? "border-red-600" : "border-gray-600"
            }`}
            type="tel"
            name="phone"
            id="phone"
            placeholder="Mobile number"
            {...register("mobile", { required: true })}
          />
          {errors.mobile && (
            <span className=" text-red-700">This field is required</span>
          )}
        </div>
        {/* email */}
        <div className="mb-4">
          <label className="flex items-center gap-3 mb-2" htmlFor="time">
            Email address
            <AiTwotoneMail size={18} />
          </label>
          <input
            className={`border p-2 rounded-lg w-full ${
              errors.email ? "border-red-600" : "border-gray-400"
            }`}
            type="email"
            name="email"
            id="email"
            placeholder="email@address.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className=" text-red-700">This field is required</span>
          )}
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
            {...register("request")}
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
        {success && (
          <p className="text-green-800 text-center text-xl flex items-center justify-center gap-3">
            Thank you for the reservation
            <GiConfirmed size={25} color="green" />
          </p>
        )}
      </form>
    </motion.div>
  );
};

export default Booking;
