import React from "react";
import Button from "../../ui/Button";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { openPopup } from "../../slice/popupSlice";
import { getCitySelect } from "../../slice/citySelectSlice";

function SelectionCity() {
  const dispatch = useDispatch();
  const { cityItem } = useSelector(getCitySelect)
  let cityLocalStorage=JSON.parse(localStorage.getItem('city'))
  return (
    <div>
      <Button
        onClick={() => dispatch(openPopup("select city"))}
        type="row"
        text={cityItem.length<=1?`${cityLocalStorage.at(0)?.cityname}`:`${cityItem.length}  شهر`}
      >
        <CiLocationOn />
      </Button>
    </div>
  );
}

export default SelectionCity;
