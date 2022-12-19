import React, { useState } from "react";
import OtpField from "react-otp-field";
import { AiFillClockCircle } from "react-icons/ai";
import "./otpinput.css";
import OtpInput from "react18-input-otp";

const ForgotPassword = () => {
  const [value, setValue] = useState("");
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  return (
    <div className=" flex justify-center items-center   z-40 mt-6 ">
      <div className="bg-white shadow-2xl flex justify-center items-center flex-col rounded-t-lg w-[470px]  pt-2">
        <div className="w-full flex justify-center items-center py-1 border-b-2 text-gray-400">
          <p>00:30</p>
          <AiFillClockCircle />
        </div>
        <div className="w-full flex justify-center items-center py-1">
          <h2 className="text-[#04044C] ">
            Telefonunuza gelen doğrulama kodunu giriniz!
          </h2>
        </div>
        <div className="flex flex-row w-full  ">
          <div className="w-full flex flex-row py-4 justify-center items-center ">
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              separator={<span>-</span>}
              inputStyle="inputStyle"
            />
          </div>
        </div>
        <div className="w-full flex mt-5 text-white">
          <button className="w-full py-3 bg-gradient-to-r from-[#D8BC31] to-[#E7D36F] ">Vazgeç</button>
          <button className="w-full py-3 bg-gradient-to-r from-[#090564] to-[#4842B1]  ">Onayla</button>

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
