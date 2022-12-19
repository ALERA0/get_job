import React from "react";
import searchwithcolor from "../../../assets/searchwithcolor.svg";

const PopulerSearchesBox = () => {
  return (
    <div className="h-9 py-1 flex flex-wrap  ">
      <button className="h-full w-full flex justify-center items-center   ">
        <div className="bg-[#0F3B86] flex justify-between  items-center mr-2 lg:px-2 rounded-sm  h-full hover:bg-blue-400 mb-7">
          <img
            src={searchwithcolor}
            alt=""
            className="w-4 h-4 flex justify-center items-center mr-2"
          />
          <p className="text-white w-full text-sm pr-2">Work from home</p>
        </div>
      </button>
    </div>
  );
};

export default PopulerSearchesBox;
