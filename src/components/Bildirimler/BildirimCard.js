import React from 'react'

const BildirimCard = ({ImgSource,ıconSource,labelBildirim,CompanyName,time}) => {
  return (
    <div className="w-full h-full flex flex-col p-1 border-b hover:bg-yellow-100">
          <div className=" w-full flex flex-col  py-1 px-2 rounded-lg ">
            <div className="w-full flex  justify-start ">
              <div className="w-full flex py-2 px-2">
                <img src={ImgSource} alt="" className="w-12 h-12" />
                <div className="w-full flex flex-wrap pl-3  text-[#07043B] text-md">
                  <p>
                    <span className="font-bold">{CompanyName}</span> {labelBildirim}<span className='text-gray-500 text-xs ml-2'>{time}</span>
                  </p>
                  
                </div>
                <div className='w-9 h-9 flex justify-center items-center mx-auto my-auto'>
                    {ıconSource}
                </div>
              </div>
            </div>
            
          </div>
        </div>
  )
}

export default BildirimCard