import React from "react";
import { SlMagnifier } from "react-icons/sl";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { getOpen, openPopup } from "../../slice/popupSlice";

function Search() {
  const dispatch = useDispatch();
  const { isOpen, target } = useSelector(getOpen);

  function handleFocus(target) {
    dispatch(openPopup(target));
  }
  return (
    <div className="relative w-3/4">
      <div className="relative flex items-center">
        <form className="flex w-full items-center justify-center" action="">
          <input
            className={
              target === "searchbox" && isOpen
                ? "w-full rounded-md border-none bg-gray_200 px-1 py-3 shadow-sm shadow-slate-400 outline-none"
                : "w-full rounded-md border-none bg-gray_200 px-1 py-3 outline-none"
            }
            type="text"
            placeholder="جستجو در همه اگهی  ها "
            onFocus={() => handleFocus("searchbox")}
          />
        </form>
        <span className="absolute left-3">
          <SlMagnifier />
        </span>
      </div>

      {isOpen && target === "searchbox" && <SearchResult></SearchResult>}
    </div>
  );
}

export default Search;
