import React from "react";
import MenuItem from "../../ui/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { getCitySelect, selectCity } from "../../slice/citySelectSlice";

function CityItem({ item }) {
  const { cityname } = item;
  const dispatch = useDispatch();

  function handleChange(e) {
    const { target } = e;
    const { checked } = target;
    dispatch(selectCity({ checked, item }));
  }

  const { cityItem } = useSelector(getCitySelect);

  return (
    <MenuItem>
      <div>
        <p>{cityname}</p>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) => handleChange(e)}
          value={cityname}
          checked={cityItem.map((value) => value.cityname).includes(cityname)}
        />
      </div>
    </MenuItem>
  );
}

export default CityItem;
