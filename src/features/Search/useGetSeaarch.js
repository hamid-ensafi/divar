import { useQuery } from "@tanstack/react-query";
import getResualt from "../../service/apiSearchResualt";
import { useCityParams } from "../../hooks/useCityId";

function useGetSearchResult(query) {
  const { params } = useCityParams();

  const {
    data: ads,
    isLoading: isLoadingResult,
    error: resualtError,
  } = useQuery({
    queryKey: ["search", query, params],
    queryFn: () => getResualt(query, params),
    enabled: !!query,
    staleTime: 120000,
  });
  return { ads, isLoadingResult, resualtError };
}
export { useGetSearchResult };
