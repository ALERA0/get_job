import React from "react";
import searchIcon from "../../../assets/searchımg.svg";

const InputBox = () => {
  return (
    <div className="w-full h-full flex justify-center items-center lg:pr-32">
      <div className="w-full h-full py-7 ">
        <div className="w-full h-full flex flex-row bg-white p-3 border rounded-lg relative">
          <input
            className="w-full h-full  "
            type="text"
            placeholder="Search jobs, keywords, companies"
          />
          <input
            className="w-full h-full border-l-2 pl-4 "
            type="text"
            placeholder="Enter location"
          />
          <button>
            <div className="absolute xl:top-[7px] xl:right-2.5 top-[1px] right-[10px] z-20 cursor-pointer bg-[#F2B129]  translate-x-[2px] border-1  rounded-md border-[#707070] p-3 hover:bg-yellow-300 ">
              <div className="flex justify-center items-center">
                <img src={searchIcon} alt="" className="w-5 h-5" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
