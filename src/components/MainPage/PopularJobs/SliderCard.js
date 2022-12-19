import React from "react";
import imageArcelik from "../../../assets/imagearcelik.svg";
import locationImage from "../../../assets/locationIcon.svg";
const SliderCard = () => {
  return (
    <div className="flex flex-col  h-full border rounded-lg shadow-lg">
      <div className=" py-16   rounded-lg bg-gradient-to-b from-red-400 to-white h-3/5 flex justify-center items-center ">
        <img
          src={imageArcelik}
          alt=""
          className="flex justify-center items-center "
        />
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="flex flex-row w-full h-full">
          <img src={locationImage} alt="" className="p-1 ml-2 " />
          <p className="text-sm text-[#052A69] ">İzmir, Turkey</p>
        </div>
        <p className="px-2 mr-2 text-[#1B85FB] ">54,700₺</p>
      </div>
      <div className="w-5/6 flex   mt-3 bg-[#081F43] mx-auto border rounded-lg py-2  px-2 flex-col text-white">
        <h3 className="text-base font-bold flex  ">Satış Mühendisi</h3>
        <p className="text-sm mb-2 flex  ">Tam Zamanlı</p>
      </div>
      <div className="flex justify-center items-center">
        
      </div>
    </div>
  );
};

export default SliderCard;
