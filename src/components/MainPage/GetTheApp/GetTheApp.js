import React from "react";
import downloadAppStore from "../../../assets/MainPage/GetTheApp/downloadAppStore.svg";
import getInGooglePlay from "../../../assets/MainPage/GetTheApp/getInGooglePlay.svg";
import mobileImg from "../../../assets/MainPage/GetTheApp/mobileImg.svg";

const GetTheApp = () => {
  return (
    <div className="w-full lg:h-[520px] h-full flex justify-center items-center bg-[#EBEBEB] py-10 mb-0">
      <div className="flex lg:flex-row w-4/6 h-full justify-center items-center py-5 flex-col">
        <div className="w-full h-full flex  items-center py-4">
          <div className="w-full h-full flex justify-center flex-col px-3">
            <h1 className="text-4xl mb-4">Get the app.</h1>
            <h3 className="text-xl mb-6">
              Get the power of Getjob on-the-go, featuring pne-touch apply.
            </h3>
            <div className="w-full grid grid-cols-2 ">
              <div className="pr-8 py-4">
                <a href="">
                  <img src={downloadAppStore} alt="" className="mr-3" />
                </a>
              </div>
              <div className="p-4">
                <a href="">
                  <img src={getInGooglePlay} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-[250px] lg:h-full flex justify-center items-center">
            <img src={mobileImg} alt="" className="w-full  h-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTheApp;
