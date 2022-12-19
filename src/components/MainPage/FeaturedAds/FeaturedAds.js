import React from "react";
import people1 from "../../../assets/people1.svg";
import people2 from "../../../assets/people2.svg";
import people3 from "../../../assets/people3.svg";
import people4 from "../../../assets/people4.svg";
import PeoplePart from "./PeoplePart";
import downArrow from "../../../assets/downArrow.svg";
import { Disclosure } from "@headlessui/react";

const FeaturedAds = () => {
  return (
    <div className="w-full  flex justify-center items-center bg-[#F7F7F7]  ">
      <div className="w-4/6 h-full flex justify-center items-center ">
        <div className="flex flex-col w-full h-full items-center">
          <h3 className="flex items-center py-5 mt-2  font-bold  text-2xl">
            Öne Çıkan İlanlar
          </h3>
          <div className="md:w-full  flex md:flex-row flex-col mt-4 px-2">
            <PeoplePart People={people1} PeopleLabel="Yeni Mezun" />
            <PeoplePart People={people2} PeopleLabel="Uzman" />
            <PeoplePart People={people3} PeopleLabel="Yönetici" />
            <PeoplePart People={people4} PeopleLabel="Remote" />
          </div>
          <Disclosure>
            {({ open }) => (
              <div>
                <Disclosure.Button className={`${open ? "absolute md:bottom-[-530px] bottom-[-2180px]  left-1 w-full flex justify-center items-center mx-auto my-3" : ""} "w-full flex justify-center items-center mx-auto my-3 "`}>
                  <div className="flex justify-center border rounded-2xl shadow-lg px-2 py-1 hover:bg-zinc-300 my-3 md:my-0 ">
                    <div className="flex justify-between py-1 ">
                      <h3 className="flex px-4 ml-2">See More Sectors</h3>
                      <img
                        src={downArrow}
                        alt=""
                        className={`${
                          open ? "rotate-180 transform" : ""
                        }  px-2`}
                      />
                    </div>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="md:w-full h-full flex md:flex-row flex-col mt-4 px-2 mb-5">
                    <PeoplePart People={people1} PeopleLabel="Yeni Mezun" />
                    <PeoplePart People={people2} PeopleLabel="Uzman" />
                    <PeoplePart People={people3} PeopleLabel="Yönetici" />
                    <PeoplePart People={people4} PeopleLabel="Remote" />
                  </div>
                </Disclosure.Panel>
              </div>
            )}
                      </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAds;
