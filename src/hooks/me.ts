import { fetchAPI } from "@/lib/api";
import useSWRImmutable from "swr/immutable";
export function me() {
  const { data, error, isLoading } = useSWRImmutable("/me", fetchAPI);
  const resp = data ? data.resp : null;
  return { resp, error, isLoading };
}