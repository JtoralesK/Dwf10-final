import styled from "styled-components";
import { InvisibleButton } from "@/ui/buttons";
import { me } from "@/hooks/me";
import { LargueTextBold } from "@/ui/text";
import { LoaderCircular } from "@/ui/loaders/loader";
import { ButtonRedirect } from "../redirectButtons";
const WhiteLargueTextBold = styled(LargueTextBold)`
  color: white;
`;
import { ResponsiveDivDisplayInitial } from "@/ui/divStyled";

export const SingninButton = () => {
  const { resp: data, isLoading } = me();
  const { clickIniciar, clickSalir } = ButtonRedirect();
  if (isLoading)
    return (
      <ResponsiveDivDisplayInitial>
        <LoaderCircular />
      </ResponsiveDivDisplayInitial>
    );

  if (data.email)
    return (
      <ResponsiveDivDisplayInitial>
        <InvisibleButton onClick={clickSalir}>
          <WhiteLargueTextBold>Cerrar sesión</WhiteLargueTextBold>
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
  const { clickIniciar } = ButtonRedirect();
  return (
    <ResponsiveDivDisplayInitial>
      <InvisibleButton onClick={clickIniciar}>
        <WhiteLargueTextBold>Mi cuenta</WhiteLargueTextBold>
      </InvisibleButton>
    </ResponsiveDivDisplayInitial>
  );
};
