import React from "react";
import Navbar from "../../Navbar";
import BlogDetImg from "../../../assets/BlogDetail/BlogDetImg.svg";
import ItemSign from "../../../assets/BlogDetail/ItemSign.svg";
import ProfilePic from "../../../assets/BlogDetail/ProfilePic.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode ,Pagination, Navigation } from "swiper";
import BlogCard from "../BlogCard";
import viewImg2 from "../../../assets/Blog/viewImg2.svg";
import Footer from "../../Footer";

const BlogDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col">
        <div className="max-w-full mt-36 flex flex-col bg-[#F7F7F7] h-full  items-center  ">
          <h3 className="w-full text-center text-xl text-[#204686] py-7 font-bold">
            Blog
          </h3>
          <div className="w-5/6 h-full lg:w-3/5 md:w-4/5 p-2 items-center flex flex-col">
            <div className="flex flex-wrap justify-center items-center sm:px-24 pb-4">
              <h2 className="text-4xl font-bold text-center ">
                Welcome To SKY International Gateway Company Limited.
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center my-3 pb-4 ">
              <p className="text-center px-14 text-[#707070] ">
                Greetings from SKY! Thank you for your interest on visiting our
                website. May you exploration about us begin. SKY International
                Gateway Co., Ltd is an education institute, hospitality on-job
                training school / center and recruitment service provider based
                in Yangon, Myanmar.
              </p>
            </div>
            <div>
              <img src={BlogDetImg} alt="" />
            </div>
            <div className="grid grid-rows-2 md:grid-cols-2 gap-4 pt-8 mt-4">
              <div className="border-l-8 border-[#F2B129] px-3">
                <p className="ml-2 text-[11px]">
                  We have made a recruitment and staffing partnership with
                  Marvel Land FZ-CO, based in Dubai, United Arab Emirates
                </p>
              </div>
              <div className="border-l-8 border-[#F2B129] px-3 ">
                <p className="ml-2 text-[11px]">
                  Our businesses are relevantly divided under three brands; SKY
                  Education Institute, SKY Hospitality and Marvel Land FZ-CO.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-start w-full flex-col pb-16">
              <h2 className="text-[26px] font-extrabold text-start">
                What Is The Gutenberg Editor?
              </h2>
              <p className="pt-4 text-[11px] text-[#333333] ">
                Gutenberg, also called block editor or WordPress editor is the
                visual editor in WordPress. Since the launch of WordPress 5.0 in
                2018, the block editor has been the default editor that has
                replaced the classic editor. Where you were previously filling
                content in different CMS fields, you drag with the Gutenberg
                with different blocks until the layout of the page is the way
                you want it. In this way you create media rich pages. With the
                block editor you can add different blocks br such as paragraphs,
                images, headings, bullet points, videos galleries and much more.{" "}
                <br />
                <br /> Gutenberg gives you more freedom to arrange the pages of
                your website according to your own wishes. The blocks are still
                created and defined by a developer, but you as an administrator
                can work with them in the back-end of your website at your own
                discretion. Because the blocks are designed by our developer,
                the house style and appearance of the website remain consistent.
              </p>
            </div>
            <div className="flex flex-wrap justify-start w-full flex-col pt-3 ">
              <h2 className="text-[26px]  font-extrabold text-start">
                Why You Should Switch To The Gutenberg Editor Now?
              </h2>
              <p className="pt-4 text-[11px] text-[#333333] pb-10 ">
                In May 2022, WordPress 6.0 was released, solving problems
                experienced by the community and further expanding the Gutenberg
                editor. WordPress is constantly developing itself and the
                Gutenberg editor. This means that we will also come to a point
                where the ‘old’ classic editor is no longer supported. At the
                moment, WordPress indicates that the classic editor will no
                longer be supported from December 31, 2022. If you choose to
                continue using the classic editor, this entails a number of
                disadvantages, such as lagging behind the competition, missing
                the latest updates and being less able to set up pages yourself.
                In addition, continuing to use the classic editor also entails
                other risks:
              </p>
            </div>
            <div className="w-full flex py-4 flex-wrap">
              <img src={ItemSign} alt="" className="w-2 h-2 my-auto" />
              <p className="px-2 text-[11px] text-[#333333 ">
                Compatibility issues: New updates and additions will no longer
                be supported.
              </p>
            </div>
            <div className="w-full flex flex-wrap pb-6">
              <img src={ItemSign} alt="" className="w-2 h-2 my-auto" />
              <p className="px-2 text-[11px] text-[#333333">
                Bug fixes: Hardly any time is spent fixing bugs in the classic
                editor. This may mean that you will no longer be able to edit
                content in the future.
              </p>
            </div>
            <div className="w-full flex flex-wrap pb-6">
              <p className=" text-[11px] text-[#333333">
                With these risks ahead, we recommend switching to the new
                Gutenberg editor. We also use the new Gutenberg editor for new
                projects. For example, our customers can arrange pages according
                to their own wishes with the blocks created by the developer.
                Are you curious what a website with Gutenberg blocks can look
                like? Then take a look at the website of
                <span className="text-[#199BCD] ml-1 underline ">
                  <b>
                    <a href="/">
                      Surplus , Geological Survey of the Netherlands , BModesto
                      or Koopman International .
                    </a>
                  </b>
                </span>
              </p>
            </div>
            <div className="w-full flex flex-wrap pt-4 pr-4 pb-12 ">
              <img src={ProfilePic} alt="" className="w-16 h-16 " />
              <div className="flex flex-col flex-wrap py-1 justify-center pl-4">
                <h3 className="text-xl font-semibold">Aylin Yurtsever</h3>
                <p className="text-[11px] ">Getjob’s Writer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col  bg-[#F2F2F2]">
        <div className="w-5/6 h-full lg:w-3/5 md:w-4/5 p-2 items-center flex flex-col mx-auto  py-16">
          <div className="w-full flex py-4">
            <h2 className="text-[#204686] ">Other Articles</h2>
          </div>
          <div className="w-full flex">
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
            
            
          }}
        >
              <SwiperSlide>
                <BlogCard imageSource={viewImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard imageSource={viewImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard imageSource={viewImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard imageSource={viewImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard imageSource={viewImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard imageSource={viewImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard imageSource={viewImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard imageSource={viewImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard imageSource={viewImg2} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default BlogDetail;
