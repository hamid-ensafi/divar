import React from "react";
import { useGetProvince } from "./useGetProvince";
import ProvinceItem from "./ProvinceItem";
import { useGetCity } from "./useGetCity";

function Province() {
  const { province } = useGetProvince();
  function handleClick(id) {
    // const {city, isLoadingCity, cityError  }=useGetCity(id)
  }
  return (
    <div className="scrollbar-thin scrollbar-thumb-gray_200 scrollbar-track-transparent h-3/6 overflow-y-scroll px-12 py-2">
      {province?.map((item) => (
        <ProvinceItem
          key={item.id}
          onclick={handleClick}
          item={item}
        ></ProvinceItem>
      ))}
    </div>
  );
}

export default Province;
