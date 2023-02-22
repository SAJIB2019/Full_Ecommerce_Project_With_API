import React from "react";
import FeatureProducts from "../components/FeatureProducts";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

const Home = () => {
  const Data = { name: "Store" };
  return (
    <div>
      <HeroSection myData={Data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
