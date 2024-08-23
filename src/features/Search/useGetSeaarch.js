import { useQuery } from "@tanstack/react-query";
import getResualt from "../../service/apiSearchResualt";


function useGetSearchResult(query) {
  const {
    data: ads,
    isLoading: isLoadingResult,
    error: resualtError,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: () => getResualt(query),
    enabled: !!query,
    staleTime:120000
  });
  return { ads, isLoadingResult, resualtError };
}
export { useGetSearchResult };
