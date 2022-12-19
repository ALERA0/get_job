import React from "react";
import LabelSamp from "./LabelSamp";
import webImage from "../../assets/webimage.svg";
import facebookImage from "../../assets/facebook.svg";
import twitterImage from "../../assets/twitter.svg";
import InstaImg from "../../assets/Insta.svg";


const PersonelInfoResult = () => {
  return (
    <div className="p-9">
      <div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">
          Kişisel Bilgiler
        </h3>
        <LabelSamp InfoField="Ad Soyad" FilledField="Erdem Yıldırım" />
        <LabelSamp InfoField="Doğum Tarihi" FilledField="06.14.1992" />
        <LabelSamp InfoField="Cinsiyet" FilledField="Erkek" />
        <LabelSamp InfoField="Ehliyet" FilledField="B2" />
        <LabelSamp InfoField="İl - İlçe" FilledField="İstanbul / Fatih" />
        <LabelSamp InfoField="Askerlik Durumu" FilledField="Yapıldı" />
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">
          Eğitim Durumu
        </h3>
        <LabelSamp InfoField="Mezuniyet Durumu" FilledField="Yüksek Lisans" />
        <LabelSamp
          InfoField="Mezun Olunan Okul"
          FilledField="Bilkent Üniversitesi"
        />
        <LabelSamp InfoField="Program" FilledField="İşletme Ana Bilim Dalı" />
        <LabelSamp InfoField="Mezuniyet Tarihi" FilledField="20 Temmuz 2020" />
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">
          İş Bilgileri
        </h3>
        <LabelSamp InfoField="Meslek" FilledField="Satış Pazarlama" />
        <LabelSamp InfoField="İş Deneyim Süresi" FilledField="0 - 1 yıl" />
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">
          Aranılan İşler
        </h3>
        <LabelSamp
          InfoField="İşler"
          FilledField="Bilişim, Ticaret, Hizmet, Turizm"
        />
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">
          Maaş Beklentisi
        </h3>
        <LabelSamp InfoField="Maaş" FilledField="2.500₺  -  3.500₺" />
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">
          Çalışma Şekli
        </h3>
        <LabelSamp
          InfoField="Çalışma Şekli"
          FilledField="Tam Zamanlı, Dönemsel"
        />
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">
          Yabancı Dil
        </h3>
        <LabelSamp InfoField="Dil" FilledField="İngilizce" />
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">
          Yetenekler
        </h3>
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">Hobi</h3>
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">
          Linkler
        </h3>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row mb-2">
            <div className="flex justify-between items-center mr-8">
              <img src={webImage} alt="" className="p-1" />
              <p className="text-[#868686] ">Websitesi</p>
            </div>
            <div className="flex items-center">
              <a href="/" className="text-[#062CBC]">www.erdemyildirim.com</a>
            </div>
          </div>
          <div className="w-full flex flex-row mb-2">
            <div className="flex justify-between items-center mr-8">
              <img src={facebookImage} alt="" className="p-1" />
              <p className="text-[#435390] ">Facebook</p>
            </div>
            <div className="flex items-center">
              <a href="/" className="text-[#062CBC]">facebook/erdemyildirim</a>
            </div>
          </div>
          <div className="w-full flex flex-row mb-2">
            <div className="flex justify-between items-center mr-8">
              <img src={twitterImage} alt="" className="p-1" />
              <p className="text-[#28A6DE] ">Twitter</p>
            </div>
            <div className="flex items-center">
              <a href="/" className="text-[#062CBC]">twitter/erdemyildirim</a>
            </div>
          </div>
          <div className="w-full flex flex-row mb-2">
            <div className="flex justify-between items-center mr-8">
              <img src={InstaImg} alt="" className="p-1" />
              <p className="text-[#8635A3] ">Instagram</p>
            </div>
            <div className="flex items-center ">
              <a href="/" className="text-[#062CBC]">instagram/erdemyildirim</a>
            </div>
          </div>
        </div>
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">Diploma</h3>
        {/*Diploma fonk.*/}
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">Portfolyo / Dosyalar</h3>
        {/*Portfolyo Dosyalar fonk.*/}
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
        <h3 className="mb-6 mt-3   text-blue-900 font-bold text-lg text-left ">Önyazı</h3>
        {/*önyazı fonk.*/}
        <div className="w-full border border-b-1 border-x-0 border-t-0  border-[#E5E5E5] mt-7"></div>
      </div>
    </div>
  );
};

export default PersonelInfoResult;

