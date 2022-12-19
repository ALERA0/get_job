import React from "react";
import Navbar from "../../Navbar";
import JobsDetailEmployeeImg from "../../../assets/Jobs/JobsDetailEmployee.svg";
import Footer from "../../Footer";
import BottomButtonPanel from "./BottomButtonPanel";

const JobsDetailEmployee = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col">
        <div className="max-w-full mt-36 flex flex-col bg-[#F7F7F7] h-full  items-center  ">
          <div className=" py-7 flex justify-center items-center">
            <h3 className="w-full text-center text-xl text-[#204686] py-3 font-bold">
              Jobs
            </h3>
          </div>
          <div className="w-5/6 h-full lg:w-3/5 md:w-4/5  pb-4 pt-2 items-center flex flex-col rounded-xl bg-white">
            <div className="w-full flex justify-between border-b-2 border-[#FFD26E] ">
              <div className="p-4 flex">
                <img src={JobsDetailEmployeeImg} alt="" className="w-24 h-24" />
                <div className="flex my-auto flex-col pl-5 text-[#052A69]">
                  <h2 className="flex my-auto   font-bold text-xl ">
                    Erdem Yıldırım
                  </h2>
                  <p className="flex ml-2 text-sm">Satış Danışmanı</p>
                </div>
              </div>
              <div className="my-auto">
                <div className="bg-gradient-to-b from-[#EEB129] to-[#FFF2D6] flex flex-col rounded-lg px-2 mx-4">
                    <h2 className="text-[#071E44] font-bold  text-lg ">%70</h2>
                    <p className="text-[#071E44] text-[10px] font-bold">Eşleşme</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col py-3 px-4 w-full">
              <h3 className="text-[#071E44] text-sm pt-3 ">Firma Bilgileri</h3>
            </div>
            <div className="w-full flex flex-col px-4 pb-2 ">
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
            <div className="flex flex-col pb-3 pt-1 px-4 w-full">
              <h3 className="text-[#071E44] text-sm pt-3 ">Gerekli Şartlar</h3>
            </div>
            <div className="w-full flex flex-col px-4 pb-2 ">
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
            <div className="w-full flex flex-col px-4 pb-2 flex-wrap ">
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
            <div className="w-full flex flex-col px-4 pb-2 flex-wrap ">
              <h3 className="text-[#071E44] text-sm pt-3 pb-2 ">Video</h3>
              <div className="w-full h-72 bg-zinc-500 rounded-xl"></div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <BottomButtonPanel/>
    </div>
  );
};

export default JobsDetailEmployee;
