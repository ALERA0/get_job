import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import ForgotPassword from "./ForgotPassword";

const Autharizatiom = ({ handleLogIn }) => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  return (
    <div className=" flex justify-center items-center   z-40 mt-6 ">
      <div
        className={`${
          forgotPassword
            ? "hidden"
            : "flex flex-col  justify-center items-center"
        } bg-white shadow-2xl    rounded-lg w-[470px] px-2  `}
      >
        {!forgotPassword && (
          <div>
          <div className="flex justify-end z-50 mr-[-35px] ">
              <button
                className="bg-red-500 rounded-full p-2"
                onClick={handleLogIn}
              >
                <GrClose className="" />
              </button>
            </div>
            <div className="w-full flex justify-between  py-3 px-2">
              <h2 className="text-xl text-gray-500 ">Giriş Yap</h2>
              <button onClick={handleForgotPassword}>
                <BsQuestionCircle />
              </button>
            </div>
            <div className="flex w-full  shadow-xl  mb-4">
              <div
                className="w-full flex py-3 bg-zinc-200  justify-center items-center   "
                onClick={""}
              >
                <BsFillPersonFill className="ml-3 mr-7 flex justify-center items-center w-7 h-7 " />
                <input
                  type="email"
                  className="bg-zinc-200 w-full  outline-none focus:border-b-2 focus:border-blue-500 mr-3"
                  placeholder="E-posta veya Telefon"
                />
              </div>
            </div>
            <div className="flex w-full  shadow-xl  mb-1">
              <div
                className="w-full flex py-3 bg-zinc-200  justify-center items-center   "
                onClick={""}
              >
                <FaKey className="ml-3 mr-7 flex justify-center items-center w-6 h-6 fill-green-600" />
                <input
                  type="password"
                  className="bg-zinc-200 w-full  outline-none focus:border-b-2 focus:border-blue-500 "
                  placeholder="Şifreniz"
                />
                <div className=" px-3 flex ">
                  <div className="rounded-full hover:bg-white mr-2 justify-center items-center p-1 ">
                    <AiFillEyeInvisible className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex mb-3">
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Beni Hatırla" />
              </FormGroup>
            </div>
            <div className="w-full flex mb-4">
              <button className=" mx-auto bg-gradient-to-r from-yellow-500  to-white px-40 py-4 rounded-lg shadow-md hover:from-white hover:to-[#05003E]  ">
                <h2 className="text-xl font-bold text-[#05003E]">Giriş Yap</h2>
              </button>
            </div>
            <div className="w-full bg-gray-400 flex py-4 mb-2">
              <div className="flex mx-auto justify-center items-center">
                <h3 className="mr-4">Henüz bir hesabınız yok mu?</h3>
                <button className="border py-1 px-2 border-black font-bold hover:bg-zinc-300 ">
                  <h1>Kayıt Ol</h1>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {forgotPassword && <ForgotPassword/>}
    </div>
  );
};

export default Autharizatiom;
