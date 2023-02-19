import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonMenu } from "@/ui/buttons/burguerButton";
import { SearchInput } from "../input-search";
import { InvisibleButton } from "@/ui/buttons";
import { Prop } from "./headerProps";
import { useRouter } from "next/router";
import { WhiteLogo } from "@/ui/icons";
import { me } from "@/hooks/me";
import { LargueTextBold } from "@/ui/text";
import { mutate } from "swr";
import { deleteMeLocalStorage } from "@/lib/localStorage";
const WhiteLargueTextBold = styled(LargueTextBold)`
  color: white;
`;
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
const SingninButton = () => {
  const { resp: data, isLoading } = me();
  if (data) console.log({ data, 2: "2" });

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
  if (isLoading) return <p>loading</p>;
  return (
    <ResponsiveDivDisplayInitial>
      {data.email ? (
        <InvisibleButton onClick={salir}>
          <WhiteLargueTextBold>Cerrar Secion</WhiteLargueTextBold>
        </InvisibleButton>
      ) : (
        <InvisibleButton onClick={clickIniciar}>
          <WhiteLargueTextBold>Ingresá</WhiteLargueTextBold>
        </InvisibleButton>
      )}
    </ResponsiveDivDisplayInitial>
  );
};
export function Header(p: Prop) {
  const router = useRouter();
  const clickMenu = () => {
    if (p.onClickMenu) p.onClickMenu();
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
      <SingninButton />
      <AiOutlineShoppingCart style={style} />
    </HeaderBox>
  );
}
