import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { getOpen, openPopup } from "../../slice/popupSlice";
import { debounce } from "lodash";
import ResultItem from "./ResultItem";
import { useGetSearchResult } from "./useGetSeaarch";

function Search() {
  const dispatch = useDispatch();
  const { isOpen, target } = useSelector(getOpen);
  const [query, setQuery] = useState();
  const { ads, isLoadingResult } = useGetSearchResult(query);

  function handleFocus(target) {
    dispatch(openPopup(target));
  }

  return (
    <div className="relative w-3/4">
      <div className="relative flex items-center">
        <form className="flex w-full items-center justify-center" action="">
          <input
            onChange={debounce((e) => setQuery(e.target.value), 300)}
            className={
              "w-full rounded-md border-none bg-gray_200 px-1 py-3 outline-none " +
              (target === "searchbox" && isOpen
                ? "shadow-sm shadow-slate-400"
                : "")
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

      {isOpen && target === "searchbox" && (
        <>
          <SearchResult ads={ads} isLoadingResult={isLoadingResult}>
            <ResultItem ads={ads}></ResultItem>
          </SearchResult>
        </>
      )}
    </div>
  );
}

export default Search;
