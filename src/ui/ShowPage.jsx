import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopup, getOpen } from "../slice/popupSlice";
import SelectCityContent from "../features/SelectCity.jsx/SelectCityContent";

function ShowPage() {
  const { isOpen, target } = useSelector(getOpen);
  const body = document.body;
  useEffect(() => {
    body.style.overflow = "auto"

    return () =>body.style.overflow = "hidden";
  }, [body]);
  console.log('hamid')
  const dispatch = useDispatch();
  if (isOpen) {
    return (
      <div
        onClick={() => dispatch(closePopup())}
        className="fixed left-0 top-0 flex h-[100vh] w-full animate-opacityAnime items-center justify-center bg-gray_100"
      >
        {target === "select city" && <SelectCityContent></SelectCityContent>}
      </div>
    );
  }
  return null;
}

export default ShowPage;
