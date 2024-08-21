import React from "react";
import MenuItem from "../../ui/MenuItem";

function CityItem({ item }) {
    const { cityname } = item
    
  return (
    <MenuItem>
      <div><p>{cityname}</p></div>
      <div>
        {/* <IoIosArrowBack size={15} /> */}
        <input type="checkbox" />
      </div>
    </MenuItem>
  );
}

export default CityItem;
