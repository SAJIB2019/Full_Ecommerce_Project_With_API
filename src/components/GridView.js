import React from "react";
import Product from "./Product";
const GridView = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-1">
      {products.map((currentElement) => {
        return <Product key={currentElement.id} {...currentElement} />;
      })}
    </div>
  );
};

export default GridView;
