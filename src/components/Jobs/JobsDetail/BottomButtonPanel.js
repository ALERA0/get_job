import React from 'react'
import StarIcon from "../../../assets/Jobs/StarIcon.svg";
import Like from "../../../assets/Jobs/Like.svg";
import Unlike from "../../../assets/Jobs/Unlike.svg";


const BottomButtonPanel = () => {
  return (
    <div className="w-screen   bg-white fixed flex  bottom-0 justify-center items-center border-2 py-1 z-10">
      <div className="flex justify-center items-center  ">
        <button>
          <div className="flex justify-center items-center  ">
                <img src={Unlike} alt="" />
          </div>
        </button>

        <button>
          <div className="flex justify-center items-center  ">
                <img src={StarIcon} alt="" />
          </div>
        </button>
        <button>
        <div className="flex justify-center items-center  ">
              <img src={Like} alt="" />
        </div>
      </button>
      </div>
    </div>
  )
}

export default BottomButtonPanel