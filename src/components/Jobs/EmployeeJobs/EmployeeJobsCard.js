import React from "react";

const EmployeeJobsCard = ({EmployeeImgSource}) => {
  return (
    <div className="bg-gradient-to-b from-white via-white  to-[#0D0658] flex justify-center items-center border rounded-xl flex-col shadow-lg ">
      <div className="flex justify-center items-center  rounded-xl flex-col shadow-lg w-full ">
      
        <img src={EmployeeImgSource} alt="" className="bg-transparent mt-5 h-64  " />
        
        <div className="w-full flex flex-col pl-4 py-2 text-white bg-[#0D0658] rounded-b-xl">
          <h3 className="text-xl font-bold flex-wrap">Erdem Yıldırım</h3>
          <p className="ml-3">Satış Danışmanı</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeJobsCard;
