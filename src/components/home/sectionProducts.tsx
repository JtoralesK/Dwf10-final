import styled from "styled-components";
import { Subtitle } from "@/ui/text";
import { Products } from "./products";
import {
  ResponsiveDivDisplayInitial,
  ResponsiveDivDisplayNone,
} from "@/ui/divStyled";
const SectionProductsDiv = styled.section`
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
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
`;

export function SectionProducts() {
  return (
    <SectionProductsDiv>
      <SubtitleDiv>
        <Subtitle>Productos Trending</Subtitle>
      </SubtitleDiv>
      <SectionConten>
        <ResponsiveDivDisplayInitial>
          <Products responsive={true} />
        </ResponsiveDivDisplayInitial>
        <ResponsiveDivDisplayNone>
          <Products responsive={false} />
        </ResponsiveDivDisplayNone>
      </SectionConten>
    </SectionProductsDiv>
  );
}
