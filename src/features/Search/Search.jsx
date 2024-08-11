import React from "react";
import { SlMagnifier } from "react-icons/sl";

function Search() {
  return (
    <div className="relative flex w-3/4 items-center">
      <form className="flex w-full items-center justify-center" action="">
        <input
          className="bg-gray_200 w-full rounded-md border-none px-1 py-3 outline-none"
          type="text"
          placeholder="جستجو در همه اگهی  ها "
        />
      </form>
      <span className="absolute left-3">
        <SlMagnifier />
      </span>
    </div>
  );
}

export default Search;
