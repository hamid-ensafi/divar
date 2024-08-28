import React, { useCallback, useEffect } from "react";
import AdsItem from "./AdsItem";
import { useCityId } from "../../hooks/useCityId";
import { useSearchParams } from "react-router-dom";
import { useGetAds } from "./useGetAds";
import Skeleton from "../../ui/Skeleton";

function Ads() {
  const [, setSearch] = useSearchParams();

  const cityId = useCityId();

  const updateSearch = useCallback(() => {

    setSearch(`cities=${cityId}`);
    
  }, [setSearch, cityId]);

  useEffect(() => {

    updateSearch();

  }, [updateSearch]);

  const { ads, isLoadingAds } = useGetAds();

  return (
    <div className="flex w-9/12 flex-wrap gap-2">
      {!isLoadingAds &&
        ads?.map((article) => (
          <AdsItem key={article.id} article={article}></AdsItem>
        ))}
      {isLoadingAds && <Skeleton Length={20}></Skeleton>}
    </div>
  );
}

export default Ads;
