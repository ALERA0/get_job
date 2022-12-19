import React from "react";
import getjoblogo from "../assets/getjoblogo.svg";
import twtlogo from '../assets/tiwtternocolor.svg';
import fcblogo from '../assets/facebooknocolor.svg';
import instalogo from '../assets/instanolcolor.svg';
import linkedinlogo from '../assets/linkedinnocolor.svg';
import ytblogo from '../assets/ytbnocolor.svg';
import tiktoklogo from '../assets/tiktok.svg';





const Footer = () => {
  return (
    <div className="w-full h-[400px] bg-[#081251]  flex flex-col text-white mt-16 z-20">
      <div className="w-full h-full pl-20 pt-10 flex flex-row">
        <div className="w-32 justify-center items-center mr-8 hidden md:flex">
          <img
            src={getjoblogo}
            alt=""
            className="w-24 h-20  justify-center items-center"
          />
        </div>
        <div className="w-full h-full flex justify-between md:pl-16 md:pr-24 pr-3">
          <div className="flex flex-col text-left md:mr-0 mr-2">
            <h3 className=" mb-3">JOBS</h3>
            <a href="/" className="text-xs mb-1">
              Contact Us
            </a>
            <a href="/" className="text-xs mb-1">
              Job search
            </a>
            <a href="/" className="text-xs mb-1">
              Browse jobs
            </a>
            <a href="/" className="text-xs mb-1">
              Browse locations
            </a>
            <a href="/" className="text-xs mb-1">
              Popular searches
            </a>
            <a href="/" className="text-xs mb-1">
              Career advice
            </a>
            <a href="/" className="text-xs mb-1">
              Help
            </a>
          </div>
          <div className="flex flex-col text-left">
            <h3 className=" mb-3">RECRUITER</h3>
            <a href="/" className="text-xs mb-1">
              Recruiter site
            </a>
            <a href="/" className="text-xs mb-1">
              Post a job
            </a>
            <a href="/" className="text-xs mb-1">
              CV Search
            </a>
            <a href="/" className="text-xs mb-1">
              Recruiter Advice
            </a>
          </div>
          <div className="flex flex-col text-left">
            <h3 className=" mb-3">COURSES</h3>
            <a href="/" className="text-xs mb-1">
              All Courcess
            </a>
            <a href="/" className="text-xs mb-1">
              Works
            </a>
          </div>
          <div className="flex flex-col text-left">
            <h3 className=" mb-3">BLOG</h3>
            <a href="/" className="text-xs mb-1">
              Popular Articles
            </a>
            <a href="/" className="text-xs mb-1">
              Last Articles
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[70px] mt-3 border border-t-1 border-x-0 border-b-0 border-[#707070] px-32 py-5">
        <div className="w-full flex justify-between items-center">
          <div >
            <p className="text-[#707070] text-sm ">© 2022 by getjob</p>
          </div>
          <div className="flex flex-row justify-between">
              <a href="/"><img src={twtlogo} alt="" className="mx-2 w-5 h-5"/></a>
              <a href="/"><img src={fcblogo} alt="" className="mx-2 w-5 h-5"/></a> 
              <a href="/"><img src={instalogo} alt="" className="mx-2 w-5 h-5"/></a>
              <a href="/"><img src={linkedinlogo} alt="" className="mx-2 w-5 h-5"/></a>
              <a href="/"><img src={ytblogo} alt="" className="mx-2 w-5 h-5"/></a>
              <a href="/"><img src={tiktoklogo} alt="" className="mx-2 w-5 h-5"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
