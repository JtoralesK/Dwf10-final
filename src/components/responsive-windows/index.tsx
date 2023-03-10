import styled from "styled-components";
import { BodyTextBold } from "@/ui/text";
import { Prop } from "./prop";
import { WindowButton } from "./window-button";
import { me } from "@/hooks/me";
import { LoaderCircular } from "@/ui/loaders/loader";
import { ContrastButton } from "@/ui/buttons";
import { ButtonRedirect } from "../redirectButtons";
const Window = styled.div`
  width: 100%;
  background-color: #faf6d0;
  position: absolute;
  z-index: 10;
  transition: 0.7s all ease;
  padding: 30px 10px;
`;
export const SectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
`;
const LinkCerrarSecion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15vh;
`;
const EmailBrown = styled(BodyTextBold)`
  color: var(--main-contrast-color);
`;
export function ResponsiveWindow(p: Prop) {
  const { resp, isLoading } = me();
  const { clickIniciar, clickSalir, clickHome } = ButtonRedirect();
  let logged: boolean = false;
  if (resp) logged = !resp.error && true;
  return (
    <Window style={p.state ? { marginRight: "0%" } : { marginLeft: "-100%" }}>
      <SectionLinks>
        <WindowButton function={clickHome} name={"Inicio"} />
        <WindowButton function={clickIniciar} name={"Ingresar"} />
        <WindowButton function={clickIniciar} name={"Mi cuenta"} />
      </SectionLinks>
      <LinkCerrarSecion>
        {isLoading && <LoaderCircular />}
        {logged && (
          <LinkCerrarSecion>
            <EmailBrown>{resp && resp.email}</EmailBrown>
            <ContrastButton onClick={clickSalir}>
              <BodyTextBold>Cerrar sesión</BodyTextBold>
            </ContrastButton>
          </LinkCerrarSecion>
        )}
      </LinkCerrarSecion>
    </Window>
  );
}
