import React, { useState } from "react";
import { wineList } from "../../data";
import WineList from "./WineList";


const Wine = () => {
  const defaultWine = "https://images.pexels.com/photos/342971/pexels-photo-342971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const [wineImg, setWineImg] = useState(defaultWine)

  return (
    <div className="w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-red-700 to-slate-500 p-3 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="basis-2/4 font-serif italic p-4 text-white">
          <h1 className="text-3xl cursor-pointer" onClick={() => setWineImg(defaultWine)}>Complete Wine List</h1>
          <ul className="mt-2">
            {wineList.map((item) => (
              <WineList item={item} clickWine={(text) => setWineImg(text)}/>
              // <li className="border-b-2 my-1 hover:bg-red-800 p-2" key={id} onClick={handleClick}>
              //   <h1 className="font-bold">{item.name}</h1>
              //   <p className="flex items-center justify-between">
              //     <span>{item.origin}</span>
              //     <span>{item.price}</span>
              //   </p>
              // </li>
            ))}
          
          </ul>
        </div>
        <div className="w-96 p-5">
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
