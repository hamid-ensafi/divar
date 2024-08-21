import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function ProvinceItem({ item,onclick }) {
  const { id, provinceName } = item;
  return (
    <div
      
          className="flex cursor-pointer items-center justify-between border-b border-gray_200 py-3"
          onClick={()=>onclick(id)}
    >
      <div>
        <p>{provinceName}</p>
      </div>
      <div>
        <IoIosArrowBack size={15} />
      </div>
    </div>
  );
}

export default ProvinceItem;
