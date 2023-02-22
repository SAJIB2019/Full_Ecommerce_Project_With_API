import React from "react";
import { FaBusAlt } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdPayment } from "react-icons/md";

const Services = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-between items-center py-14 space-y-8 lg:space-x-8 ">
        <div className="w-full lg:w-auto bg-gray-200 flex flex-col justify-center items-center rounded-2xl space-y-4 px-8 py-20">
          <div className="bg-white p-5 rounded-full text-3xl text-blue-400">
            <FaBusAlt />
          </div>
          <p>Super fast and free Delivery</p>
        </div>
        <div className="w-full lg:w-auto flex flex-col">
          <div className="w-full lg:w-auto bg-gray-200 flex justify-center rounded-2xl space-x-1 px-5 py-8 mb-1">
            <div className="flex justify-between items-center space-x-2">
              <div className="bg-white p-5 rounded-full text-3xl text-blue-400">
                <SiTrustpilot />
              </div>
              <p>Non-contact Shipping</p>
            </div>
          </div>
          <div className="w-full lg:w-auto bg-gray-200 flex justify-center rounded-2xl space-x-1 px-5 py-8 mt-1">
            <div className="flex items-center justify-between space-x-2">
              <div className="bg-white p-5 rounded-full text-3xl text-blue-400">
                <FcMoneyTransfer />
              </div>
              <p>Money back guaranteed</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-auto bg-gray-200 flex flex-col justify-center items-center rounded-2xl space-y-4 px-8 py-20">
          <div className="bg-white p-5 rounded-full text-3xl text-blue-400">
            <MdPayment />
          </div>
          <p>Secured payment system</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
