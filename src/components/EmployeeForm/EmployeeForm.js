import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

import FirstBorder from "./FirstBorder";
import PersonelInfoResult from "./PersonelInfoResult";

const EmployeeForm = () => {
  return (
    <div >
      <Navbar />
      <div className="w-full  bg-[#F7F7F7] flex flex-col justify-between ">
        <div className="max-w-full mt-40 flex flex-col justify-center">
          <h3 className="text-xl text-center px-auto mt-6 text-blue-800 font-bold ">
            Profil
          </h3>
          <div className=" border rounded-2xl bg-white w-3/5 mx-auto mb-28 h-full mt-12 flex  flex-col  ">
            <FirstBorder />
            <PersonelInfoResult />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
