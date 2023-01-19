import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram, YouTube } from "@mui/icons-material";

const FindUs = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-slate-600 to-black/70 px-6 py-8 text-center text-white">
      <div className="w-full h-full py-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* logo */}
        <div>
          <img src="/images/logo.png" alt="momo" className="w-32 rounded-xl" />
        </div>
        {/* address and icons */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
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
              <li className="cursor-pointer transition-transform delay-150 hover:scale-125 active:shadow-inner active:shadow-white">
                <FacebookIcon color="primary" fontSize="large" />
              </li>
              <li className="cursor-pointer transition-transform delay-150 hover:scale-125 active:shadow-inner active:shadow-white">
                <Instagram color="secondary" fontSize="large" />
              </li>
              <li className="cursor-pointer transition-transform delay-150 hover:scale-125 active:shadow-inner active:shadow-white">
                <YouTube color="error" fontSize="large" />
              </li>
            </ul>
          </div>
        </div>
        {/* opening hours */}
        <div>
          <h1 className="text-3xl underline underline-offset-2">
            Opening Hours
          </h1>
          <p>
            Mon - Sat<span className="ml-2">12:00 - 22:00</span>
          </p>
          <p>
            Sun<span className="ml-2">14:00 - 23:00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
