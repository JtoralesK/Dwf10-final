import { Header } from "@/components/header";
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

  return (
    <>
      <LayoutSection>
        <Header
          setSearch={(e) => console.log({ 1: e })}
          burgerButtonState={headerState}
          onClickMenu={clickMenuToggle}
        />
        <div style={{ position: "relative" }}>
          {children}
          <ResponsiveDivDisplayNone>
            <ResponsiveWindow onClick={clickMenuToggle} state={headerState} />
          </ResponsiveDivDisplayNone>
        </div>
      </LayoutSection>
      <Footer />
    </>
  );
}
