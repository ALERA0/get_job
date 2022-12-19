import React from "react";
import Navbar from "../Navbar";
import MessagesCard from "./MessagesCard";
import EmployerImg from "../../assets/Jobs/Employer.svg";

const Messages = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full h-screen px-48  bg-[#003567] flex ">
        <div className="bg-[#003567] shadow-2xl flex  flex-col  w-full px-2 pt-2 h-screen    ">
          <div className="mt-36 flex bg-white h-4/5 ">
            <div className="w-1/3 border-r-2 overflow-x-auto">
              <h2 className="text-center border-b-2 mb-4 py-2 text-lg">
                Mesajlar
              </h2>
              <div className="w-full flex flex-col ">
                <MessagesCard ImgSource={EmployerImg} />
                <MessagesCard ImgSource={EmployerImg} />
                <MessagesCard ImgSource={EmployerImg} />
                <MessagesCard ImgSource={EmployerImg} />
                <MessagesCard ImgSource={EmployerImg} />
                <MessagesCard ImgSource={EmployerImg} />
                <MessagesCard ImgSource={EmployerImg} />
                <MessagesCard ImgSource={EmployerImg} />
                <MessagesCard ImgSource={EmployerImg} />

              </div>
            </div>

            <div className="w-2/3 overflow-x-auto">
              <div className="w-full flex flex-col ">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
