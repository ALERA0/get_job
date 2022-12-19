import React from "react";
import { GrClose } from "react-icons/gr";
import StarCard from "./StarCard";
import EmployerImg from "../../assets/Jobs/Employer.svg";
import { BsPeople } from "react-icons/bs";

const Star = ({ handleStarModal }) => {
  return (
    <div className=" flex justify-center items-center  flex-col z-40 mt-6 ">
      <div className="bg-white shadow-2xl flex  flex-col rounded-lg w-[470px] px-2  h-[520px]    ">
        <div className="w-full flex justify-end items-center pl-15">
          <h2 className="w-full text-center text-blue-700 font-bold text-xl border-b-2 py-3 ml-3">
            Star
          </h2>
          <div className="flex justify-end z-50 mr-[-7px] mb-5 ">
            <button
              className="bg-red-600 rounded-full p-2"
              onClick={handleStarModal}
            >
              <GrClose className="" />
            </button>
          </div>
        </div>
        <div className="  w-full flex flex-col  overflow-x-auto ">
          <h2 className="text-blue-700 font-bold text-xl pl-4  w-full border-b-2 py-2">
            Bu hafta
          </h2>
          <StarCard
            ImgSource={EmployerImg}
            ıconSource={<BsPeople className="w-full h-full" />}
            CompanyName={"Arçelik"}
            labelBildirim={"Sizinle bir mülakat gerçekleştirmek istiyor!"}
            time={"15dk"}
          />
          <StarCard
            ImgSource={EmployerImg}
            ıconSource={<BsPeople className="w-full h-full" />}
            CompanyName={"Arçelik"}
            labelBildirim={"Sizinle bir mülakat gerçekleştirmek istiyor!"}
            time={"15dk"}
          />
          <h2 className="text-blue-700 font-bold text-xl pl-4  w-full border-b-2 py-2">
            Geçen Hafta
          </h2>
          <StarCard
            ImgSource={EmployerImg}
            ıconSource={<BsPeople className="w-full h-full" />}
            CompanyName={"Arçelik"}
            labelBildirim={"Sizinle bir mülakat gerçekleştirmek istiyor!"}
            time={"15dk"}
          />
          <StarCard
            ImgSource={EmployerImg}
            ıconSource={<BsPeople className="w-full h-full" />}
            CompanyName={"Arçelik"}
            labelBildirim={"Sizinle bir mülakat gerçekleştirmek istiyor!"}
            time={"15dk"}
          />
        </div>
      </div>
    </div>
  );
};

export default Star;
