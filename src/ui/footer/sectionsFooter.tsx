import styled from "styled-components";
import { BodyText, LargueText } from "../text";
import { TwitterLogo, InstagramLogo } from "../icons";
import { FlexRowDivAlingCenter } from "../divStyled";

const LogoConteiner = styled(FlexRowDivAlingCenter)`
  gap: 7px;
`;

export const BodyTextWhite = styled(BodyText)`
  color: var(--main-color);
  align-items: center;
`;
export const LargueTextWhite = styled(LargueText)`
  color: var(--main-color);
  align-items: center;
`;

const MySectionPefilFooter = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: left;
`;
export function SectionFooterPerfil() {
  return (
    <MySectionPefilFooter>
      <BodyTextWhite>Ingresar</BodyTextWhite>
      <BodyTextWhite>Mi perfil</BodyTextWhite>
      <BodyTextWhite>Buscar</BodyTextWhite>
      <BodyTextWhite>Logout</BodyTextWhite>
    </MySectionPefilFooter>
  );
}

export function SectionFooterRedes() {
  return (
    <MySectionPefilFooter>
      <LargueTextWhite>Redes</LargueTextWhite>
      <LogoConteiner>
        <TwitterLogo />
        <BodyTextWhite>My E-Commerce</BodyTextWhite>
      </LogoConteiner>
      <LogoConteiner>
        <InstagramLogo />
        <BodyTextWhite>My E-Commerce</BodyTextWhite>
      </LogoConteiner>
    </MySectionPefilFooter>
  );
}
export function SectionLicenceFooter() {
  return <BodyTextWhite>©2022 apx</BodyTextWhite>;
}
