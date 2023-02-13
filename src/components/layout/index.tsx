import { Header } from "@/components/header";
import { Footer } from "@/ui/footer";
import { ResponsiveDivDisplayNone } from "@/ui/divStyled";
import { ResponsiveWindow } from "../responsive-windows";
import { useState } from "react";
import { me } from "@/hooks/me";
export function Layout({ children }: any) {
  const [headerState, setHeaderState] = useState(false);
  const clickMenuToggle = () => {
    setHeaderState(!headerState);
  };
  const { resp, error, isLoading } = me();
  let logged: boolean = false;
  if (resp) logged = !resp.error ?? true;

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
