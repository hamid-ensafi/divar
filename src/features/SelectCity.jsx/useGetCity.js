import { useQuery } from "@tanstack/react-query";
import { getCity } from "../../service/apiProvince";

function useGetCity(query) {
  const {
    data: city,
    isLoading: isLoadingCity,
    error: cityError,
  } = useQuery({
    queryKey: ["city", query],
    queryFn: () => getCity(query),
    enabled: !!query,
    staleTime:12_0000
  });
  return { city, isLoadingCity, cityError };
}
export { useGetCity };
