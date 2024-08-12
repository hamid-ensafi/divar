import React from "react";
import Empty from "../../ui/Empty";

function SearchResult() {
  return (
    <div className="no-scrollbar absolute z-10 h-[15rem] max-h-96 w-full overflow-y-scroll  bg-darkGray shadow-sm shadow-slate-400">
      <Empty></Empty>
    </div>
  );
}

export default SearchResult;
