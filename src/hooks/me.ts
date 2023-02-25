import { fetchAPI } from "@/lib/api";
import useSWRImmutable from "swr/immutable";
import useSWR from "swr";
export function me() {
  const { data, error, isLoading } = useSWR("/me", fetchAPI);
  const resp = data ? data.resp : false;
  return { resp, error, isLoading };
}
