import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-yellow-900 to-yellow-400 px-3 py-7 text-center">
      <div className="h-full pt-[70px] flex flex-col md:flex-row items-center justify-around gap-4">
        
        <div className="basis-2/5 text-xl font-bold text-white uppercase px-5 h-full">
          <h1 className="leading-8">
            dumpling, small mass of leavened dough that is either boiled or
            steamed and served in soups or stews or with fruit
          </h1>
          <button className="p-4 border-4 mt-3 rounded-lg transition-colors hover:bg-[#5a616c] active:shadow-white active:shadow-inner">
            Know more about dumplings
          </button>
        </div>
  
        <div className="basis-3/5 h-full">
          <img
            src="https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dumplings"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
