import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Nav = (props) => {
  const { mobMenu, setMobMenu } = props;
  return (
    <nav className={`flex items-center justify-center`}>
      <ul className="flex flex-col lg:flex-row justify-center items-center space-y-8 py-[20%] lg:py-0 lg:space-y-0">
        <li className="font-Lora text-[20px] lg:text-[22px] font-bold hover:text-blue-600 duration-500 px-5 uppercase">
          <NavLink to="/" onClick={() => setMobMenu(!mobMenu)}>
            Home
          </NavLink>
        </li>
        <li className="font-Lora text-[20px] lg:text-[22px] font-bold hover:text-blue-600 duration-500 px-5 uppercase">
          <NavLink to="/about" onClick={() => setMobMenu(!mobMenu)}>
            About
          </NavLink>
        </li>
        <li className="font-Lora text-[20px] lg:text-[22px] font-bold hover:text-blue-600 duration-500 px-5 uppercase">
          <NavLink to="/products" onClick={() => setMobMenu(!mobMenu)}>
            Products
          </NavLink>
        </li>
        <li className="font-Lora text-[20px] lg:text-[22px] font-bold hover:text-blue-600 duration-500 px-5 uppercase">
          <NavLink to="/contact" onClick={() => setMobMenu(!mobMenu)}>
            Contact
          </NavLink>
        </li>
        <li className="font-Lora md:text-[16px] lg:text-[22px] font-bold hover:text-blue-600 duration-500 px-5">
          <NavLink
            to="/cart"
            className="flex items-center justify-center text-[25px] lg:text-[25px] md:px-2 lg:px-4 relative"
            onClick={() => setMobMenu(!mobMenu)}
          >
            <FaCartPlus />
            <span className="bg-blue-600 rounded-full text-white absolute bottom-5 left-7 text-sm font-bold">
              (10)
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
