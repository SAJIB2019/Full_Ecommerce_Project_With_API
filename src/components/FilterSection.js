import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import FormatePrice from "../Helpers/FormatPrice";

const FilterSection = () => {
  const {
    filters: { text, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  //get the unique data
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElm) => {
      return curElm[property];
    });
    if (property === "colors") {
      return (newValue = ["All", ...new Set([].concat(...newValue))]);
    } else {
      return (newValue = ["All", ...new Set(newValue)]);
    }
  };

  //unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  console.log(colorsData);
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
              placeholder="Search"
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
          <form action="#">
            <select name="company" id="company" onClick={updateFilterValue}>
              {companyData.map((curElm, index) => {
                return (
                  <option value={curElm} name="company" key={index}>
                    {curElm}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <h1 className="font-Anton text-[20px]">Colors</h1>
          {colorsData.map((currentColor, index) => {
            return (
              <button
                type="button"
                style={{ backgroundColor: currentColor }}
                key={index}
                name="color"
                value={currentColor}
                onClick={updateFilterValue}
                className="flex rounded-full"
              >
                {currentColor}
              </button>
            );
          })}
        </div>
        <div>
          <h1 className="font-Anton text-[20px]">Price</h1>
          <p>
            <FormatePrice price={price} />
          </p>
          <input
            type="range"
            max={maxPrice}
            min={minPrice}
            value={price}
            name="price"
            onChange={updateFilterValue}
          />
        </div>
        <div>
          <button className="btn" onClick={clearFilters}>
            Clear filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
