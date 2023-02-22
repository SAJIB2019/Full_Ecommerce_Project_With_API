import React from "react";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="container pt-28">
      <div className="flex flex-col justify-center items-center py-14">
        <h1 className="text-4xl font-Anton text-blue-600 py-5">404</h1>
        <h3 className="text-3xl font-Lora py-4">You are just lost</h3>
        <p className="text-md font-Lora py-3">
          The page you are looking for doesn't exist.Click to the home button to
          view homepage
        </p>
        <button className="btn  bg-violet-700 hover:bg-white duration-500 ">
          <NavLink to="/">Home</NavLink>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
