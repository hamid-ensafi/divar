import React from "react";
import Button from "../../ui/Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import CategoryItem from "./CategoryItem";

function SubCategoryItem({ openCategory, onClose }) {
  const { subCategory } = openCategory;
  return (
    <li className="text-lightGray">
      <Button onClick={onClose} type="rowRevers" text="همه اگهی ها">
        <IoMdArrowRoundForward />
      </Button>
      <CategoryItem selected={true} item={openCategory}></CategoryItem>
      <ul className="mr-10">
        {subCategory.map((item) => (
          <CategoryItem key={item.id} item={item}></CategoryItem>
        ))}
      </ul>
    </li>
  );
}

export default SubCategoryItem;
