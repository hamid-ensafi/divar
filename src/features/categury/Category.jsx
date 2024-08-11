import React, { memo } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { openPopup } from "../../slice/popupSlice";

import Button from "../../ui/Button";
import CategoryContent from "./CategoryContent";

function Category() {
  const dispatch = useDispatch();
  return (
    <div className="w-max">
      <Button
        onClick={(target) => dispatch(openPopup(target))}
        type="row"
        text="دسته ها"
      >
        <IoIosArrowDown />
      </Button>
      <CategoryContent></CategoryContent>
    </div>
  );
}

export default Category ;
