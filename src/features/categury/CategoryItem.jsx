import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import CategoryIcon from "../../ui/CategoryIcon";

function CategoryItem({ item }) {
  const { id, name } = item;
  return (
    <Link className="mb-2 flex w-full items-center justify-evenly rounded-md p-2 transition duration-200 hover:bg-lightBlack">
      <CategoryIcon size={12} id={id}></CategoryIcon>
      <span className="w-[70%] text-xs"> {name} </span>
      <IoIosArrowBack className="w-[10%]" size={12} />
    </Link>
  );
}

export default CategoryItem;
