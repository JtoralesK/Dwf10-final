import styled from "styled-components";
import { Subtitle } from "@/ui/text";
import { Prop } from "./prop";
import { SectionLinks } from "./windowSections";
import { InvisibleButton } from "@/ui/buttons";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const state = p.state ? { display: "initial" } : { display: "none" };
  const click = (p: string) => {
    router.push(p);
  };
  return (
    <Window style={state}>
      <SectionLinks>
        <InvisibleButton
          onClick={() => {
            click("/signin");
          }}
        >
          <SubtitleWhite>Ingresar</SubtitleWhite>
        </InvisibleButton>
        <InvisibleButton>
          <SubtitleWhite>Mi perfil</SubtitleWhite>
        </InvisibleButton>
        <InvisibleButton>
          <SubtitleWhite>Buscar</SubtitleWhite>
        </InvisibleButton>
      </SectionLinks>
    </Window>
  );
}
