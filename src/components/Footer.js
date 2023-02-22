import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#06132d] mt-28">
      <div className="container">
        <div className="bg-gray-200 relative top-[-50px] flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-3 lg:space-y-0 py-6 rounded-2xl px-20">
          <div className="font-Lora text-justify">
            <p>Ready to get started</p>
            <p>Talk to us today.</p>
          </div>
          <div>
            <button className="btn  bg-violet-700 hover:bg-white duration-500 hover:text-black text-white uppercase">
              <NavLink to="./contact">get started</NavLink>
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-6 lg:space-y-0 md:space-x-4 md:flex-row justify-between items-start text-white">
          <div className="w-full lg:w-[180px]">
            <h3 className="font-Anton">Sajib Store</h3>
            <p className="text-justify font-Lora">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              libero?
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-Anton py-2">
              Subscribe to get important updates
            </p>
            <input type="text" className="py-2 my-2" />
            <input
              type="submit"
              className="btn bg-violet-700 hover:bg-white duration-500 hover:text-black text-white uppercase"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-Anton">Follow Us</p>
            <div className="flex space-x-2">
              <AiFillInstagram />
              <BsFacebook />
              <AiFillYoutube />
            </div>
          </div>
          <div>
            <p className="font-Anton">Call Us</p>
            <p className="font-Lora">0018652984</p>
          </div>
        </div>
        <div className="text-white flex flex-col md:flex-row justify-around items-center py-8 space-y-3 md:space-y-0">
          <div>
            <p>@{new Date().getFullYear()} SajibStore. All Right Reserved</p>
          </div>
          <div className="flex lg:flex-col">
            <h3>privacy policy</h3>
            <h3>terms & conditions</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
