import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div>
      <div className="flex space-x-4 py-2">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <p className="font-Lora font-bold text-xl px-2">{amount}</p>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
      <NavLink to="/cart">
        <button className="btn bg-violet-700 text-white hover:text-black hover:bg-white transition-all duration-500">
          Add To Cart
        </button>
      </NavLink>
    </div>
  );
};

export default CartAmountToggle;
