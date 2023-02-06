import styled from "styled-components";
import { Subtitle } from "@/ui/text";

const WhiteSubtitle = styled(Subtitle)`
  color: var(--main-color);
  @media (min-width: 768px) {
    color: var(--main-contrast-color);
  }
`;
const SectionProductsDiv = styled.section`
  background-color: var(--sixth-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 150vh;
  @media (min-width: 768px) {
    background-color: var(--third-color);
    min-height: 100vh;
  }
`;
export const SectionConten = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 80px;
    gap: 50px;
  }
`;
const SubtitleDiv = styled.div`
  text-align: center;
  margin-top: 55px;
  @media (min-width: 768px) {
    margin-top: 70px;
  }
`;

export function SectionProducts({ children }: any) {
  return (
    <SectionProductsDiv>
      <SubtitleDiv>
        <WhiteSubtitle>Productos Destacados</WhiteSubtitle>
      </SubtitleDiv>
      <SectionConten>{children}</SectionConten>
    </SectionProductsDiv>
  );
}
