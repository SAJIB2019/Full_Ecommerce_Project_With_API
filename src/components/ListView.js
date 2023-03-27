import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
const ListView = ({ products }) => {
  return (
    <div className="">
      <div>
        {products.map((currentElement, index) => {
          const { id, name, image, description, price } = currentElement;
          return (
            <div
              className="grid grid-cols-1 md:grid-cols-2 py-3 border-2 border-gray-400"
              key={index}
            >
              <div className=" grid grid-cols-1 justify-items-center">
                <img src={image} alt={name} className="w-full md:w-[250px]" />
              </div>
              <div className="space-y-2">
                <h1 className="font-Lora text-2xl">{name}</h1>
                <p className="font-Lora">
                  <FormatPrice price={price} />
                </p>
                <p className="font-Lora">{description.slice(0, 100)}.....</p>
                <NavLink to={`/singleproduct/${id}`}>
                  <button className="btn mt-2 hover:bg-violet-700 duration-500">
                    Read More
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
