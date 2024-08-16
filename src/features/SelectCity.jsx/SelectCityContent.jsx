import React from "react";
import Button from "../../ui/Button";
import { HiOutlineXMark } from "react-icons/hi2";

function SelectCityContent() {
  function handleClick(e) {
    e.stopPropagation()
  }
  return (
    <div onClick={(e)=>handleClick(e)} className="  text-gray_50 h-full w-full animate-opacityAnime rounded bg-darkGray duration-200 md:h-[90%] md:w-1/2 lg:w-1/3 relative z-30">
      <div className="h-full w-full">
        <header className="p-8">
          <div className="flex justify-between">
            <h3>انتخاب شهر </h3>
            <Button type={"textButton"}> حذف همه </Button>
          </div>
          <div className="flex justify-evenly">
            <Button type={"redBorderButton"}>
              <span className="flex items-center justify-center gap-2">
                <span>تهران</span>
                <Button><HiOutlineXMark /></Button>
              </span>
            </Button>
          </div>
        </header>
      
      </div>
    </div>
  );
}



function Province() {
  
}

export default SelectCityContent;
