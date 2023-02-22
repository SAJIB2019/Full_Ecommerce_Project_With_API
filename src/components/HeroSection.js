import React from "react";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <div className="container  flex flex-col lg:flex-row justify-between items-center space-y-8 lg:-space-x-96 pt-28">
      <div className="w-full lg:w-[45%] flex flex-col items-start justify-center space-y-10 text-justify p-4">
        <p className="font-Lora text-[#5172ff] underline">Welcome to</p>
        <h1 className="text-4xl font-Anton tracking-wider">Sajib {name}</h1>
        <p className="font-Lora text-xl">
          Here you will be able to buy clothes with incredible discounts and
          win-win negotiations. Here you do not need to bargain for fixing
          price. There are many advantages of purchasing clothes online. If you
          are living outside of Bangladesh or you want to buy a clothing item
          from BD, you may order your favorite and most suitable clothing from
          anywhere in the world. Apart from this, it saves valuable time, energy
          and money.
        </p>
        <button className="btn bg-violet-700 hover:bg-white duration-500">
          Shop Now
        </button>
      </div>
      <div className="bg-[#c40023] h-[400px] w-full lg:w-[45%] flex justify-center items-center drop-shadow-[7px_-7px_3px_rgba(0,0,0,0.25)] relative z-[-5]">
        <figure className="absolute right-[15px] top-[15px] object-contain">
          <img
            src="./images/home&about.jpg"
            alt="Hero_img"
            className="min-h-[400px] min-w-[100%]"
          />
        </figure>
      </div>
    </div>
  );
};

export default HeroSection;
