import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonMenu } from "@/ui/buttons/burguerButton";
import { SearchInput } from "../input-search";
import { FucsiaButton } from "@/ui/buttons";
import { InvisibleButton } from "@/ui/buttons";
import { Prop } from "./headerProps";
import { useRouter } from "next/router";
import { getToken } from "@/lib/localStorage";
import { WhiteLogo } from "@/ui/icons";
import {
  ResponsiveDivDisplayNone,
  ResponsiveDivDisplayInitial,
} from "@/ui/divStyled";
const HeaderBox = styled.header`
  background-color: var(--main-contrast-color);
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    height: 90px;
    padding: 38px 80px;
    position: static;
  }
`;
const ButtonFussiaDiv = styled.div`
  width: 172px;
`;
export function Header(p: Prop) {
  const router = useRouter();
  const clickMenu = () => {
    if (p.onClickMenu) p.onClickMenu();
  };
  const clickIniciar = () => {
    const token = getToken();
    if (token) router.push("/profile");
    router.push("/signin");
  };
  const home = () => {
    router.push("/");
  };
  const style = { fontSize: "30px", fill: "white" };
  return (
    <HeaderBox>
      <InvisibleButton onClick={home}>
        <WhiteLogo />
      </InvisibleButton>
      <SearchInput />
      <ResponsiveDivDisplayNone>
        <InvisibleButton onClick={clickMenu}>
          <ButtonMenu state={p.burgerButtonState}></ButtonMenu>
        </InvisibleButton>
      </ResponsiveDivDisplayNone>
      <AiOutlineShoppingCart style={style} />
      <ResponsiveDivDisplayInitial>
        <ButtonFussiaDiv>
          <FucsiaButton onClick={clickIniciar}>Ingresar</FucsiaButton>
        </ButtonFussiaDiv>
      </ResponsiveDivDisplayInitial>
    </HeaderBox>
  );
}
