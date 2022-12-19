import React from "react";
import Navbar from "../../Navbar";
import LeftArrow from "../../../assets/Jobs/LeftArrow.svg";
import JobsDetailImgSource from "../../../assets/Jobs/Employer.svg";
import Footer from "../../Footer";
import BottomButtonPanel from "./BottomButtonPanel";


const JobsDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col">
        <div className="max-w-full mt-36 flex flex-col bg-[#F7F7F7] h-full  items-center  ">
          <div className=" py-7 flex justify-center items-center">
            <img
              src={LeftArrow}
              alt=""
              className="  flex justify-center items-center w-3 h-3 mr-3"
            />
            <h3 className="w-full text-center text-xl text-[#204686] py-3 font-bold">
              Job's Detail
            </h3>
          </div>
          <div className="w-5/6 h-full lg:w-3/5 md:w-4/5 px-2 pb-4 pt-2 items-center flex flex-col rounded-xl bg-white">
            <div className="w-full h-52  bg-gradient-to-b from-red-400   via-red-100 to-white flex justify-center items-center rounded-t-xl  ">
              <div className="flex my-auto mx-auto ">
                <img src={JobsDetailImgSource} alt="" className="w-20 h-20 " />
              </div>
            </div>
            <div className="w-full bg-[#081F43] pl-3 flex flex-col text-white">
              <h2 className="text-xl  pt-2 font-bold ">Arçelik</h2>
              <p className="text-xs pb-2">Satış Danışmanı, arıyor</p>
            </div>
            <div className="flex flex-col py-3 px-2 w-full">
              <h3 className="text-[#071E44] text-sm pt-3 ">Firma Bilgileri</h3>
            </div>
            <div className="w-full flex flex-col px-2 pb-2 ">
              <div className="w-full flex justify-between text-xs py-1">
                <p className="text-[#868686] ">Firma Adı</p>
                <p className="text-[#062CBC] ">Arçelik</p>
              </div>
              <div className="w-full flex justify-between text-xs py-1">
                <p className="text-[#868686] ">Sektör</p>
                <p className="text-[#062CBC] ">Teknoloji</p>
              </div>
              <div className="w-full flex justify-between text-xs py-1">
                <p className="text-[#868686] ">Kuruluş Yılı</p>
                <p className="text-[#062CBC] ">1987</p>
              </div>
              <div className="w-full flex justify-between text-xs py-1 border-b-2 pb-6">
                <p className="text-[#868686] ">Çalışan Sayısı</p>
                <p className="text-[#062CBC] ">30</p>
              </div>
            </div>
            <div className="flex flex-col pb-3 pt-1 px-2 w-full">
              <h3 className="text-[#071E44] text-sm pt-3 ">Gerekli Şartlar</h3>
            </div>
            <div className="w-full flex flex-col px-2 pb-2 ">
              <div className="w-full flex justify-between text-xs py-1">
                <p className="text-[#868686] ">Aranılan Pozisyon</p>
                <p className="text-[#062CBC] ">Satış Danışmanı</p>
              </div>
              <div className="w-full flex justify-between text-xs py-1">
                <p className="text-[#868686] ">Dil</p>
                <p className="text-[#062CBC] ">İngilizce, Almanca</p>
              </div>
              <div className="w-full flex justify-between text-xs py-1">
                <p className="text-[#868686] ">Meslek</p>
                <p className="text-[#062CBC] ">Satış Danışmanı</p>
              </div>
              <div className="w-full flex justify-between text-xs py-1">
                <p className="text-[#868686] ">Deneyim yılı </p>
                <p className="text-[#062CBC] ">3 - 5 yıl</p>
              </div>
              <div className="w-full flex justify-between text-xs py-1">
                <p className="text-[#868686] ">Maaş</p>
                <p className="text-[#062CBC] ">3.500₺ - 5.000₺ yıl</p>
              </div>
              <div className="w-full flex justify-between text-xs py-1">
                <p className="text-[#868686] ">Eğitim Durumu</p>
                <p className="text-[#062CBC] ">Ön Lisans Mezunu</p>
              </div>
              <div className="w-full flex justify-between text-xs py-1 border-b-2 pb-6">
                <p className="text-[#868686] ">Çalışma Şekli</p>
                <p className="text-[#062CBC] ">Tam Zamanlı</p>
              </div>
            </div>
            <div className="w-full flex flex-col px-2 pb-2 flex-wrap ">
              <h3 className="text-[#071E44] text-sm pt-3 pb-2 ">Ön Yazı</h3>
              <p className="text-[#868686] text-xs border-b-2 pb-6 ">
                Prezentabl, diksiyonu düzgün, iletişim kabiliyetleri yüksek,
                enerjik ve sorumluluk sahibi, kurallara uyan, çalıştığı firmaya
                ve arkadaşlarına saygı duyan, bir çalışma arkadaşı arıyoruz.
                Prezentabl, diksiyonu düzgün, iletişim kabiliyetleri yüksek,
                enerjik ve sorumluluk sahibi, kurallara uyan, çalıştığı firmaya
                ve arkadaşlarına saygı duyan, bir çalışma arkadaşı arıyoruz.
              </p>
            </div>
            <div className="w-full flex flex-col px-2 pb-2 flex-wrap ">
              <h3 className="text-[#071E44] text-sm pt-3 pb-2 ">Video</h3>
              <div className="w-full h-72 bg-zinc-500 rounded-xl"></div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
      <BottomButtonPanel/>
    </div>
  );
};

export default JobsDetail;
