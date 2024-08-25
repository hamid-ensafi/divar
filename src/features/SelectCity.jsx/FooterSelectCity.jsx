import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  saveLocalStorage,
  cancelSelection,
  getCitySelect,
} from "../../slice/citySelectSlice";
import { closePopup } from "../../slice/popupSlice";

function FooterSelectCity() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { cityItem } = useSelector(getCitySelect);

  function handleSave() {
    dispatch(saveLocalStorage());
    let cityId = JSON.parse(localStorage.getItem("city")).map(
      (value) => value.id,
    );
    setSearchParams(`cities=${cityId}`);
    dispatch(closePopup());
  }

  function handleCancel() {
    dispatch(cancelSelection());
    dispatch(closePopup());
  }
  return (
    <footer className="flex h-1/6 items-center justify-between border-t border-gray_200 p-2">
      <button
        onClick={handleCancel}
        className="w-[48%] rounded border border-gray_100 py-2"
      >
        انصراف
      </button>
      <button
        disabled={cityItem.length < 1}
        onClick={handleSave}
        className={
          "w-[48%] rounded py-2 " +
          (cityItem.length < 1
            ? "cursor-no-drop border border-gray_200 bg-transparent"
            : "bg-red-500")
        }
      >
        تایید
      </button>
    </footer>
  );
}

export default FooterSelectCity;
