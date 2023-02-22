import React from "react";

const FilterSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 space-y-2">
        <div>
          <input type="text" className="border-2 border-gray-700 rounded-md" />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <h1 className="font-Anton text-[20px]">Category</h1>
          <p className="font-Lora text-[20px]">All</p>
          <p className="font-Lora text-[20px]">Mobile</p>
          <p className="font-Lora text-[20px]">Laptop</p>
          <p className="font-Lora text-[20px]">Computer</p>
          <p className="font-Lora text-[20px]">Accessories</p>
          <p className="font-Lora text-[20px]">Watch</p>
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <h1 className="font-Anton text-[20px]">Company</h1>
          <select name="" id=""></select>
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <h1 className="font-Anton text-[20px]">Color</h1>
          <p className="font-Lora text-[20px]">All</p>
          <input type="text" className="border-2 border-gray-700 rounded-md" />
          <input type="text" className="border-2 border-gray-700 rounded-md" />
          <input type="text" className="border-2 border-gray-700 rounded-md" />
          <input type="text" className="border-2 border-gray-700 rounded-md" />
          <input type="text" className="border-2 border-gray-700 rounded-md" />
        </div>
        <div>
          <h1 className="font-Anton text-[20px]">Price</h1>
          <p className="font-Lora text-[20px]">price api</p>
        </div>
        <div>
          <button className="btn">Clear filter</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
