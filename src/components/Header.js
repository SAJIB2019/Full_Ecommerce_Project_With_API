import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import Nav from "./Nav";

const Header = () => {
  const [mobMenu, setMobMenu] = useState(false);
  return (
    <div className="bg-gray-300 w-full fixed z-[200]">
      <div className="container flex justify-between items-center h-[80px] ">
        <NavLink to="/">
          <img
            src="./images/logo.png"
            alt="my logo img"
            className="w-40 h-12"
          />
        </NavLink>
        <div
          className={`bg-gray-300 w-full lg:w-auto absolute top-[80px] duration-500 ${
            mobMenu ? "left-0" : "left-[-100%]"
          } lg:static`}
        >
          <Nav mobMenu={mobMenu} setMobMenu={setMobMenu} />
        </div>
        <div className="text-5xl lg:hidden">
          {mobMenu ? (
            <CgClose onClick={() => setMobMenu(!mobMenu)} />
          ) : (
            <CgMenu onClick={() => setMobMenu(!mobMenu)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
