import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

const About = () => {
  const Data = { name: "E-commerce" };
  return (
    <div>
      <HeroSection myData={Data} />
      <Services />
      <Trusted />
    </div>
  );
};

export default About;
