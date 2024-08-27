import { useQuery } from "@tanstack/react-query";
import { useCityParams } from "../../hooks/useCityId";
import { getAds } from "../../service/apiAds";

function useGetAds() {
  const { params } = useCityParams();

  const {
    data: ads,
    isLoading: isLoadingAds,
    error: AdsError,
  } = useQuery({
    queryKey: ["search", params],
    queryFn: () => getAds(params),
    staleTime: 120000,
    enabled:!!params
  });
  return { ads, isLoadingAds, AdsError };
}
export { useGetAds };
