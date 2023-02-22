import React from "react";
import { useProductContext } from "../Context/ProductContext";
import Product from "./Product";
const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div>......Loading</div>;
  }
  return (
    <div className="bg-gray-200 mt-28">
      <div className="container py-20">
        <div className="flex flex-col text-black">
          <p className="text-xl underline font-Lora">Check out now</p>
          <h3 className="text-2xl font-Lora py-3">Our Feature Products</h3>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row justify-between lg:space-x-3 space-y-5 lg:space-y-0 ">
            {featureProducts.map((currentElement) => {
              return <Product key={currentElement.id} {...currentElement} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
