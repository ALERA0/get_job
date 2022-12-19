import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination, Navigation } from "swiper";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper styles

import SliderCard from "./SliderCard";
import downArrow from "../../../assets/downArrow.svg";


const PopularJobs = () => {
 
  return (
    <div className="w-full  flex justify-center items-center bg-white   ">
      <div className="w-4/5 2xl:w-4/6 h-full flex justify-center items-center ">
        <div className="flex flex-col w-full h-full items-center pt-12">
          <div className="w-full pt-2 pb-10 justify-center items-center">
            <h3 className="flex h-full items-center text-[#052A69] justify-center font-bold   text-3xl">
              Popular Jobs
            </h3>
          </div>
          <div className="w-full  flex px-10 ">
            <Swiper
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode, Pagination, Navigation]}
              className="mySwiper"
              pagination={{
                clickable: true,
              }}
              navigation={true}
              loop={true}
              loopFillGroupWithBlank={true}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                780: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                
              }}
            >
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
            </Swiper>

            
          </div>
          <div className="w-full flex justify-center items-center m-auto py-3">
            <button>
              <div className="flex justify-center border rounded-2xl shadow-lg px-2 py-1 hover:bg-zinc-300 my-3 md:my-0">
                <div className="flex justify-between py-1">
                  <h3 className="flex px-4 ml-2">See More Jobs</h3>
                  <img src={downArrow} alt="" className="pr-2" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularJobs;
