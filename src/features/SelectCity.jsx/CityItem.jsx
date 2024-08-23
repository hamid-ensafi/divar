import React from "react";
import MenuItem from "../../ui/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { getCitySelect, selectCity } from "../../slice/citySelectSlice";

function CityItem({ item }) {
  const { cityname } = item;
  const dispatch = useDispatch();
  function handleChange(e) {
    const { target } = e;
    const { checked, value } = target;
    dispatch(selectCity({ checked, value }));
  }
  const { cityItem } = useSelector(getCitySelect)
  return (
    <MenuItem>
      <div>
        <p>{cityname}</p>
      </div>
      <div>
        {/* <IoIosArrowBack size={15} /> */}
        <input
          type="checkbox"
          onChange={(e) => handleChange(e)}
          value={cityname}
          checked={ cityItem.includes(cityname)}
        />
      </div>
    </MenuItem>
  );
}

export default CityItem;
