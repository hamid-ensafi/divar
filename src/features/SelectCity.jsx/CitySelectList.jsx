import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCitySelect } from "../../slice/citySelectSlice";

function CitySelectList() {
  const { cityItem } = useSelector(getCitySelect);
  const dispatch = useDispatch();
  function handleClick(value) {
    dispatch(deleteItem(value));
  }
  return (
    <div className="flex w-full gap-2 min-h-[33px]">
      {cityItem.map((item) => (
        <span
          key={item.id}
          className="font-700 cursor-default rounded-full border border-Red bg-red_100 p-2 text-xs text-Red transition duration-200"
        >
          <span className="flex items-center justify-center gap-2">
            <span>{item.cityname}</span>
            <Button onClick={() => handleClick(item.cityname)}>
              <HiOutlineXMark />
            </Button>
          </span>
        </span>
      ))}
    </div>
  );
}

export default CitySelectList;
