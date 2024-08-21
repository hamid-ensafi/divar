import React from "react";
import HeaderSelectCity from "./HeaderSelectcity";
import Province from "./Province";
import FooterSelectCity from "./FooterSelectCity";

function SelectCityContent() {
  function handleClick(e) {
    e.stopPropagation();
  }
  return (
    <div
      onClick={(e) => handleClick(e)}
      className="relative z-30 h-full w-full animate-opacityAnime rounded bg-darkGray text-gray_50 duration-200 md:h-[90%] md:w-1/2 lg:w-1/3"
    >
      <div className="h-full w-full">
        <HeaderSelectCity></HeaderSelectCity>
        <Province></Province>
        <FooterSelectCity></FooterSelectCity>
      </div>
    </div>
  );
}



export default SelectCityContent;
