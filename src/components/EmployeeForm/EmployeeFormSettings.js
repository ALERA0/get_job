import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

import FirstBorderSettings from "./FirstBorderSettings";

import PersonelInformation from "./PersonelInformation";
import UpdateCancelButton from "./UpdateCancelButton";


const EmployeeFormSettings = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full  bg-[#F7F7F7] flex flex-col justify-between">
        <div className="max-w-full mt-40 flex flex-col justify-center">
          <h3 className="text-xl text-center px-auto mt-6 text-blue-800 font-bold ">
            Profil Bilgilerini Düzenle
          </h3>
          <div className=" border rounded-2xl bg-white w-3/5 mx-auto h-full mb-28 mt-12 flex  flex-col  ">
            <FirstBorderSettings />
            <PersonelInformation />
          </div>
          <Footer />
        </div>
      </div>
      <UpdateCancelButton/>
    </div>
  );
};

export default EmployeeFormSettings;
