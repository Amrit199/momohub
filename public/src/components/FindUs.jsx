import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, YouTube } from "@mui/icons-material";

const openingHours = [
  {
    day: "Monday",
    time: "12:00 - 22:00",
  },
  {
    day: "Tuesday",
    time: "12:00 - 22:00",
  },
  {
    day: "Wednesday",
    time: "12:00 - 22:00",
  },
  {
    day: "Thursday",
    time: "12:00 - 22:00",
  },
  {
    day: "Friday",
    time: "12:00 - 22:00",
  },
  {
    day: "Saturday",
    time: "10:00 - 22:00",
  },
  {
    day: "Sunday",
    time: "14:00 - 20:00",
  },
];

const FindUs = () => {
  return (
    <div className="w-full h-full md:h-[50vh] bg-gradient-to-r from-slate-600 to-black/70 px-6 py-8 mx-auto text-center text-white">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between">
        <div className="basis-3/5 h-full m-3">
          <div className="mb-8">
            <h1 className="text-3xl underline underline-offset-2">Find Us</h1>
            <p>3401 Church Ave, Brooklyn,</p>
            <p>NY 11203, United States</p>
            <button className="underline underline-offset-2 hover:text-red-200">
              post@momo.com
            </button>
          </div>
          <div>
            <h1 className="text-xl my-2">Follow Us</h1>
            <ul className="flex items-center justify-center gap-3">
              <li className="cursor-pointer transition-transform delay-150 hover:scale-125 active:shadow-inner active:shadow-white"><FacebookIcon color="primary" fontSize="large"/></li>
              <li className="cursor-pointer transition-transform delay-150 hover:scale-125 active:shadow-inner active:shadow-white"><Instagram color="secondary" fontSize="large"/></li>
              <li className="cursor-pointer transition-transform delay-150 hover:scale-125 active:shadow-inner active:shadow-white"><YouTube color="error" fontSize="large"/></li>
            </ul>
          </div>
        </div>
        <div className="basis-2/5 h-full p-3">
          <h1 className="text-3xl">Opening Hours</h1>
          {openingHours.map((item) => (
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2>{item.day}</h2>
              </div>
              <div>{item.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindUs;
