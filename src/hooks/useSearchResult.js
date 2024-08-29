import { useSearchParams } from "react-router-dom";

function useSearchResultParams() {
  const [searchParams] = useSearchParams();
  let params = searchParams?.get("sortdata");
  if (!params) params = "empty";
  return { params };
}
export { useSearchResultParams };
