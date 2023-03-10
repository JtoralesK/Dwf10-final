import { useRouter } from "next/router";
import { me } from "@/hooks/me";
import { mutate } from "swr";
import { deleteMeLocalStorage } from "@/lib/localStorage";
export const ButtonRedirect = () => {
  const { resp: data, isLoading } = me();
  const router = useRouter();
  const clickIniciar = () => {
    if (data.error) router.push("/signin");
    else router.push("/profile");
  };
  const clickSalir = () => {
    deleteMeLocalStorage();
    mutate("/me", null, false);
    router.push("/");
  };
  const clickHome = () => {
    console.log(2);

    router.push("/");
  };
  return { clickIniciar, clickSalir, clickHome };
};
