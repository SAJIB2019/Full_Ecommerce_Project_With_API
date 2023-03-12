import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Context/FilterContext";
const Sort = () => {
  const { grid_view, filter_products, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <div className="grid grid-cols-3 py-2 justify-items-center">
      <div className="flex space-x-3">
        <button
          onClick={setGridView}
          className={`${
            grid_view ? "bg-blue-700" : "bg-gray-700"
          } text-white text-[25px] p-1 font-bold rounded-md`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={`${
            grid_view ? "bg-gray-700" : "bg-blue-700"
          } text-white text-[25px] p-[2px] font-bold rounded-md`}
        >
          <BsList />
        </button>
      </div>
      <div className="font-Lora">{`${filter_products.length} Total Products`}</div>
      <div className="">
        <form action="">
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
