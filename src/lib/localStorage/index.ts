import useSWR from "swr";

export function saveToken(data: any) {
  localStorage.setItem("me", JSON.stringify(data));
}
export function getToken() {
  const data = localStorage.getItem("me");
  return data;
}
