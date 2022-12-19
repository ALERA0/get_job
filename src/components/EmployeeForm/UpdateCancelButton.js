import React from "react";

const UpdateCancelButton = () => {
  return (
    <div className="w-screen   bg-white fixed flex  bottom-0 justify-center items-center border-2 py-1 z-10">
      <div className="flex justify-center items-center  ">
        <button>
          <div className="flex justify-center items-center border-2  rounded-lg py-2 px-44 mr-1 hover:bg-zinc-300 ">
            <h3 className="text-center text-[#052A69] ">Değişiklikten Vazgeç</h3>
          </div>
        </button>

        <button>
          <div className="flex justify-center items-center border-2 border-[#F2B129] bg-[#F2B129] rounded-lg ml-1 py-2 px-44 hover:bg-yellow-300">
            <h3 className="text-center  text-[#052A69] ">Değişiklikten Vazgeç</h3>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UpdateCancelButton;
