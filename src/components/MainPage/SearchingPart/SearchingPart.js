import React from "react";
import InputBox from "./InputBox";
import PopulerSearchesBox from "./PopulerSearchesBox";

const SearchingPart = () => {
  return (
    <div className="w-full lg:h-[470px] h-full bg-[#052A69] flex justify-center items-center ">
      <div className="flex justify-center items-center w-3/4 h-3/5  ml-16 lg:pl-20">
        <div className="w-full h-full flex flex-col justify-start items-start">
          <div className="w-full h-[100px] flex items-end mt-2">
            <h3 className="text-[#F2B129] text-3xl  flex  ">
              Find the <span className="mx-3 text-white"> right</span> fit.
            </h3>
          </div>
          <InputBox />
          <div className="w-full h-full flex flex-col ">
            <div className=" flex  w-full  ">
              <h3 className="text-sm text-zinc-300 mb-3">Popular Searches</h3>
            </div>
            <div className="w-full h-full flex flex-row py-1 flex-wrap">
              <PopulerSearchesBox />
              <PopulerSearchesBox />
              <PopulerSearchesBox />
              <PopulerSearchesBox />
              <PopulerSearchesBox />
              <PopulerSearchesBox />
              <PopulerSearchesBox />
              <PopulerSearchesBox />
              <PopulerSearchesBox />
              <PopulerSearchesBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchingPart;
