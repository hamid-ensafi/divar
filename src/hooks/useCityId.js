import { useSelector } from "react-redux";
import { getCitySelect } from "../slice/citySelectSlice";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function useCityId() {
  const { cityItemStorage } = useSelector(getCitySelect);

  return useMemo(
    () => cityItemStorage.map((value) => value.id),
    [cityItemStorage],
  );
}

function useCityParams() {
  const [searchParams] = useSearchParams();
  const params = searchParams
    ?.get("cities")
    ?.split(",")
    .map((value) => +value);
  return { params };
}
export { useCityId, useCityParams };
