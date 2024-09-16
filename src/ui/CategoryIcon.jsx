import React from "react";
import { CiMicrophoneOn, CiMobile2 } from "react-icons/ci";
import { FaBriefcase, FaBrush, FaCarAlt, FaDice } from "react-icons/fa";
import { GiWatch } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { LuLampFloor, LuUsers2 } from "react-icons/lu";

function CategoryIcon({ id,size=20 }) {
    
  switch (String(id)) {
    case "1":
      return <HiHomeModern size={size} />;
    case "2":
      return <FaCarAlt size={size} />;
    case "3":
      return <CiMobile2 size={size} />;
    case "4":
      return <LuLampFloor size={size} />;
    case "5":
      return <FaBrush size={size} />;
    case "6":
      return <GiWatch size={size} />;
    case "7":
      return <FaDice size={size} />;
    case "8":
      return <LuUsers2 size={size} />;
    case "9":
      return <CiMicrophoneOn size={size} />;
    case "10":
      return <FaBriefcase size={size} />;

    default:
      return null;
  }
}

export default CategoryIcon;
