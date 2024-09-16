import React, { useEffect, useState } from "react";
import { CategoryData } from "../../data/data";
import CategoryItem from "./CategoryItem";
import SubCategoryItem from "./SubCategoryItem";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Find } from "../../utils/helper";

function Aside() {
  const [searchParams, setSearchParams] = useSearchParams();
  let category = searchParams.get("category");
  const [openCategory, setOpenCategory] = useState(() =>
    category ? Find(CategoryData, category) : {},
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (category) {
      const subCategory = Find(CategoryData, category);
      setOpenCategory(subCategory);
    } else {
      return setOpenCategory({});
    }
  }, [category]);


  function handleClick(id) {
    navigate(`?category=${id}`);
    let subCategory = Find(CategoryData, id);
    setOpenCategory(subCategory);
  }
  function handleClose() {
    searchParams.delete("category");
    searchParams.delete("subcategory");
    setSearchParams(searchParams);
    setOpenCategory({});
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
