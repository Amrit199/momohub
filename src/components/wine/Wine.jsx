import React, { useState } from "react";
import { lazy } from "react";
import { wineList } from "../../data";

const WineList = lazy(() => import("./WineList"));

const Wine = () => {
  const defaultWine =
    "https://images.pexels.com/photos/342971/pexels-photo-342971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [wineImg, setWineImg] = useState(defaultWine);

  return (
    <div className="w-full h-full my-8 p-6 bg-gradient-to-b md:bg-gradient-to-r from-red-700 to-slate-500 text-center font-playfair">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="basis-2/4 p-4 text-white">
          <h1
            className="text-3xl cursor-pointer"
            onClick={() => setWineImg(defaultWine)}
          >
            Complete Wine List
          </h1>
          <ul className="mt-2">
            {wineList &&
              wineList.map((item, index) => (
                <WineList
                  key={index}
                  item={item}
                  clickWine={(text) => setWineImg(text)}
                />
              ))}
          </ul>
        </div>
        <div className="w-90 md:w-96 p-5">
          <img
            src={wineImg}
            alt="Wine"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Wine;
