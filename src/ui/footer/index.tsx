import styled from "styled-components";
import {
  SectionFooterPerfil,
  SectionFooterRedes,
  SectionLicenceFooter,
} from "@/ui/footer/sectionsFooter";
import { FlexCenterDiv } from "@/ui/divStyled/index";
const BoxFooter = styled.footer`
  height: 648px;
  background-color: var(--main-contrast-color);
  color: white;
  padding: 30px;
  @media (min-width: 768px) {
    height: 400px;
    padding: 80px;
  }
`;
const BoxFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-around;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 250px;
    justify-content: space-between;
  }
`;
const MaxBoxFooter = styled.div`
  width: 1200px;
`;

export function Footer() {
  return (
    <BoxFooter>
      <FlexCenterDiv>
        <MaxBoxFooter>
          <BoxFooterContent>
            <SectionFooterPerfil />
            <SectionFooterRedes />
          </BoxFooterContent>
          <SectionLicenceFooter />
        </MaxBoxFooter>
      </FlexCenterDiv>
    </BoxFooter>
  );
}
