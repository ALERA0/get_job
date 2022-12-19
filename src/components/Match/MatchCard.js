import React from 'react'

const MatchCard = ({ImgSource}) => {
  return (
    <div className="w-full h-full flex flex-col p-1">
          <div className="bg-zinc-200 w-full flex flex-col  py-1 px-2 rounded-lg hover:bg-zinc-400">
            <div className="w-full flex  justify-start ">
              <div className="w-full flex mt-2 px-2">
                <img src={ImgSource} alt="" className="w-12 h-12" />
                <div className="w-full flex flex-wrap pl-3 pr- text-[#07043B] text-md">
                  <p>
                    <span className="font-bold">Arçelik</span> ile eşleşme
                    sağladınız!
                  </p>
                  <p> Hemen iletişime geç!</p>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <h2 className="text-center">Süre Sayacı</h2>
            </div>
          </div>
        </div>
  )
}

export default MatchCard