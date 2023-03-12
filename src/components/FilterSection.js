import React from "react";
import { useFilterContext } from "../Context/FilterContext";

const FilterSection = () => {
  const {
    filters: { text, category },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  //get the unique data
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElm) => {
      return curElm[property];
    });
    return (newValue = ["All", ...new Set(newValue)]);
  };

  //unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  return (
    <div>
      <div className="grid grid-cols-1 space-y-2">
        <div className="">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={updateFilterValue}
              placeholder="search"
              className="w-full border-2 border-gray-700 rounded-md"
            />
          </form>
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <h1 className="font-Anton text-[20px]">Category</h1>
          <div>
            {categoryOnlyData.map((curElm, index) => {
              return (
                <div>
                  <button
                    key={index}
                    type="button"
                    name="category"
                    value={curElm}
                    onClick={updateFilterValue}
                  >
                    {curElm}
                  </button>
                </div>
              );
            })}
          </div>
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
