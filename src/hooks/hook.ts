import { fetchAPI } from "@/lib/api";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

export function useProduct(id: string) {
  const { data, error, isLoading } = useSWRImmutable(
    "/products/" + id,
    fetchAPI
  );
  const resp = data ? data : null;
  return { resp, error, isLoading };
}

export function searchProducts(q: string, limit: number, offset: number) {
  const { data, error, isLoading } = useSWRImmutable(
    `/search?q=${q}&offset=${offset}&limit=${limit}`,
    fetchAPI
  );
  const resp = data ? data.results : null;
  return { resp, error, isLoading };
}
export function me() {
  const { data, error, isLoading } = useSWRImmutable("/me", fetchAPI);
  const resp = data ? data.resp : null;
  return { resp, error, isLoading };
}
