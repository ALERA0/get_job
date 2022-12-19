import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Adds from "./Adds/Adds";
import FeaturedAds from "./FeaturedAds/FeaturedAds";
import GetTheApp from "./GetTheApp/GetTheApp";
import PopularJobs from "./PopularJobs/PopularJobs";
import SearchingPart from "./SearchingPart/SearchingPart";



const MainPage = () => {
  

  return (
    <div className="" >
      <Navbar />
      <div className="w-full h-screen flex flex-col">
        <div className="max-w-full mt-36 flex flex-col ">
          <SearchingPart/>
          <FeaturedAds/>
          <PopularJobs/>
          <Adds/>
          <GetTheApp/>
          <Footer/>
          
       
          
        </div>
      </div>
    </div>
  );
};

export default MainPage;
