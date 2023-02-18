import styled from "styled-components";
import { Subtitle } from "@/ui/text";
import { Products } from "./products";

const SectionProductsDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120vh;
  @media (min-width: 678px) {
    min-height: 100vh;
  }
`;
export const SectionConten = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 80px;
  }
`;
const SubtitleDiv = styled.div`
  text-align: center;
  margin-top: 55px;
`;

export function SectionProducts() {
  return (
    <SectionProductsDiv>
      <SubtitleDiv>
        <Subtitle>Productos Trending</Subtitle>
      </SubtitleDiv>
      <SectionConten>
        <Products />
      </SectionConten>
    </SectionProductsDiv>
  );
}
