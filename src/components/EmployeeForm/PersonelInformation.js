import React from "react";
import InputField from "./InputField";
import MultiSelectOption from "./MultiSelectOption";
import SelectOption from "./SelectOption";
import { SlGraduation } from "react-icons/sl";
import { MdSlowMotionVideo } from "react-icons/md";


const PersonelInformation = () => {
  return (
    <div className="px-9 py-9">
      <div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg  ">
          Kişisel Bilgiler
        </h3>
        <form className="w-full">
          <InputField type="text" labelFiled="Ad" />
          <InputField type="text" labelFiled="Soyad" />
          <InputField type="date" labelFiled="Doğum Tarihi" />
          <SelectOption selectLabel="Cinsiyet" />
          <SelectOption selectLabel="İl" />
          <SelectOption selectLabel="İlçe" />
          <SelectOption selectLabel="Askerlik Durumu" />
          <MultiSelectOption labelFiled="Ehliyet" />
        </form>
        <h3 className="mt-6 mb-8 text-blue-900 font-bold text-lg">
          Eğitim Durumu
        </h3>
        <form className="w-full">
          <SelectOption selectLabel="Mezuniyet Durumu" />
          <SelectOption selectLabel="Mezun Olunan Okul" />
          <SelectOption selectLabel="Program" />
          <InputField type="date" labelFiled="Mezuniyet Tarihi" />
        </form>
        <h3 className="mt-6 mb-8 text-blue-900 font-bold text-lg">
          İş Bilgileri
        </h3>
        <form className="w-full">
          <SelectOption selectLabel="Meslek" />
          <SelectOption selectLabel="İş Deneyim Süresi" />
        </form>
        <h3 className="mt-6 mb-8 text-blue-900 font-bold text-lg">
          Aranılan İşler
        </h3>
        <form className="w-full">
          <MultiSelectOption labelFiled="İşler" />
        </form>
        <h3 className="mt-6 mb-8 text-blue-900 font-bold text-lg">
          Maaş Beklentisi
        </h3>
        <form className="w-full">
          <SelectOption selectLabel="Maaş" />
        </form>
        <h3 className="mt-6 mb-8 text-blue-900 font-bold text-lg">
          Çalışma Şekli
        </h3>
        <form className="w-full">
          <MultiSelectOption labelFiled="Çalışma Zaman Aralığı" />
        </form>
        <h3 className="mt-6 mb-8 text-blue-900 font-bold text-lg">
          Yabancı Dil
        </h3>
        <form className="w-full">
          <MultiSelectOption labelFiled="Dil" />
        </form>
        <div className="relative ">
          <h3 className="mt-6 mb-5 text-blue-900 font-bold text-lg">
            Yetenekkler
          </h3>
          <InputField type="text" labelFiled="Yeteneklerinizi Yazın" />
          <button className="absolute top-14 right-2.5 z-20 cursor-pointer bg-[#F0F4FF] text-[#284B84] translate-x-[2px] border-1 px-2 rounded-md border-[#707070] ">
            Ekle
          </button>
        </div>
        <div className="relative ">
          <h3 className="mt-6 mb-5 text-blue-900 font-bold text-lg">Hobiler</h3>
          <InputField type="text" labelFiled="Hobilerinizi Yazın" />
          <button className="absolute top-14 right-2.5 z-20 cursor-pointer bg-[#F0F4FF] text-[#284B84] translate-x-[2px] border-1 px-2 rounded-md border-[#707070] ">
            Ekle
          </button>
        </div>
        <h3 className="mt-6 mb-8 text-blue-900 font-bold text-lg">Linkler</h3>
        <form className="w-full">
          <InputField type="text" labelFiled="Website Link'i" />
          <InputField type="text" labelFiled="Facebook Link'i" />
          <InputField type="text" labelFiled="Twitter Link'i" />
          <InputField type="text" labelFiled="Instagram Link'i" />
        </form>
        <h3 className="mt-6 mb-8 text-blue-900 font-bold text-lg">
          Portfolyo / Dosyalar
        </h3>
        <div className="w-full h-36 bg-white p-2 rounded-md border-2 border-[#EBECF8] relative">
          <div className="w-full h-full bg-zinc-200 flex  justify-center items-center rounded-md relative ">
            <label
              for="diploma"
              className="flex flex-col justify-center items-center hover:bg-zinc-100 border-0 rounded-lg"
            >
              <SlGraduation className="flex justify-center items-center w-9 h-9 " />
              <p>Diploma Ekle</p>
            </label>
            <input type="file" className="hidden " id="diploma" />
          </div>
        </div>
        <h3 className="mt-8 mb-4 text-blue-900 font-bold text-lg">Ön Yazı</h3>
        <div className="w-full ">
          <textarea
            className="border-2 border-[#EBECF8] h-[171px] w-full rounded-lg"
            placeholder="Tecrübeli, arızayı tek seferde ve doğru  tespit edebilen. Mümkün olduğunca  yerinde arızayı giderebilen. Sorumluluk  sahibi, kurallara uyan ve saygılı. Çalıştığı  firmaya ve arkadaşlarına saygı duyan, bir çalışma arkadaşı arıyoruz."
          />
        </div>
        <h3 className="mt-8 mb-4 text-blue-900 font-bold text-lg">Özgeçmiş</h3>
        <div className="w-full">
          <div className="w-full h-12 bg-white border-2 border-[#EBECF8] p-1  rounded-md">
            <div className="w-full bg-zinc-200 h-full flex justify-center items-center border-2 rounded-md ">
              <label for="Cv" className="flex justify-center items-center  ">
                <p className="flex justify-center items-center text-[#5C5454] text-xs hover:bg-white border-0 rounded-lg p-2">
                  CV Ekle
                </p>
              </label>
              <input type="file" id="Cv" className="hidden" />
            </div>
          </div>
        </div>
        <h3 className="mt-8 mb-4 text-blue-900 font-bold text-lg">
          Videolu Özgeçmiş
        </h3>
        <div className="w-full">
          <div className="w-full h-[461px] bg-white  p-3 ">
            <div className="w-full h-full bg-zinc-200 border rounded-md flex justify-center items-center">
              <label
                for="video"
                className="flex flex-col justify-center items-center hover:bg-zinc-100 border-0 rounded-lg h-24 w-24"
              >
                <MdSlowMotionVideo className="flex justify-center items-center w-14 h-14" />
                <p className="flex justify-center items-center text-[#5C5454] text-xs  rounded-lg p-2">
                  Video Ekle
                </p>
              </label>
              <input type="file" id="video" className="hidden" />
            </div>
          </div>
        </div>
        <h3 className="mt-8 mb-4 text-blue-900 font-bold text-lg">
          Konumunuz
        </h3>
        
      </div>
    </div>
  );
};

export default PersonelInformation;
