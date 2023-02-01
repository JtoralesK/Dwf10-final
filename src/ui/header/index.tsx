import styled from "styled-components";
import { LogoWhite } from "../Logo";
import { BurguerLogo } from "../icons";
import { FucsiaButton } from "../buttons";
import { FlexRowDivSpaceBetween } from "../divStyled";
import { InvisibleButton } from "../buttons";
import { Prop } from "./headerProps";
import {
  ResponsiveDivDisplayNone,
  ResponsiveDivDisplayInitial,
} from "../divStyled";
const HeaderBox = styled.header`
  background-color: var(--main-contrast-color);
  height: 84px;
  padding: 18px 24px;
  @media (min-width: 768px) {
    height: 106px;
    padding: 38px 80px;
  }
`;
const ButtonFussiaDiv = styled.div`
  width: 172px;
`;
export function Header(p: Prop) {
  const clickMenu = () => {
    if (p.onClickMenu) p.onClickMenu();
  };
  const clickIniciar = () => {
    if (p.onClickIniciarSecion) p.onClickIniciarSecion();
  };
  return (
    <HeaderBox>
      <FlexRowDivSpaceBetween>
        <LogoWhite />
        <ResponsiveDivDisplayNone>
          <InvisibleButton onClick={clickMenu}>
            <BurguerLogo />
          </InvisibleButton>
        </ResponsiveDivDisplayNone>
        <ResponsiveDivDisplayInitial>
          <ButtonFussiaDiv>
            <FucsiaButton onClick={clickIniciar}>Ingresar</FucsiaButton>
          </ButtonFussiaDiv>
        </ResponsiveDivDisplayInitial>
      </FlexRowDivSpaceBetween>
    </HeaderBox>
  );
}
