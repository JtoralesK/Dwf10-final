import { Header } from "@/ui/header";
import { Footer } from "@/ui/footer";
import { ResponsiveDivDisplayNone } from "@/ui/divStyled";
import { ResponsiveWindow } from "../responsive-windows";
import { useState } from "react";
import styled from "styled-components";
const LayoutSection = styled.section`
  width: 100%;
`;
export function Layout({ children }: any) {
  const [headerState, setHeaderState] = useState(false);
  const clickMenuToggle = () => {
    setHeaderState(!headerState);
  };

  const position: any = headerState
    ? { position: "fixed" }
    : { position: "static" };
  return (
    <div>
      <LayoutSection style={position}>
        <Header onClickMenu={clickMenuToggle} />
        <ResponsiveDivDisplayNone>
          <ResponsiveWindow onClick={clickMenuToggle} state={headerState} />
        </ResponsiveDivDisplayNone>
        {children}
      </LayoutSection>
      <Footer />
    </div>
  );
}
