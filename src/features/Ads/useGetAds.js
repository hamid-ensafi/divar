import { useQuery } from "@tanstack/react-query";
import { useCityParams } from "../../hooks/useCityId";
import { getAds } from "../../service/apiAds";
import { useSearchResultParams } from "../../hooks/useSearchResult";

function useGetAds() {
  const { params:cityId } = useCityParams();
  const { params: titleSearch } = useSearchResultParams()

 
  const {
    data: ads,
    isLoading: isLoadingAds,
    error: AdsError,
  } = useQuery({
    queryKey: ["search", cityId,titleSearch],
    queryFn: () => getAds(cityId,titleSearch),
    staleTime: 300,
    enabled:!!cityId
  });
  return { ads, isLoadingAds, AdsError };
}
export { useGetAds };
