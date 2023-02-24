import styled from "styled-components";
import { FucsiaButton } from "@/ui/buttons";
import { Subtitle } from "@/ui/text";

const Content = styled.div`
  height: 300px;
  background-color: var(--second-color);
  margin-top: 80px;
  width: 300px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
`;

const DivButton = styled.div`
  margin-top: 20px;
`;
export function Card({ children }: any) {
  return (
    <>
      <Content>
        <ContentCard>
          <Subtitle>Ingresa</Subtitle>
          {children}
          <DivButton>
            <FucsiaButton>Continuar</FucsiaButton>
          </DivButton>
        </ContentCard>
      </Content>
    </>
  );
}
