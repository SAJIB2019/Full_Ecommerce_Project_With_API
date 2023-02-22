import React from "react";

const Trusted = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col justify-center items-center space-y-10 py-10">
        <div className="font-Anton text-xl">
          <p>Trusted By 1000+ Companies</p>
        </div>
        <div className=" container flex justify-between space-x-2">
          <div>
            <img
              src="./images/cmplogo1.png"
              alt="cmplogo"
              className="w-[200px] h-[70px]"
            />
          </div>
          <div>
            <img
              src="./images/cmplogo2.png"
              alt="cmplogo"
              className="w-[200px] h-[70px]"
            />
          </div>
          <div>
            <img
              src="./images/cmplogo3.png"
              alt="cmplogo"
              className="w-[200px] h-[70px] "
            />
          </div>
          <div>
            <img
              src="./images/cmplogo4.png"
              alt="cmplogo"
              className="w-[200px] h-[70px]"
            />
          </div>
          <div>
            <img
              src="./images/cmplogo5.png"
              alt="cmplogo"
              className="w-[200px] h-[70px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
