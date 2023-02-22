import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import My_img from "../components/My_img";
import SingleNavBar from "../components/SingleNavBar";
import FormatePrice from "../Helpers/FormatPrice";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return (
    <>
      <SingleNavBar Company={company} />
      <div className="container py-20 flex flex-col lg:flex-row ">
        <div className="w-full lg:w-[50%]">
          <My_img img={image} />
        </div>
        <div className="w-full lg:w-[50%] space-y-2">
          <h2 className="text-4xl font-Lora">{name}</h2>
          <Star stars={stars} reviews={reviews} />
          <p className="text-md font-Lora">
            MRP:
            <del>
              <FormatePrice price={price + 250000} />
            </del>
          </p>
          <p className="text-xl font-Lora">
            Deal of the day: <FormatePrice price={price} />
          </p>
          <p className="text-sm font-Lora text-justify">{description}</p>
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center lg:space-x-6">
            <div className="flex flex-col justify-center items-start lg:items-center">
              <TbTruckDelivery className="text-3xl" />
              <p className="text-sm font-Lora">Free Delivery</p>
            </div>
            <div className="flex flex-col justify-center items-start lg:items-center">
              <TbReplace className="text-3xl" />
              <p className="text-sm font-Lora">30 Days Replacements</p>
            </div>
            <div className="flex flex-col justify-center items-start lg:items-center">
              <TbTruckDelivery className="text-3xl" />
              <p className="text-sm font-Lora">Already Delivered</p>
            </div>
            <div className="flex flex-col justify-center items-start lg:items-center">
              <MdSecurity className="text-3xl" />
              <p className="text-sm font-Lora">2 years warranty</p>
            </div>
          </div>
          <hr className="w-full h-[2px] mx-auto my-2 bg-gray-200 border-0 rounded md:my-10"></hr>
          <p className="text-md font-Lora">
            Available:<span> {stock > 0 ? "In Stock" : "Out of Stock"}</span>
          </p>

          <p className="text-md font-Lora">
            ID: <span> {id}</span>
          </p>
          <p className="text-md font-Lora">
            Brand: <span>{company}</span>
          </p>
          <hr className="w-full h-[3px] mx-auto my-2 bg-gray-600 border-0 rounded md:my-10"></hr>
          {stock > 0 && <AddToCart product={singleProduct} />}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
