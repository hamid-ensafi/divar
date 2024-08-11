import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopup, getOpen } from "../slice/popupSlice";

function ShowPage({ children }) {
  const { isOpen}=useSelector(getOpen)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const dispatch=useDispatch()
  if (isOpen) { 
    return (
      <div onClick={()=>dispatch(closePopup())} className="absolute animate-opacityAnime left-0 top-[80px] h-[100vh] w-full bg-gray_100">
        {children}
      </div>
    );
  }
  return null 
 
}

export default ShowPage;
