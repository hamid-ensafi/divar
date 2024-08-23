import { useQuery } from "@tanstack/react-query";
import { getProvince } from "../../service/apiProvince";

function useGetProvince(query) {
  const {
    data: province,
    isLoading: isLoadingProvince,
    error: provinceError,
  } = useQuery({
    queryKey: ["province"],
    queryFn: getProvince,
    staleTime: 12_0000,
  });
  return { province, isLoadingProvince, provinceError };
}
export { useGetProvince };
