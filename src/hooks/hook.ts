import { fetchAPI } from "@/lib/api";
import swr from "swr";
import useSWRImmutable from "swr/immutable";
import { useState } from "react";
import { useRouter } from "next/router";

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

export function GoMercadoPago(link: string) {
  const router = useRouter();
  router.push(link);
}
