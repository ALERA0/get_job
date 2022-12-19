import React from "react";
import Logo from "../assets/Navbar/logo.svg";
import whiteLogo from "../assets/Navbar/whiteLogo.svg";
import starIcon from "../assets/Navbar/starIcon.svg";
import handShakeIcon from "../assets/Navbar/handShakeIcon.svg";
import messageIcon from "../assets/Navbar/messageIcon.svg";
import bellIcon from "../assets/Navbar/bellIcon.svg";
import personIcon from "../assets/Navbar/personIcon.svg";
import downArrowIcon from "../assets/Navbar/downArrowIcon.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import LogIn from "./MainPage/LogIn/LogIn";
import Autharizatiom from "./MainPage/LogIn/Autharizatiom";
import Match from "./Match/Match";
import Bildirimler from "./Bildirimler/Bildirimler";
import Star from "./Star/Star";
import OneCikar from "./MainPage/OneCikar/OneCikar";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const [signUpModal, setsignUpModal] = useState(false);
  const handleSıgnUp = () => {
    setsignUpModal(false);
  };
  const [logInModal, setLogInModal] = useState(false);
  const handleLogIn = () => {
    setLogInModal(false);
  };

  const [openMatch, setOpenMatch] = useState(false);
  const handleMatchModal = () => {
    setOpenMatch(false);
  };
  const [openNotif, setOpenNotif] = useState(false);
  const handleNotifModal = () => {
    setOpenNotif(false);
  };
  const [openStar, setOpenStar] = useState(false);
  const handleStarModal = () => {
    setOpenStar(false);
  };

  const [openOneCikar, setOpenOneCikar] = useState(false);
  const handleOneCikarModal = () => {
    setOpenOneCikar(false);
  };

  return (
    <div className="w-screen h-[145px] z-30 bg-white fixed  top-0  ">
      <div className=" flex justify-between items-center w-full h-full ">
        <div className="grid grid-rows-2 w-full h-full border border-t-8 border-b-0 border-yellow-500">
          <div className="flex items-center h-[100px] justify-between">
            <a href="/">
              <img src={Logo} alt="/" className="w-15 h-9  ml-11 my-auto" />
            </a>
            <div className=" mr-11 hidden md:flex">
              <button onClick={() => setOpenOneCikar(true)}>
                <div className="px-8 py-1 rounded-xl border bg-white hover:text-white hover:bg-blue-900 text-[#204686] ">
                  <h2>İlanı Öne Çıkar</h2>
                </div>
              </button>

              <button onClick={() => setLogInModal(true)}>
                <div className="px-8 py-1 rounded-xl border bg-white hover:text-white hover:bg-blue-900 text-[#204686] ">
                  <h2>Sign In</h2>
                </div>
              </button>

              <button onClick={() => setsignUpModal(true)}>
                <div className="px-8 py-1 rounded-xl border bg-white hover:text-white hover:bg-blue-900 text-[#204686] ">
                  <h2>Sign Up</h2>
                </div>
              </button>
              <button onClick={() => setOpenStar(true)}>
                <img
                  src={starIcon}
                  alt=""
                  className="px-2 w-10 h-10 mr-4 rounded-full hover:bg-zinc-500"
                />
              </button>
              <button onClick={() => setOpenMatch(true)}>
                <img
                  src={handShakeIcon}
                  alt=""
                  className="px-2 w-10 h-10 mr-4 rounded-full hover:bg-zinc-500"
                />
              </button>
              <a href="messages">
                <img
                  src={messageIcon}
                  alt=""
                  className="px-2 w-10 h-10 mr-4 rounded-full hover:bg-zinc-500"
                />
              </a>

              <button
                onClick={() => {
                  setOpenNotif(true);
                }}
              >
                <img
                  src={bellIcon}
                  alt=""
                  className="px-2 w-10 h-10 mr-4 rounded-full hover:bg-zinc-500"
                />
              </button>

              <a href="employeeınfo" className="flex">
                <img
                  src={personIcon}
                  alt=""
                  className="px-2 w-10 h-10 rounded-full hover:bg-zinc-500"
                />
                <img src={downArrowIcon} alt="" className="" />
              </a>
            </div>
            <div className="px-10 md:hidden flex " onClick={handleNav}>
              {!nav ? (
                <AiOutlineClose size={23} />
              ) : (
                <AiOutlineMenu size={23} />
              )}
            </div>
            <div
              className={
                !nav
                  ? "fixed left-0 top-0 w-[60%] md:w-[20%]  h-full border-r bg-[#263C91] border-[#4E63B6] z-40 ease-in-out duration-300 "
                  : "fixed left-[-100%] "
              }
            >
              <div className="w-full flex"></div>
              <a href="/">
                <img
                  src={whiteLogo}
                  alt="/"
                  className="w-15 h-9  mx-auto my-6"
                />
              </a>
              <ul className="mt-8 uppercase p-4 text-white">
                <a href="/">
                  <li className="p-4 border-b border-white">Home</li>
                </a>
                <a href="/">
                  <li className="p-4 border-b border-white">Home</li>
                </a>
                <a href="/">
                  <li className="p-4 border-b border-white">Home</li>
                </a>
                <a href="/">
                  <li className="p-4 border-b border-white">Home</li>
                </a>
                <a href="/">
                  <li className="p-4 border-b border-white">Home</li>
                </a>
              </ul>
            </div>
          </div>

          <div className=" w-full  bg-[#F2F2F2]  relative bottom-0 mt-7 flex items-center">
            <ul className="flex items-center  px-7 ">
              <a href="jobs">
                <li
                  className=" px-5 py-2 
           rounded-lg text-slate-500 text-xs font-bold  hover:bg-blue-900 hover:text-white"
                >
                  Jobs
                </li>
              </a>

              <a href="courses">
                <li
                  className="px-5 py-2 
             rounded-lg text-slate-500 text-xs font-bold  hover:bg-blue-900 hover:text-white "
                >
                  Courses
                </li>
              </a>

              <a href="blog">
                <li
                  className=" px-5 py-2 
             rounded-lg text-slate-500 text-xs font-bold  hover:bg-blue-900 hover:text-white "
                >
                  Blog
                </li>
              </a>
              <a href="employeeınfo">
                <li
                  className=" px-5 py-2 
             rounded-lg text-slate-500 text-xs font-bold  hover:bg-blue-900 hover:text-white "
                >
                  Profile
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      {openOneCikar && <OneCikar handleOneCikarModal={handleOneCikarModal} />}
      {openStar && <Star handleStarModal={handleStarModal} />}
      {openNotif && <Bildirimler handleNotifModal={handleNotifModal} />}
      {openMatch && <Match handleMatchModal={handleMatchModal} />}
      {logInModal && <Autharizatiom handleLogIn={handleLogIn} />}
      {signUpModal && <LogIn handleSıgnUp={handleSıgnUp} />}
    </div>
  );
};

export default Navbar;
