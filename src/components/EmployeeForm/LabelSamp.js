import React from 'react'

const LabelSamp = ({InfoField, FilledField}) => {
  return (
    <form className="w-full flex justify-between my-3">
            <label className="text-sm text-[#868686] ">{InfoField}</label>
            <label className="text-[#062CBC] text-sm">{FilledField}</label>
        </form>
  )
}

export default LabelSamp