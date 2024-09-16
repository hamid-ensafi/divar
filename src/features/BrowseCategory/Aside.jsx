import React, { useEffect, useState } from "react";
import { CategoryData } from "../../data/data";
import CategoryItem from "./CategoryItem";
import SubCategoryItem from "./SubCategoryItem";
import { useNavigate, useSearchParams } from "react-router-dom";

function Aside() {
  const [searchParams, setSearchParams] = useSearchParams();
  let category = searchParams.get("category");

  const [openCategory, setOpenCategory] = useState(() => {
    if (category)
      return CategoryData.slice().find((item) => item.id === +category);
    else return {};
  });

  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`?category=${id}`);
    let subCategory = CategoryData.slice().find((item) => item.id === id);
    setOpenCategory(subCategory);
  }
  function handleClose() {
    setOpenCategory({});
    setSearchParams(searchParams.delete(category));
  }
  return (
    <div className="relative w-1/6">
      <aside className="no-scrollbar sticky top-[80px] h-[100vh] w-full overflow-y-scroll p-4">
        <ul>
          <div>
            <p className="py-2 text-xs text-slate-50">دسته ها</p>
          </div>
          <ul>
            {!openCategory.id &&
              CategoryData.map((item) => (
                <CategoryItem
                  onSelect={handleClick}
                  item={item}
                  key={item.id}
                ></CategoryItem>
              ))}
            {openCategory.id && (
              <SubCategoryItem
                onClose={handleClose}
                openCategory={openCategory}
              ></SubCategoryItem>
            )}
          </ul>
        </ul>
      </aside>
    </div>
  );
}

export default Aside;
