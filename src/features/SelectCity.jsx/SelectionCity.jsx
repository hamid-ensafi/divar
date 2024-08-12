import React from "react";
import Button from "../../ui/Button";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { openPopup } from "../../slice/popupSlice";

function SelectionCity() {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        onClick={() => dispatch(openPopup("select city"))}
        type="row"
        text="تهران "
      >
        <CiLocationOn />
      </Button>
    </div>
  );
}

export default SelectionCity;
