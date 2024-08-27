import React from "react";
import Button from "../../ui/Button";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { openPopup } from "../../slice/popupSlice";
import { getCitySelect } from "../../slice/citySelectSlice";

function SelectionCity() {
  const dispatch = useDispatch();
  const { cityItemStorage } = useSelector(getCitySelect)
  
  return (
    <div>
      <Button
        onClick={() => dispatch(openPopup("select city"))}
        type="row"
        text={cityItemStorage.length<=1?`${cityItemStorage.at(0)?.cityname}`:`${cityItemStorage.length}  شهر`}
      >
        <CiLocationOn />
      </Button>
    </div>
  );
}

export default SelectionCity;
