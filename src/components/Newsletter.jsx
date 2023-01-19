import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Newsletter = () => {
  const { register, handleSubmit, resetField } = useForm();
  const [subscribe, setSubscribe] = useState(false);
  const onSubmit = () => {
    setSubscribe(true);
    setTimeout(() => setSubscribe(false), 2000);
  };
  return (
    <div className=" w-full md:w-[80%] lg:w-[70%] mx-auto h-full my-8 px-6 py-6 text-center flex flex-col items-center justify-center gap-5">
      <h1 className=" font-playfair">
        Subscribe to our newsletter to stay updated and get the latest news
        about what's happening in our world!
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full flex flex-col items-center justify-center gap-4"
      >
        <input
          className="w-full border border-gray-700 py-3"
          type="email"
          name="email"
          {...register("email")}
        />
        {subscribe ? (
          <h3 className=" uppercase font-bold text-green-700 font-sans">
            Thank you for the joining Us.
          </h3>
        ) : (
          <button
            type="submit"
            onClick={() => resetField("email")}
            className=" uppercase font-bold py-3 px-4 border-2 border-gray-700 transition-colors duration-400 delay-200 hover:bg-gray-700 hover:text-white"
          >
            Yes, I want a newsletter
          </button>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
