import React from "react";
import { NavLink } from "react-router-dom";

const SingleNavBar = ({ Company }) => {
  return (
    <div className="pt-16 bg-gray-300 flex items-center justify-start h-[150px] ">
      <div className="container flex justify-start items-center">
        <NavLink to="/" className="text-2xl text-blue-700">
          Home /{" "}
        </NavLink>
        <p className="text-2xl text-gray-700"> {Company}</p>
      </div>
    </div>
  );
};

export default SingleNavBar;
