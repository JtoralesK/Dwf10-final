import styled from "styled-components";
import { BodyTextBold } from "@/ui/text";
import { Prop } from "./prop";
import { SectionLinks } from "./windowSections";
import { WindowButton } from "./windowSections";
import { me } from "@/hooks/me";
import { LoaderCircular } from "@/ui/loaders/loader";
import { mutate } from "swr";
import { deleteMeLocalStorage } from "@/lib/localStorage";
import { useRouter } from "next/router";
import { ContrastButton } from "@/ui/buttons";
const Window = styled.div`
  width: 100%;
  background-color: #faf6d0;
  position: absolute;
  z-index: 10;
  transition: 0.7s all ease;
  padding: 30px 10px;
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
  const router = useRouter();
  const salir = () => {
    deleteMeLocalStorage();
    mutate("/me", null, false);
    router.push("/");
  };
  let logged: boolean = false;
  if (resp) logged = !resp.error && true;
  return (
    <Window style={p.state ? { marginRight: "0%" } : { marginLeft: "-100%" }}>
      <SectionLinks>
        <WindowButton name={"Inicio"} page={"/"} />
        {!logged && <WindowButton name={"Ingresar"} page={"/signin"} />}
        <WindowButton name={"Mi cuenta"} page={"/profile"} />
      </SectionLinks>
      <LinkCerrarSecion>
        {isLoading && <LoaderCircular />}
        {logged && (
          <LinkCerrarSecion>
            <EmailBrown>{resp && resp.email}</EmailBrown>
            <ContrastButton onClick={salir}>
              <BodyTextBold>Cerrar sesión</BodyTextBold>
            </ContrastButton>
          </LinkCerrarSecion>
        )}
      </LinkCerrarSecion>
    </Window>
  );
}
