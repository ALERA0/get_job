import React from "react";
import arceliklogo from "../../../assets/MainPage/AdsLogos/arcelik.svg";
import adidaslogo from "../../../assets/MainPage/AdsLogos/adidas.svg";
import airbnblogo from "../../../assets/MainPage/AdsLogos/airbnb.svg";
import burgerkinglogo from "../../../assets/MainPage/AdsLogos/burgerking.svg";
import microsoftlogo from "../../../assets/MainPage/AdsLogos/microsoft.svg";
import vakkologo from "../../../assets/MainPage/AdsLogos/Vakko.svg";
import downArrow from "../../../assets/downArrow.svg";

const Adds = () => {
  return (
    <div className="w-full lg:h-[410px] h-full flex justify-center items-center bg-[#F7F7F7] py-10">
      <div className="w-4/6 h-full flex  justify-center items-center flex-col lg:flex-row">
        <div className="w-full h-full flex justify-center items-center flex-row ">
          <div className="w-full h-full flex justify-center items-center p-2">
            <div className="w-full h-full flex justify-center items-center flex-col">
              <div className="w-full h-full flex justify-center items-center">
                <img src={arceliklogo} alt="" className="my-2" />
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <img src={adidaslogo} alt="" className="my-2"  />
              </div>

              <div className="w-full h-full flex justify-center items-center">
                <img src={airbnblogo} alt="" className="my-2" />
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center p-2">
            <div className="w-full h-full flex justify-center items-center flex-col">
              <div className="w-full h-full flex justify-center items-center">
                <img src={vakkologo} alt="" className="mb-4" />
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <img src={microsoftlogo} alt="" className="my-2" />
              </div>

              <div className="w-full h-full flex justify-center items-center">
                <img src={burgerkinglogo} alt="" className="my-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center py-10 pl-9 pr-3 ">
          <div className="w-full h-full pt-11">
            <div className="flex w-full h-full flex-col">
            <h3 className="font-bold text-3xl">Find a job you love with the
            Turkey’s</h3>
            <h3 className="my-3">Your next role could be with one these leading companies.</h3>
            <button className=" flex justify-start items-start"  >
              <div className="flex  border rounded-2xl shadow-lg px-2 py-1 hover:bg-zinc-300 my-2 ">
                <div className="flex justify-between py-1">
                  <h3 className="flex px-4 ml-2">See more brands</h3>
                  <img src={downArrow} alt="" className="pr-2" />
                </div>
              </div>
            </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adds;
