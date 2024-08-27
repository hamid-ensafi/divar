import React, { useCallback, useEffect } from "react";
import AdsItem from "./AdsItem";
import { useCityId } from "../../hooks/useCityId";
import { useSearchParams } from "react-router-dom";
import { useGetAds } from "./useGetAds";
// import Skeleton from "../../ui/Skeleton";

function Ads() {
  const [, setSearch] = useSearchParams();
  const cityId = useCityId();
  const updateSearch = useCallback(() => {
    setSearch(`cities=${cityId}`);
  }, [setSearch, cityId]);
  useEffect(() => {
    updateSearch();
  }, [updateSearch]);

  const { ads:test, isLoadingAds } = useGetAds();
  console.log(test);
  return (
    <div className="flex w-9/12 flex-wrap gap-2">
      { test?.map(()=><Ads></Ads>)}
      {/* {isLoadingAds && <Skeleton></Skeleton>} */}
    </div>
  );
}

export default Ads;
