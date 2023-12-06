import React from "react";

function InputComponent() {
  return (
    <div className="bg-[#fff] rounded-[20px] overflow-hidden flex">
      <input
        className=" pl-[25px] py-[17px]"
        type="text"
        placeholder="Search..."
      />
      <button className="bg-mainYellow text-[#fff] px-[30px] rounded-[20px]">
        Search
      </button>
    </div>
  );
}

export default InputComponent;
