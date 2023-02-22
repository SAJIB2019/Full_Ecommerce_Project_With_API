import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const Product = (currentElement) => {
  const { id, name, image, price } = currentElement;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="flex flex-col">
        <div className="lg:w-[250px]">
          <img src={image} alt={name} className="w-full lg:w-[250px]" />
        </div>
        <div className="flex justify-between py-2">
          <div className="font-Lora">{name}</div>
          <div className="font-Anton">{<FormatPrice price={price} />}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
