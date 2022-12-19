import React from "react";

const PeoplePart = ({ People, PeopleLabel }) => {
  return (
    <div className="flex flex-col bg-white border rounded-3xl shadow-lg mr-2 mb-2 md:mb-0 hover:bg-blue-200  ">
      <a href="/" className="flex   flex-col ">
        <img src={People} alt="" className="rounded-2xl " />
        <h3 className="mt-1 flex text-start justify-start pl-1 pt-2 pb-5 ml-3 text-[#052A69] text-sm font-bold ">
          {PeopleLabel}
        </h3>
      </a>
    </div>
  );
};

export default PeoplePart;
