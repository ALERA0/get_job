import React from "react";
import { GrClose } from "react-icons/gr";
import YelloLogo from "../../../assets/Navbar/YellowLogo.svg";
import { IoIosRocket } from "react-icons/io";
import { Radio } from "@mui/material";
import { yellow } from "@mui/material/colors";

const OneCikar = ({ handleOneCikarModal }) => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="fixed flex justify-center items-center flex-col  z-40 mt-[-55px] w-full">
      <div className="bg-gradient-to-b from-[#05559F] to-[#190E7B] shadow-2xl flex  flex-col rounded-lg w-[400px] px-2 pt-2  overflow-x-auto   ">
        <div className=" py-2 w-full flex flex-col justify-center items-center  overflow-x-auto ">
          <div className="w-full flex justify-end items-center pl-15">
            <img src={YelloLogo} alt="" className="pl-11 h-14 w-full" />
            <div className="relative mb-5 z-50   ">
              <button
                className="bg-zinc-300 rounded-full p-2"
                onClick={handleOneCikarModal}
              >
                <GrClose className="" />
              </button>
            </div>
          </div>

          <div className="w-full justify-center items-center py-3">
            <IoIosRocket className="fill-white mx-auto w-24 h-24"></IoIosRocket>
          </div>
          <h1 className="text-white text-3xl">İlanını Öne Çıkar!</h1>
          <div className="w-full px-14 py-2">
            <p className="text-white text-center">
              Ödeme sonrası seçilen ilanınız yükseltilecektir!
            </p>
          </div>
          <div className="flex flex-col px-4 w-full">
            <div className=" border rounded-lg flex  items-center py-2">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  color: yellow[800],
                  "&.Mui-checked": {
                    color: yellow[700],
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
              />
              <div className="flex flex-col justify-center items-center mx-auto pr-4">
                <h2 className="text-yellow-500  text-xl">6 Saat Boyunca</h2>
                <h2 className="text-white  text-3xl">17.75 ₺</h2>
              </div>
            </div>
            <div className=" border rounded-lg flex  items-center py-2 mt-2">
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  color: yellow[800],
                  "&.Mui-checked": {
                    color: yellow[700],
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
              />
              <div className="flex flex-col justify-center items-center mx-auto pr-4">
                <h2 className="text-yellow-500  text-xl">24 Saat Boyunca</h2>
                <h2 className="text-white  text-3xl">27.90 ₺</h2>
              </div>
            </div>
            <div className="flex  w-full justify-center mt-6">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-100 w-full text-2xl rounded-lg py-2 text-[#204686] ">
                Tamamla
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center mt-4 px-5">
            <p className="text-center text-white text-xs">
              (Bu ücretlendirme bir adet ilan için geçerlidir.Öne Çıkarma
              özelliği sayesinde ilanınız diğer ilanlar arasından öne çıkar.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCikar;
