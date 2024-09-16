import React from "react";
import { useSelector } from "react-redux";
import { getOpen } from "../../slice/popupSlice";
import { IoMdArrowRoundForward } from "react-icons/io";
import Button from "../../ui/Button";
import SubPopUp from "../../ui/SubPopUp";
import CategoryItem from "./CategoryItem";
import { CategoryData } from "../../data/data";

function CategoryContent() {
  const { isOpen, target } = useSelector(getOpen);
  if (isOpen === true && target === "دسته ها") {
    return (
      <SubPopUp type="category">
        <div className="flex h-full w-full">
          <div className="flex w-2/12 flex-col border-l border-gray_200 pl-6">
            <Button type="rowRevers" text="همه اگهی ها">
              <IoMdArrowRoundForward />
            </Button>
            {CategoryData.map((item) => (
              <CategoryItem key={item.id} item={item}></CategoryItem>
            ))}
          </div>
          <div id="categury-content"></div>
        </div>
      </SubPopUp>
    );
  }
  return null;
}

export default CategoryContent;
