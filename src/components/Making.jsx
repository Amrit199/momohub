import React from "react";

const Making = () => {
  return (
    <div className="w-full h-full mt-8 font-bold px-6 py-6 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center pt-[70px] gap-5">
        <div className="basis-3/5">
          <img
            src="https://images.pexels.com/photos/8093361/pexels-photo-8093361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dumplings"
            className="object-cover"
          />
        </div>
        <div className="basis-2/5 text-xl uppercase px-4">
          <h3 className="leading-8">
            Stir everything together until the wet and dry ingredients are
            combined and you don't see any more dry flour
          </h3>
          <button className="p-4 mt-3 border-4 border-gray-700 rounded-lg transition-all duration-100 delay-100 hover:bg-gray-700 hover:text-white">
            Know more about ingredients
          </button>
        </div>
      </div>
      <div className="w-full h-1 my-6 bg-black"></div>
    </div>
  );
};

export default Making;
