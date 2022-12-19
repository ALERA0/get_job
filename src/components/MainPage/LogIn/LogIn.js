import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./phoneInput.css";
import Autharizatiom from "./Autharizatiom";

const LogIn = ({ handleSıgnUp }) => {
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState();
  const [openAuth, setOpenAuth] = useState(false);
 
  const handleAuth = () => {
    setOpenAuth(true);
  };
  const handleSignIn=()=>{
    setOpenAuth(false)
  }
  
  return (
    <div className=" flex justify-center items-center   z-40 mt-6 ">
      <div className={`${openAuth ? "hidden" : "flex flex-col  justify-center items-center" } bg-white shadow-2xl    rounded-lg w-[470px] px-2 pt-2 `}  >
        {!openAuth && (
          <div>
            <div className="flex justify-end z-50 mr-[-40px] ">
              <button
                onClick={handleSıgnUp}
                className="bg-red-500 rounded-full p-2"
              >
                <GrClose className="" />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-[#5494DD]" : "bg-zinc-500"}
    relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${
                    enabled ? "translate-x-9 bg-yellow-400" : "translate-x-0"
                  }
      pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
            <div className="flex justify-center items-center font-bold mb-1">
              {enabled && <h2>Telefon Numarası</h2>}
              {!enabled && <h2>Mail Adresi</h2>}
            </div>
            {enabled && (
              <div className="flex w-full  shadow-xl  mb-4  ">
                <div className="w-full py-3 px-2 bg-zinc-200">
                  <PhoneInput
                    className="w-full bg-zinc-200 outline-none  "
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
            )}
            {!enabled && (
              <div className="flex w-full  shadow-xl  mb-4">
                <div
                  className="w-full flex py-3 bg-zinc-200  justify-center items-center   "
                  onClick={""}
                >
                  <BsFillPersonFill className="ml-3 mr-7 flex justify-center items-center w-7 h-7 " />
                  <input
                    type="email"
                    className="bg-zinc-200 w-full  outline-none focus:border-b-2 focus:border-blue-500 mr-3"
                    placeholder="E-posta Adresiniz"
                  />
                </div>
              </div>
            )}
            <div className="flex w-full  shadow-xl  mb-4">
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
            <div className="flex w-full  shadow-xl  mb-4">
              <div
                className="w-full flex py-3 bg-zinc-200  justify-center items-center   "
                onClick={""}
              >
                <FaKey className="ml-3 mr-7 flex justify-center items-center w-6 h-6 fill-green-600 " />
                <input
                  type="password"
                  className="bg-zinc-200 w-full  outline-none focus:border-b-2 focus:border-blue-500 "
                  placeholder="Tekrar Şifre"
                />
                <div className=" px-3 flex ">
                  <div className="rounded-full hover:bg-white mr-2 justify-center items-center p-1 ">
                    <AiFillEyeInvisible className="w-6 h-6 " />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex mb-4">
              <button
                onClick={handleAuth}
                className=" mx-auto bg-gradient-to-r from-[#05003E]  to-white px-32 py-4 rounded-lg shadow-md hover:from-white hover:to-[#05003E]  "
              >
                <h2 className="text-white font-bold">Kaydı Tamamla</h2>
              </button>
            </div>
            <div className=" mt-2 ">
              <a href="/">
                <h2 className="text-center underline hover:text-blue-500 ">
                  Kullanım Ve Gizlilik Koşulları
                </h2>
              </a>
            </div>
            <div className="w-full bg-gray-400 flex py-4 mb-2">
              <div className="flex mx-auto justify-center items-center">
                <h3 className="mr-4">Zaten Bir Hesabınız Var Mı?</h3>
                <button className="border py-1 px-2 border-black font-bold hover:bg-zinc-300 " onClick={handleAuth}>
                  <h1>Giriş Yap</h1>
                </button>
              </div>
            </div>
          </div>
        )}
        
      </div>
      
      {openAuth && <Autharizatiom  handleSignIn={handleSignIn} />}
    </div>
  );
};

export default LogIn;
