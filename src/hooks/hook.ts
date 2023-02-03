import { fetchAPI } from "@/lib/api";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

export function useMe() {
  const { data, error, isLoading } = useSWR("/me", fetchAPI);

  if (error) return error;
  if (data) return data;
}
export function useProduct(id: string) {
  const { data, error, isLoading } = useSWRImmutable(
    "/products/" + id,
    fetchAPI
  );
  if (error) return error;
  if (data) return data;
}

export function meProdcuts() {
  const { data, error, isLoading } = useSWRImmutable(
    "/search?q=a&offset=0&limit=2",
    fetchAPI
  );
  if (error) return error;
  if (data) return data;
}
