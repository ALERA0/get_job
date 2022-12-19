import React from "react";

const CoursesCard = ({ imageSource }) => {
  return (
    <div className="w-full flex  items-center justify-center flex-col border rounded-3xl shadow-xl md:mr-2 mb-3">
      <img src={imageSource} alt="" className="rounded-t-3xl " />

      <div className="w-full flex flex-col">
        <div className="p-4 text-start">
          <h1 className="text-2xl font-bold">Courses &</h1>
          <h1 className="text-2xl font-bold">Training</h1>
        </div>
        <div className="w-full flex flex-row justify-between">
          <p className="pl-4 pb-4 pt-2">14 APRIL 2022</p>
          <div className="flex  items-center  justify-center my-auto pr-6 ">
            <button className=" w-full h-full border border-[#199BCD] bg-[#052A69] flex justify-center items-center px-4 py-1 rounded-lg hover:bg-[#F2B129] ">
              <p className="text-white ">Detail</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
