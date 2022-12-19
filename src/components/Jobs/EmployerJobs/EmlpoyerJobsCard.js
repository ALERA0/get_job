import React from "react";

const EmployerJobsCard = ({ EmployerImgSource }) => {
  return (
    <a href="employerDetail">
    <div className="bg-gradient-to-b from-red-400   via-red-100 to-white flex justify-center items-center border rounded-xl flex-col shadow-lg ">
      <div className="flex justify-center items-center  rounded-xl flex-col shadow-lg w-full ">
        <div className="w-1/2 h-52 flex justify-center items-center p-4">
          <img
            src={EmployerImgSource}
            alt=""
            className="bg-transparent mt-5    "
          />
        </div>

        <div className="w-full flex flex-col pl-4 py-2 text-white bg-[#0D0658] rounded-xl">
          <h3 className="text-xl font-bold flex-wrap">Arçelik</h3>
          <p className=" flex-wrap">Satış Danışmanı, arıyor</p>
        </div>
      </div>
    </div></a>
    
  );
};

export default EmployerJobsCard;
