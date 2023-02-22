import React, { useState } from "react";

const My_img = ({ img = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(img[0]);
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-x-2 lg:pr-14">
      <div className="flex flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2 justify-between items-center">
        {img.map((currentElement, index) => {
          return (
            <figure key={index}>
              <img
                src={currentElement.url}
                alt={currentElement.filename}
                className="w-[120px] h-[100px]"
                onClick={() => setMainImage(currentElement)}
              />
            </figure>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <img
          src={mainImage.url}
          alt={mainImage.filename}
          className="w-[400px] lg:w-[500px] h-[300px] lg:h-[300px]"
        />
      </div>
    </div>
  );
};

export default My_img;
