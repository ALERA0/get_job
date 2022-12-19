import React from "react";
import Select from "react-select";

const MultiSelectOption = ({ labelFiled }) => {
  const options = [
    { value: "abc", label: "alb" },
    { value: "asl", label: "alq" },
    { value: "sad", label: "ali" },
  ];

  return (
    <div class="relative">
      <Select
        isMulti
        options={options}
        placeholder="Select Option..."
        id="multi-select"
        className="block  w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer my-5 "
      />
      <label
        for="multi-select"
        className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0  origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-2/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 "
      >{labelFiled}
      </label>
    </div>
  );
};

export default MultiSelectOption;
