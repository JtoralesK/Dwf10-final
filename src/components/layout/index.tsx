import { Header } from "@/components/header";
import { Footer } from "@/ui/footer";
import { ResponsiveDivDisplayNone } from "@/ui/divStyled";
import { ResponsiveWindow } from "../responsive-windows";
import { useState } from "react";

export function Layout({ children }: any) {
  const [headerState, setHeaderState] = useState(false);
  const clickMenuToggle = () => {
    setHeaderState(!headerState);
  };

  return (
    <>
      <Header burgerButtonState={headerState} onClickMenu={clickMenuToggle} />
      <ResponsiveDivDisplayNone>
        <ResponsiveWindow onClick={clickMenuToggle} state={headerState} />
      </ResponsiveDivDisplayNone>
      {children}
      <Footer />
    </>
  );
}
