import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import AccordianBody from "./AccordianBody";

const ResMenuAccordian = ({ data, showItems, setShowIndex }) => {

  const handleAccBody = () => {
    setShowIndex()
  }

  return (
    <div className="mx-auto text-center">
      <div className="w-8/12 bg-gray-50 shadow-lg my-2 mx-auto ">
        <div className="flex justify-between items-center p-4 cursor-pointer" onClick={handleAccBody} >
          <span className="text-md font-bold">{data.title} ({data.itemCards.length})</span>
          <span><IoChevronDownSharp /></span>
        </div>
        {showItems && <AccordianBody listIems={data.itemCards}/> }
      </div>
    </div>
  );
};

export default ResMenuAccordian;
