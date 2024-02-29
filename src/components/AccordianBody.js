import React from "react";
import { CLOUDINARY_IMG_URL } from "../utils/constans";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const AccordianBody = ({ listIems }) => {
  const dispatch = useDispatch();
  const handleAddBtn = (item) => {
    dispatch(addItems(item))
  }
  return (
    <div>
      {listIems.map((item) => (
        <div
          className="flex justify-between border-b-2 w-12/12 hover:bg-slate-100"
          key={item?.card?.info?.id}
        >
          <div className="text-left p-4  w-10/12">
            <span className="font-bold">{item?.card?.info?.name}</span>
            <span className="block font-semibold">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className=" text-slate-600">{item?.card?.info?.description}</p>
          </div>
          <div className="w-2/12 flex relative">
            <div className="absolute mx-12 my-20 ">
              <button className=" bg-white px-3 py-1  hover:bg-green-600 hover:text-white  font-semibold text-black rounded-lg" onClick={() => handleAddBtn(item)}>
                Add +
              </button>
            </div>
            <div className=" object-cover">
              <img
                className="object-cover h-32 w-40 rounded-2xl mx-auto p-2 "
                src={CLOUDINARY_IMG_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordianBody;
