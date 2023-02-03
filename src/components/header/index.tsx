import styled from "styled-components";
import { LogoWhite } from "@/ui/Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonMenu } from "@/ui/buttons/burguerButton";
import { SearchInput } from "../input-search";
import { FucsiaButton } from "@/ui/buttons";
import { InvisibleButton } from "@/ui/buttons";
import { Prop } from "./headerProps";
import {
  ResponsiveDivDisplayNone,
  ResponsiveDivDisplayInitial,
} from "@/ui/divStyled";
const HeaderBox = styled.header`
  background-color: var(--main-contrast-color);
  height: 70px;
  width: 100%;
  padding: 18px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    height: 106px;
    padding: 38px 80px;
    position: static;
  }
`;
const ButtonFussiaDiv = styled.div`
  width: 172px;
`;
export function Header(p: Prop) {
  const clickMenu = () => {
    console.log(3);
    if (p.onClickMenu) p.onClickMenu();
  };
  const clickIniciar = () => {
    if (p.onClickIniciarSecion) p.onClickIniciarSecion();
  };
  return (
    <HeaderBox>
      <SearchInput
        setSearch={(e) => {
          if (p.setSearch) p.setSearch(e);
        }}
      />
      <ResponsiveDivDisplayNone>
        <InvisibleButton onClick={clickMenu}>
          <ButtonMenu state={p.burgerButtonState}></ButtonMenu>
        </InvisibleButton>
      </ResponsiveDivDisplayNone>
      <div style={{ fontSize: "30px;" }}>
        <AiOutlineShoppingCart style={{ color: "white", width: "20px" }} />
      </div>
      <ResponsiveDivDisplayInitial>
        <ButtonFussiaDiv>
          <FucsiaButton onClick={clickIniciar}>Ingresar</FucsiaButton>
        </ButtonFussiaDiv>
      </ResponsiveDivDisplayInitial>
    </HeaderBox>
  );
}
