import styled from "styled-components";
import { BodyText, LargueText } from "../text";
import { TwitterLogo, InstagramLogo } from "../icons";
import { FlexRowDivAlingCenter } from "../divStyled";
import { InvisibleButton } from "../buttons";
import { ButtonRedirect } from "@/components/redirectButtons";
const LogoConteiner = styled(FlexRowDivAlingCenter)`
  gap: 7px;
`;
const BodyTextWhite = styled(BodyText)`
  color: white;
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
const FooterButton = styled(InvisibleButton)`
  font-size: 16px;
  color: var(--main-color);
  text-align: left;
`;
export function SectionFooterPerfil() {
  const { clickIniciar, clickHome, clickSalir } = ButtonRedirect();
  return (
    <MySectionPefilFooter>
      <FooterButton onClick={clickIniciar}>Ingresar</FooterButton>
      <FooterButton onClick={clickIniciar}>Mi cuenta</FooterButton>
      <FooterButton onClick={clickHome}>Buscar</FooterButton>
      <FooterButton onClick={clickSalir}>Cerrar Sesión</FooterButton>
    </MySectionPefilFooter>
  );
}

export function SectionFooterRedes() {
  const { clickHome } = ButtonRedirect();
  return (
    <MySectionPefilFooter>
      <LargueTextWhite>Redes</LargueTextWhite>
      <InvisibleButton>
        <LogoConteiner>
          <TwitterLogo />
          <BodyTextWhite onClick={clickHome}>My E-Commerce</BodyTextWhite>
        </LogoConteiner>
      </InvisibleButton>
      <InvisibleButton>
        <LogoConteiner>
          <InstagramLogo />
          <BodyTextWhite onClick={clickHome}>My E-Commerce</BodyTextWhite>
        </LogoConteiner>
      </InvisibleButton>
    </MySectionPefilFooter>
  );
}
export function SectionLicenceFooter() {
  return <BodyTextWhite>©2022 apx</BodyTextWhite>;
}
