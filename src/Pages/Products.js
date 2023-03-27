import React from "react";
import FilterSection from "../components/FilterSection";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
import SingleNavBar from "../components/SingleNavBar";

const Products = () => {
  return (
    <div className="pt-20">
      <SingleNavBar />
      <div className="container pt-6 grid grid-cols-5">
        <div className="col-span-1">
          <FilterSection />
        </div>
        <div className="grid-span-2 col-span-4">
          <div>
            <Sort />
          </div>
          <div>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
