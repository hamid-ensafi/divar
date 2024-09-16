import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import CategoryIcon from "../../ui/CategoryIcon";

function CategoryItem({ item, onSelect, selected = false }) {
  const { id, name } = item;
  const [serachParams, setSearchParams] = useSearchParams()
  if (selected === true) {
    return (
      <Link
        className={
          "my-2 flex items-center gap-2 text-sm" +
          (selected ? " text-white" : "text-lightGray hover:text-white")
        }
        to={`?category=${id}`}
      >
        <CategoryIcon id={id}></CategoryIcon>
        {name}
      </Link>
    );
  }
  if (!name) {
    return (
      <li onClick={() => {
        serachParams.set('subcategory',id)
        setSearchParams(serachParams)
      }} className="flex items-center gap-2 py-2 text-sm text-lightGray hover:text-white">
        <Link >
          {item.nameSubCategory}
        </Link>
      </li>
    );
  }
  return (
    <li onClick={() => onSelect(id)} className="py-2">
      <Link
        className="flex items-center gap-2 text-sm text-lightGray hover:text-white"
        to={`?category=${id}`}
      >
        <CategoryIcon id={id}></CategoryIcon>
        {name}
      </Link>
    </li>
  );
}

export default CategoryItem;
