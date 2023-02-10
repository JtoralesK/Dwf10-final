import { Title } from "@/ui/text";
import styled from "styled-components";
import { SliderImg } from "./img-slider";
const DivCenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  background-color: paleturquoise;
`;

export function SectionEccomerce() {
  return (
    <DivCenterSection>
      <SliderImg />
    </DivCenterSection>
  );
}
