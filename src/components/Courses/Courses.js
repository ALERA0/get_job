import React from 'react'
import Navbar from "../Navbar";
import viewImg1 from "../../assets/Blog/viewImage.svg";
import viewImg2 from "../../assets/Blog/viewImg2.svg";
import viewImg3 from "../../assets/Blog/viewImg2.svg";
import CoursesCard from './CoursesCard';
import Footer from "../Footer";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full  flex flex-col">
        <div className="max-w-full mt-36 flex flex-col bg-[#F7F7F7] h-full  items-center   ">
          <h3 className="w-full text-center text-xl text-[#204686] py-7 font-bold">
            Courses
          </h3>
          <div className="sm:w-full h-full lg:w-3/5 md:w-4/5 p-2 flex-col items-center">
            <div className="md:w-full w-1/2  flex items-center justify-center  flex-col mx-auto border rounded-3xl shadow-xl mb-3 ">
              <img src={viewImg1} alt="" className="rounded-t-3xl " />
              <div className="w-full flex flex-col">
                <div className="p-4 text-start">
                  <h1 className="text-2xl font-bold">Courses &</h1>
                  <h1 className="text-2xl font-bold">Training</h1>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <p className="pl-4 pb-4 pt-2">14 APRIL 2022</p>
                  <div className="flex  items-center  justify-center my-auto pr-6 ">
                    <button className=" w-full h-full border border-[#199BCD] bg-[#052A69] flex justify-center items-center px-4 py-1 rounded-lg hover:bg-[#F2B129] ">
                      <p className="text-white ">Detail</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-full w-1/2 flex md:flex-row mx-auto flex-col ">
              <CoursesCard imageSource={viewImg2} />
              <CoursesCard imageSource={viewImg2} />
              <CoursesCard imageSource={viewImg2} />
            </div>
            <div className="md:w-full w-1/2 flex md:flex-row mx-auto flex-col ">
              <CoursesCard imageSource={viewImg2} />
              <CoursesCard imageSource={viewImg2} />
              <CoursesCard imageSource={viewImg2} />
            </div>
            <div className="md:w-full w-1/2 flex md:flex-row mx-auto flex-col ">
              <CoursesCard imageSource={viewImg2} />
              <CoursesCard imageSource={viewImg2} />
              <CoursesCard imageSource={viewImg2} />
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Courses