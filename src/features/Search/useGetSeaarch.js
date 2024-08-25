import { useQuery } from "@tanstack/react-query";
import getResualt from "../../service/apiSearchResualt";
import { useSearchParams } from "react-router-dom";


function useGetSearchResult(query) {
  const [searchParams] = useSearchParams();
  const params=searchParams?.get('cities')?.split(',').map((value)=>+value)

  const {
    data: ads,
    isLoading: isLoadingResult,
    error: resualtError,
  } = useQuery({
    queryKey: ["search", query,params],
    queryFn: () => getResualt(query,params),
    enabled: !!query,
    staleTime:120000
  });
  return { ads, isLoadingResult, resualtError };
}
export { useGetSearchResult };
