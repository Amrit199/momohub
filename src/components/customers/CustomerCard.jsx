import React from "react";

const CustomerCard = ({ img, name, review, date, rating }) => {
  return (
    <div className=" bg-slate-200 transition-all w-[80%] mx-auto md:w-[70%] lg:w-[60%] rounded-lg p-8 shadow-lg shadow-gray-600 flex flex-col gap-4">
      <div className="flex items-center justify-center gap-4">
        <div className="w-28">
          <img
            // src={`https://api.adorable.io/avatars/50/${name}.png`}
            src={img}
            alt={name}
            className="w-full rounded-full"
          />
        </div>
        <div className="text-lg">
            <h3>{name}</h3>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <p>{date}</p>
        <p>{rating}</p>
      </div>
      <div className="text-center">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
