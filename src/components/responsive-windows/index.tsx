import styled from "styled-components";
import { Subtitle } from "@/ui/text";
import { Prop } from "./prop";
import { SectionLinks, SectionCross } from "./windowSections";
import { CrossWhiteLogo } from "@/ui/icons";
import { InvisibleButton } from "@/ui/buttons";
const SubtitleWhite = styled(Subtitle)`
  color: var(--main-color);
`;
const Window = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--main-contrast-color);
`;

export function ResponsiveWindow(p: Prop) {
  const state = p.state ? { display: "initial" } : { display: "none" };
  const click = () => {
    if (p.onClick) p.onClick();
  };
  return (
    <Window style={state}>
      <SectionCross>
        <InvisibleButton onClick={click}>
          <CrossWhiteLogo />
        </InvisibleButton>
      </SectionCross>
      <SectionLinks>
        <SubtitleWhite>Ingresar</SubtitleWhite>
        <SubtitleWhite>Mi perfil</SubtitleWhite>
        <SubtitleWhite>Buscar</SubtitleWhite>
      </SectionLinks>
    </Window>
  );
}
