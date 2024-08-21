import React, { useState } from "react";
import { useGetProvince } from "./useGetProvince";
import ProvinceItem from "./ProvinceItem";
import { useGetCity } from "./useGetCity";
import CityItem from "./CityItem";
import MenuItem from "../../ui/MenuItem";
import { IoIosArrowRoundForward } from "react-icons/io";

function Province() {
  const { province } = useGetProvince();
  const [provinceId, setProvinceId] = useState("");
  const { city } = useGetCity(provinceId);
  function handleClick(id) {
    setProvinceId(id);
  }
  return (
    <div className="h-3/6 overflow-y-scroll px-12 py-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray_200">
      {!provinceId &&
        province?.map((item) => (
          <ProvinceItem
            key={item.id}
            onclick={handleClick}
            item={item}
          ></ProvinceItem>
        ))}
      {provinceId && (
        <div>
          <MenuItem handleClick={() => setProvinceId("")}>
            <div className="flex items-center gap-2">
              <IoIosArrowRoundForward size={20} />
              <p>همه شهر ها </p>
            </div>
          </MenuItem>
          {city?.map((item) => (
            <CityItem key={item.id} item={item}></CityItem>
          ))}
        </div>
      )}
    </div>
  );
}

export default Province;
