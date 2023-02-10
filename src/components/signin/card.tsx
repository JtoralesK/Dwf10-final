import styled from "styled-components";
import { FucsiaButton } from "@/ui/buttons";
import { Subtitle } from "@/ui/text";

const Content = styled.div`
  height: 300px;
  background-color: palegoldenrod;
  margin-top: 80px;
  width: 300px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;
const ContentButton = styled(FucsiaButton)`
  display: block;
`;
const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
`;

const DivButton = styled.div`
  display: "flex";
  justify-content: "flex-end";
  width: "100%";
`;
export function Card({ children }: any) {
  return (
    <>
      <Content>
        <ContentCard>
          <Subtitle>Ingresa</Subtitle>
          {children}
          <DivButton>
            <div style={{ textAlign: "right" }}>
              <ContentButton>Continuar</ContentButton>
            </div>
          </DivButton>
        </ContentCard>
      </Content>
    </>
  );
}
