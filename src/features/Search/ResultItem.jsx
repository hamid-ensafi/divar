import React from "react";

function ResultItem({ ads }) {
  
  return (
    <>
      {ads?.map((item) => (
        <div
          key={item.title}
          className="flex cursor-pointer flex-wrap rounded border-b border-gray_200 p-4 hover:bg-gray_200"
        >
          <div className="flex w-full justify-between">
            <p className="text-sm text-white">{item.title}</p>
            <span className="text-xs">{item.ad_count} اگهی </span>
          </div>
          <span className="mt-2 block text-xs">
            {item.lowest_category_name}
          </span>
        </div>
      ))}
    </>
  );
}

export default ResultItem;
