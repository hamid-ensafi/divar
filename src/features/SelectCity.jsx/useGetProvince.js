import { useQuery } from "@tanstack/react-query";
import { getProvince } from "../../service/apiProvince";

function useGetProvince() {
  const {
    data: province,
    isLoading: isLoadingProvince,
    error: provinceError,
  } = useQuery({
    queryKey: ["province"],
    queryFn: getProvince,
    staleTime: 120000,
  });
  return { province, isLoadingProvince, provinceError };
}
export { useGetProvince };
