import { Title } from "@/ui/text";
import styled from "styled-components";
import { InputText } from "@/ui/input";
import { BlueButton } from "@/ui/buttons";
const DivTitle = styled.div`
  text-align: center;
  margin-top: 90px;
  @media (min-width: 768px) {
    margin-top: 120px;
  }
`;
const DivCenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
`;
const BoxBuscar = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 20px;
  width: 255px;
  @media (min-width: 768px) {
    width: 350;
  }
`;
export function SectionEccomerce() {
  return (
    <DivCenterSection>
      <DivTitle>
        <Title>
          El mejor<br></br>e-commerce
        </Title>
      </DivTitle>
      <BoxBuscar>
        <InputText placeholder="Encontra tu producto ideal"></InputText>
        <BlueButton>Buscar</BlueButton>
      </BoxBuscar>
    </DivCenterSection>
  );
}
