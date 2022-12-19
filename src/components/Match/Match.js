import React from "react";
import EmployerImg from "../../assets/Jobs/Employer.svg";
import MatchCard from "./MatchCard";
import { GrClose } from "react-icons/gr";

const Match = ({ handleMatchModal }) => {
  return (
    <div className=" flex justify-center items-center   z-40 mt-6 flex-col">
      <div className="bg-white shadow-2xl flex  flex-col rounded-lg w-[470px] px-2  h-[520px]   ">
        <div className="w-full flex justify-end items-center pl-15">
          <h2 className="w-full text-center text-blue-700 font-bold text-xl border-b-2  ml-3">
            Eşleşme
          </h2>
          <div className="flex justify-end z-50 mr-[-7px] mb-5 ">
            <button
              className="bg-red-600 rounded-full p-2"
              onClick={handleMatchModal}
            >
              <GrClose className="" />
            </button>
          </div>
        </div>
        <div
          className=" py-2 w-full 
       flex flex-col  overflow-x-auto "
        >
          <MatchCard ImgSource={EmployerImg} />
          <MatchCard ImgSource={EmployerImg} />
          <MatchCard ImgSource={EmployerImg} />
          <MatchCard ImgSource={EmployerImg} />
          <MatchCard ImgSource={EmployerImg} />
          <MatchCard ImgSource={EmployerImg} />
          <MatchCard ImgSource={EmployerImg} />
          <MatchCard ImgSource={EmployerImg} />
        </div>
      </div>
    </div>
  );
};

export default Match;
