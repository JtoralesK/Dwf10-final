import styled from "styled-components";
import { InvisibleButton } from "@/ui/buttons";
import { useRouter } from "next/router";
import { me } from "@/hooks/me";
import { LargueTextBold } from "@/ui/text";
import { mutate } from "swr";
import { deleteMeLocalStorage } from "@/lib/localStorage";
import { LoaderCircular } from "@/ui/loaders/loader";
const WhiteLargueTextBold = styled(LargueTextBold)`
  color: white;
`;
import { ResponsiveDivDisplayInitial } from "@/ui/divStyled";

export const SingninButton = () => {
  const { resp: data, isLoading } = me();
  const router = useRouter();
  const clickIniciar = () => {
    if (data) router.push("/profile");
    router.push("/signin");
  };
  const salir = () => {
    deleteMeLocalStorage();
    mutate("/me", null, false);
    router.push("/");
  };
  if (isLoading)
    return (
      <ResponsiveDivDisplayInitial>
        <LoaderCircular />
      </ResponsiveDivDisplayInitial>
    );

  if (data.email)
    return (
      <ResponsiveDivDisplayInitial>
        <InvisibleButton onClick={salir}>
          <WhiteLargueTextBold>Cerrar Secion</WhiteLargueTextBold>
        </InvisibleButton>
      </ResponsiveDivDisplayInitial>
    );
  return (
    <ResponsiveDivDisplayInitial>
      <InvisibleButton onClick={clickIniciar}>
        <WhiteLargueTextBold>Ingresá</WhiteLargueTextBold>
      </InvisibleButton>
    </ResponsiveDivDisplayInitial>
  );
};
export const CheckMyPerfilButton = () => {
  const { resp: data, isLoading } = me();
  const router = useRouter();
  const check = () => {
    if (data.error) {
      router.push("/signin");
    } else router.push("/profile");
  };
  return (
    <ResponsiveDivDisplayInitial>
      <InvisibleButton onClick={check}>
        <WhiteLargueTextBold>Mi cuenta</WhiteLargueTextBold>
      </InvisibleButton>
    </ResponsiveDivDisplayInitial>
  );
};
