import React, { memo } from "react";
import { useSelector } from "react-redux";
import { getOpen } from "../../slice/popupSlice";
import { Link } from "react-router-dom";
import { HiHomeModern } from "react-icons/hi2";
import { IoIosArrowBack, IoMdArrowRoundForward } from "react-icons/io";
import { FaBriefcase, FaBrush, FaCarAlt, FaDice } from "react-icons/fa";
import { CiMicrophoneOn, CiMobile2 } from "react-icons/ci";
import { LuLampFloor, LuUsers2 } from "react-icons/lu";
import { GiWatch } from "react-icons/gi";
import Button from "../../ui/Button";

function CategoryContent() {
  const { isOpen, target } = useSelector(getOpen);
  if (isOpen === true && target === "دسته ها") {
    return (
      <div className="absolute z-10 mt-5 w-10/12">
        {/* bg-darkGray */}
        <div className="flex h-full w-full animate-opacityAnime rounded  bg-darkGray p-8 shadow-Prime">
          <div
            className="flex w-2/12 flex-col border-l border-gray_200 pl-6"
            id="categury-item"
          >
            <Button type="rowRevers" text="همه اگهی ها">
              <IoMdArrowRoundForward />
            </Button>
            <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
              <HiHomeModern className="w-[10%]" />
              <span className="w-[70%] text-xs"> املاک </span>
              <IoIosArrowBack className="w-[10%]" size={12} />
            </Link>
            <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
              <FaCarAlt className="w-[10%]" />
              <span className="w-[70%] text-xs"> وسایل نقلیه </span>
              <IoIosArrowBack className="w-[10%]" size={12} />
            </Link>
            <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
              <CiMobile2 className="w-[10%]" />
              <span className="w-[70%] text-xs"> کالای دیجیتال </span>
              <IoIosArrowBack className="w-[10%]" size={12} />
            </Link>
            <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
              <LuLampFloor className="w-[10%]" />
              <span className="w-[70%] text-xs"> خانه و اشپزخانه </span>
              <IoIosArrowBack className="w-[10%]" size={12} />
            </Link>
            <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
              <FaBrush className="w-[10%]" />
              <span className="w-[70%] text-xs"> خدمات </span>
              <IoIosArrowBack className="w-[10%]" size={12} />
            </Link>
            <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
              <GiWatch className="w-[10%]" />
              <span className="w-[70%] text-xs"> وسایل شخصی</span>
              <IoIosArrowBack className="w-[10%]" size={12} />
            </Link>
            <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
              <FaDice className="w-[10%]" />
              <span className="w-[70%] text-xs"> سرگرمی و فراغت </span>
              <IoIosArrowBack className="w-[10%]" size={12} />
            </Link>
            <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
              <LuUsers2 className="w-[10%]" />
              <span className="w-[70%] text-xs"> اجتماعی</span>
              <IoIosArrowBack className="w-[10%]" size={12} />
            </Link>
            <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
              <CiMicrophoneOn className="w-[10%]" />
              <span className="w-[70%] text-xs"> تجهیزات و صنعتی</span>
              <IoIosArrowBack className="w-[10%]" size={12} />
            </Link>
            <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
              <FaBriefcase className="w-[10%]" />
              <span className="w-[70%] text-xs"> استخدام و کاریابی</span>
              <IoIosArrowBack className="w-[10%]" size={12} />
            </Link>
          </div>
          <div id="categury-content"></div>
        </div>
      </div>
    );
  }
  return null;
}

export default CategoryContent ;
