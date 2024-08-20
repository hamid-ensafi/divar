import React from "react";
import Empty from "../../ui/Empty";
import SubPopUp from "../../ui/SubPopUp";
import { MoonLoader } from "react-spinners";

function SearchResult({ ads, isLoadingResult, children }) {

  return (
    <SubPopUp type={"search"}>
      {isLoadingResult && (
        <Empty>
          <MoonLoader size={30} color="#fff"/>
        </Empty>
      )}
      {!ads && <Empty></Empty>}
      {children}
    </SubPopUp>
  );
}

export default SearchResult;
