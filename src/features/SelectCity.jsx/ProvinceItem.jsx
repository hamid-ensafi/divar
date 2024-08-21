import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import MenuItem from "../../ui/MenuItem";

function ProvinceItem({ item, onclick }) {
  const { id, provinceName } = item;
  return (
    <MenuItem
      className="flex cursor-pointer items-center justify-between border-b border-gray_200 py-3"
      handleClick={() => onclick(id)}
    >
      <div>
        <p>{provinceName}</p>
      </div>
      <div>
        <IoIosArrowBack size={15} />
      </div>
    </MenuItem>
  );
}

export default ProvinceItem;
