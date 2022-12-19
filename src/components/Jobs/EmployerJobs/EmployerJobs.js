import React from 'react'
import Navbar from "../../Navbar";
import EmployerImg from "../../../assets/Jobs/Employer.svg";
import EmployerJobsCard from "./EmlpoyerJobsCard"
import Footer from "../../Footer";

const EmployerJobs = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col">
        <div className="max-w-full mt-36 flex flex-col bg-[#F7F7F7] h-full  items-center  ">
          <h3 className="w-full text-center text-xl text-[#204686] py-7 font-bold">
            Jobs
          </h3>
          <div className="w-5/6 h-full lg:w-3/5 md:w-4/5 p-2 items-center grid md:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-5 grid-rows-9 gap-4">
            <EmployerJobsCard EmployerImgSource={EmployerImg} />
            <EmployerJobsCard EmployerImgSource={EmployerImg} />
            <EmployerJobsCard EmployerImgSource={EmployerImg} />
            <EmployerJobsCard EmployerImgSource={EmployerImg} />
            <EmployerJobsCard EmployerImgSource={EmployerImg} />
            <EmployerJobsCard EmployerImgSource={EmployerImg} />
            <EmployerJobsCard EmployerImgSource={EmployerImg} />
            <EmployerJobsCard EmployerImgSource={EmployerImg} />
            <EmployerJobsCard EmployerImgSource={EmployerImg} />
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};
  


export default EmployerJobs