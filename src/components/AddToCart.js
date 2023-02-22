import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ product }) => {
  const { colors, stock } = product;
  const [color, setColor] = useState(colors);
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <div className="flex space-x-2">
        <p className="font-Lora">Colors:</p>
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={`rounded-full w-6 h-6 flex justify-center items-center ${
                color === curColor ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? <FaCheck className="text-white" /> : null}
            </button>
          );
        })}
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
    </>
  );
};

export default AddToCart;
