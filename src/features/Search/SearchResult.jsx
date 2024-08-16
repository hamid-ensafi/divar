import React from "react";
import Empty from "../../ui/Empty";
import { useGetSearchResult } from "./useGetSeaarch";
import SubPopUp from "../../ui/SubPopUp";

function SearchResult(query) {
  const { ads, isLoadingResult, resualtError } = useGetSearchResult(query);

  return (
    <SubPopUp type={'search'}>
      <Empty></Empty>
    </SubPopUp>
  );
}

export default SearchResult;
