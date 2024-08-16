import React, { useEffect, useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { getOpen, openPopup } from "../../slice/popupSlice";
import getResualt from "../../service/apiSearchResualt";
import { useQuery } from "@tanstack/react-query";

function Search() {
  const dispatch = useDispatch();
  const { isOpen, target } = useSelector(getOpen);
  const [query, setQuery] = useState();

  // useEffect(() => {
  //   async function searchResult() {
  //     const { AdFeature, error } =await getResualt(query);
  //     console.log(AdFeature);
  //   }
  //   searchResult()
  // }, [query]);

  function handleFocus(target) {
    dispatch(openPopup(target));
  }
  return (
    <div className="relative w-3/4">
      <div className="relative flex items-center">
        <form className="flex w-full items-center justify-center" action="">
          <input
            onChange={(e) => setQuery(e.target.value)}
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
        <SearchResult query={query}></SearchResult>
      )}
    </div>
  );
}

export default Search;
