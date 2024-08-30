import React from "react";
import { CategoryData } from "../../data/data";
import CategoryItem from "./CategoryItem";

function Aside({ outlet }) {
  return (
    <div className="relative w-1/6">
      <aside className="no-scrollbar fixed  h-[100vh] w-full overflow-y-scroll p-4">
        <ul>
          <div>
            <p className="py-2 text-xs text-slate-50">دسته ها</p>
          </div>
          <ul className="fixed">
            {CategoryData.map((item) => (
              <CategoryItem item={item} key={item.id}></CategoryItem>
            ))}
            {outlet}
          </ul>
        </ul>
      </aside>
    </div>
  );
}

export default Aside;
