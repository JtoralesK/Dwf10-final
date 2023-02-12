import styled from "styled-components";
import { BodyTextBold } from "@/ui/text";
import { Prop } from "./prop";
import { SectionLinks } from "./windowSections";
import { InvisibleButton } from "@/ui/buttons";
import { useRouter } from "next/router";
import { click, Page } from "./clickSections";
import { AiOutlinePlus } from "react-icons/ai";
const Window = styled.section`
  width: 100%;
  background-color: #faf6d0;
  position: absolute;
  z-index: 10;
  transition: 0.7s all ease;
  padding: 30px 10px;
`;
const Button = styled(InvisibleButton)`
  text-align: left;
  padding: 20px 0;
`;
type ButtonProp = {
  name: string;
  page: Page;
};
function WindowButton(p: ButtonProp) {
  const router = useRouter();
  const onClick = () => {
    const page = click(p.page);
    router.push(page);
  };
  return (
    <Button onClick={onClick}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <BodyTextBold>{p.name}</BodyTextBold>
        <AiOutlinePlus style={{ fontSize: "15px" }} />
      </div>
    </Button>
  );
}
export function ResponsiveWindow(p: Prop) {
  return (
    <Window style={p.state ? { marginRight: "0%" } : { marginLeft: "-100%" }}>
      <SectionLinks>
        <WindowButton name={"Inicio"} page={"/"} />
        <WindowButton name={"Ingresar"} page={"signin"} />
        <WindowButton name={"Mi cuenta"} page={"profile"} />
        <WindowButton name={"Salir"} page={"/"} />
      </SectionLinks>
    </Window>
  );
}
