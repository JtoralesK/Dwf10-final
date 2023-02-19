import { BodyTextBold } from "@/ui/text";
import styled from "styled-components";
import { SliderImg } from "../img-slider";
import { SectionProducts } from "./sectionProducts";
import { AiFillCreditCard } from "react-icons/ai";
import { CreditCard } from "@/ui/card/creditsCardsSection";
const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebebeb;
`;
const ContentImg = styled.div`
  width: 100%;
`;
const Section = styled.div`
  min-height: 50vh;
  width: 100%;
  @media (min-width: 678px) {
    width: 80%;
  }
`;

export function SectionEccomerce() {
  return (
    <SectionLayout>
      <ContentImg>
        <SliderImg />
      </ContentImg>
      <Section>
        <CreditCard></CreditCard>
        <SectionProducts></SectionProducts>
      </Section>
    </SectionLayout>
  );
}
