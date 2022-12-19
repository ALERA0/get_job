import React from "react";
import ProfiePhoto from "../../assets/ProfilePhoto.svg";
import questionMark from "../../assets/questionMark.svg";
import pencil from "../../assets/Pencil.svg";
import eye from "../../assets/eye.svg";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const FirstBorder = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="w-full flex justify-between  border-b-4  border-yellow-500  ">
      <div className="w-32 h-32 py-4 pl-6">
        <img src={ProfiePhoto} alt="" />
      </div>
      <div className="flex flex-col pt-3 pr-3 ">
        <div className="flex justify-end">
          <img src={questionMark} alt="" className="p-2" />
          <a href="settings" >
            <img src={pencil} alt="" className="p-2 mt-1" />
          </a>
        </div>
        <div className="flex items-center ">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-[#5494DD]" : "bg-zinc-500"}
    relative inline-flex h-[22px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 mr-3`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${
                enabled ? "translate-x-7 bg-yellow-400" : "translate-x-0"
              }
      pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <div className="flex w-full pr-4 pt-2">
            <img src={eye} alt="" className="w-10 h-10 px-2" />
            <p className="w-full text-lg mt-1">Profili Gizle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBorder;
