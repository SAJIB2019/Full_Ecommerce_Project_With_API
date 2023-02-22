import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
const Sort = () => {
  return (
    <div className="grid grid-cols-3 py-2 justify-items-center">
      <div className="flex space-x-3">
        <BsFillGridFill className="text-[25px] p-1 text-white font-bold bg-gray-900 rounded-md" />
        <BsList className="text-[25px] p-[2px] text-white font-bold bg-gray-900 rounded-md" />
      </div>
      <div className="font-Lora">Total Products</div>
      <div>
        <input type="text" className="border-2 border-gray-700" />
      </div>
    </div>
  );
};

export default Sort;
